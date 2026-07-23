import React, { useState } from 'react';
import { StorageService } from '../../lib/storage';
import { runMonthlyFeeReminderTask } from '../../lib/scheduledTasks';
import { Student, Batch, FeeRecord } from '../../types';
import {
  Search,
  Bell,
  CheckCircle2,
  Clock,
  MessageCircle,
  Calendar,
  Send,
  IndianRupee
} from 'lucide-react';

export const AdminFees: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(() => StorageService.getStudents());
  const [batches] = useState<Batch[]>(() => StorageService.getBatches());
  const [feeRecords, setFeeRecords] = useState<FeeRecord[]>(() => StorageService.getFeeRecords());

  // Search filter options
  const [filterType, setFilterType] = useState<'ALL' | 'BATCH' | 'STUDENT'>('ALL');
  const [selectedBatchId, setSelectedBatchId] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [reminderSentMessage, setReminderSentMessage] = useState('');

  const refreshData = () => {
    setStudents(StorageService.getStudents());
    setFeeRecords(StorageService.getFeeRecords());
  };

  // Filter students
  const filteredStudents = students.filter(student => {
    if (filterType === 'BATCH' && selectedBatchId && student.batchId !== selectedBatchId) return false;
    if (filterType === 'STUDENT' && selectedStudentId && student.id !== selectedStudentId) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return student.name.toLowerCase().includes(q) || student.id.toLowerCase().includes(q) || student.phone.includes(q);
    }
    return true;
  });

  // Handle personal Fee Reminder
  const handleSendReminder = (student: Student, dueAmount: number) => {
    const formattedPhone = student.phone.replace(/[^0-9]/g, '');
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
    const msg = `🚨 *Fee Payment Reminder - The Apex Chemistry*
Dear ${student.name},
This is a gentle reminder regarding your pending tuition fee of *₹${dueAmount}* for the month of *${currentMonth}*.

Please login to your student portal to complete payment via UPI QR Code or contact Mr. Subhamoy Mondal.
Portal Link: ${window.location.origin}

Thank you,
The Apex Chemistry`;

    const url = `https://wa.me/91${formattedPhone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    // Notify student on portal
    StorageService.addNotification({
      title: 'Fee Payment Reminder',
      message: `Gentle reminder: Please visit your Fees panel at ${window.location.origin} to clear your pending fee of ₹${dueAmount}.`,
      type: 'fee_reminder',
      timestamp: 'Just now',
      targetRole: 'student',
      targetStudentId: student.id,
      read: false
    });

    setReminderSentMessage(`Reminder sent to ${student.name}!`);
    setTimeout(() => setReminderSentMessage(''), 3000);
  };

  // Trigger 5th of Month Automated Batch Fee Reminders
  const handleTriggerMonthlyAutoReminders = () => {
    const result = runMonthlyFeeReminderTask(true);
    refreshData();
    setReminderSentMessage(result.message);
    setTimeout(() => setReminderSentMessage(''), 5000);
  };

  const handleVerifyPayment = (recordId: string, status: 'paid' | 'unpaid') => {
    StorageService.updateFeeStatus(recordId, status);
    refreshData();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Fee Management & Reminders</h2>
          <p className="text-sm text-slate-500">Track student payment history, verify UPI receipts, and dispatch fee alerts.</p>
        </div>

        {/* 5th of Month Auto Reminder Banner Button */}
        <button
          onClick={handleTriggerMonthlyAutoReminders}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" /> Trigger 5th-Day Monthly Fee Reminder
        </button>
      </div>

      {reminderSentMessage && (
        <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs rounded-xl animate-in fade-in">
          ✓ {reminderSentMessage}
        </div>
      )}

      {/* SEARCH PANEL WITH DROPDOWNS FOR BATCH OR STUDENT */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-800">Search & Filter Fee Ledger</h3>

        <div className="grid md:grid-cols-12 gap-3">
          {/* Dropdown 1: Filter Mode */}
          <div className="md:col-span-3">
            <label className="block text-xs font-semibold text-slate-500 mb-1">Search Mode</label>
            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value as any)}
              className="w-full text-xs px-3 py-2.5 sm:py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
            >
              <option value="ALL">All Students</option>
              <option value="BATCH">Filter by Batch Dropdown</option>
              <option value="STUDENT">Filter by Specific Student</option>
            </select>
          </div>

          {/* Conditional Dropdown 2: Batch Select */}
          {filterType === 'BATCH' && (
            <div className="md:col-span-4">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Select Batch</label>
              <select
                value={selectedBatchId}
                onChange={e => setSelectedBatchId(e.target.value)}
                className="w-full text-xs px-3 py-2.5 sm:py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              >
                <option value="">-- Choose Batch --</option>
                {batches.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.title} ({b.className})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Conditional Dropdown 3: Student Select */}
          {filterType === 'STUDENT' && (
            <div className="md:col-span-4">
              <label className="block text-xs font-semibold text-slate-500 mb-1">Select Student</label>
              <select
                value={selectedStudentId}
                onChange={e => setSelectedStudentId(e.target.value)}
                className="w-full text-xs px-3 py-2.5 sm:py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              >
                <option value="">-- Choose Student --</option>
                {students.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.id})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Search Query Input */}
          <div className="md:col-span-5 relative">
            <label className="block text-xs font-semibold text-slate-500 mb-1">Search Keywords</label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Name, Student ID, or Phone..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Student Fee Records Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs whitespace-nowrap">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider">
                <th className="p-3.5">Student Details</th>
                <th className="p-3.5">Batch</th>
                <th className="p-3.5">Monthly Fee</th>
                <th className="p-3.5">Payment History</th>
                <th className="p-3.5">Verification</th>
                <th className="p-3.5 text-right">Personal Fee Reminder</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredStudents.map(student => {
                const sRecords = feeRecords.filter(f => f.studentId === student.id);
                const pendingRecords = sRecords.filter(f => f.status === 'unpaid' || f.status === 'pending_verification');
                const totalDue = pendingRecords.reduce((acc, f) => acc + f.amount, 0);

                return (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5">
                      <p className="font-bold text-slate-900">{student.name}</p>
                      <p className="text-[11px] font-mono text-amber-600 font-semibold">{student.id}</p>
                      <p className="text-[11px] text-slate-400">{student.phone}</p>
                    </td>

                    <td className="p-3.5">
                      <p className="font-semibold text-slate-800">{student.className}</p>
                      <p className="text-[11px] text-slate-500">{student.batchTitle}</p>
                    </td>

                    <td className="p-3.5 font-extrabold text-slate-900">₹{student.fees.toLocaleString()} / mo</td>

                    <td className="p-3.5">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {sRecords.map(r => (
                          <span
                            key={r.id}
                            title={`${r.month}: ${r.status}`}
                            className={`px-2 py-0.5 text-[10px] font-bold rounded-md border ${
                              r.status === 'paid'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : r.status === 'pending_verification'
                                ? 'bg-amber-50 text-amber-800 border-amber-300 animate-pulse'
                                : 'bg-red-50 text-red-700 border-red-200'
                            }`}
                          >
                            {r.month.split(' ')[0]}: {r.status === 'paid' ? 'Paid' : r.status === 'pending_verification' ? 'Pending Approval' : 'Unpaid'}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="p-3.5">
                      {sRecords.some(r => r.status === 'pending_verification') ? (
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full block text-center">
                            Screenshot Uploaded
                          </span>
                          <div className="flex gap-1">
                            <button
                              onClick={() => {
                                const pending = sRecords.find(r => r.status === 'pending_verification');
                                if (pending) handleVerifyPayment(pending.id, 'paid');
                              }}
                              className="px-2 py-0.5 bg-emerald-600 text-white font-bold text-[10px] rounded"
                            >
                              Approve
                            </button>
                          </div>
                        </div>
                      ) : totalDue === 0 ? (
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Up to Date
                        </span>
                      ) : (
                        <span className="text-red-600 font-bold">₹{totalDue.toLocaleString()} Due</span>
                      )}
                    </td>

                    <td className="p-3.5 text-right">
                      {totalDue > 0 ? (
                        <button
                          onClick={() => handleSendReminder(student, totalDue)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 ml-auto"
                        >
                          <MessageCircle className="w-3.5 h-3.5" /> Send Reminder
                        </button>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">No Due</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
