import { StorageService } from './storage';

/**
 * Scheduled Task: Runs on the 5th day of every month.
 * Iterates through all active students and batches, checks fee payment status for current month.
 * If fee is unpaid, sends a fee reminder notification including the website link
 * prompting them to visit the fees panel to pay.
 */
export function runMonthlyFeeReminderTask(forceRun = false): {
  ran: boolean;
  count: number;
  message: string;
} {
  const now = new Date();
  const currentDay = now.getDate();
  const currentMonth = now.toLocaleString('en-US', { month: 'long', year: 'numeric' }); // e.g. "July 2026"
  const currentMonthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`; // e.g. "2026-07"
  const storageKey = 'apex_last_fee_reminder_month';
  const lastRunMonth = localStorage.getItem(storageKey);

  // Check if today is on or after 5th day of month
  if (!forceRun) {
    if (currentDay < 5) {
      return {
        ran: false,
        count: 0,
        message: `Scheduled task queued: Runs on the 5th day of every month. Today is day ${currentDay}.`
      };
    }

    if (lastRunMonth === currentMonthKey) {
      return {
        ran: false,
        count: 0,
        message: `Monthly fee reminder task for ${currentMonth} was already executed.`
      };
    }
  }

  // Iterate through active students and batches
  const students = StorageService.getStudents();
  const batches = StorageService.getBatches();
  const feeRecords = StorageService.getFeeRecords();
  const websiteUrl = window.location.origin;

  let reminderCount = 0;

  students.forEach(student => {
    // Check fee payment status for current month
    let currentMonthFee = feeRecords.find(
      f => f.studentId === student.id && f.month === currentMonth
    );

    // If no fee record exists for current month, create unpaid entry
    if (!currentMonthFee) {
      currentMonthFee = StorageService.addFeeRecord({
        studentId: student.id,
        studentName: student.name,
        batchId: student.batchId,
        month: currentMonth,
        amount: student.fees,
        status: 'unpaid'
      });
    }

    // If fee is unpaid, send reminder notification with website link
    if (currentMonthFee.status === 'unpaid') {
      const studentBatch = batches.find(b => b.id === student.batchId);
      const batchTitle = studentBatch ? studentBatch.title : student.batchTitle || 'Chemistry Batch';

      // Prevent spamming duplicate notifications for the same month unless forceRun
      const existingNotifs = StorageService.getNotifications();
      const alreadyNotified = existingNotifs.some(
        n =>
          n.targetStudentId === student.id &&
          n.type === 'fee_reminder' &&
          n.title.includes(currentMonth)
      );

      if (!alreadyNotified || forceRun) {
        StorageService.addNotification({
          title: `Monthly Fee Reminder - ${currentMonth}`,
          message: `Dear ${student.name}, your tuition fee of ₹${student.fees.toLocaleString()} for ${batchTitle} (${currentMonth}) is pending. Please visit your Fees Panel at ${websiteUrl} to pay via UPI.`,
          type: 'fee_reminder',
          timestamp: 'Scheduled 5th-Day Task',
          targetRole: 'student',
          targetStudentId: student.id,
          read: false
        });
        reminderCount++;
      }
    }
  });

  // Save execution status for current month
  localStorage.setItem(storageKey, currentMonthKey);

  return {
    ran: true,
    count: reminderCount,
    message: `Scheduled 5th-day fee reminder task executed for ${currentMonth}. Sent ${reminderCount} student notifications with website payment link.`
  };
}
