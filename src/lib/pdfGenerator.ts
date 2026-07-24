import jsPDF from 'jspdf';
import { Student, FeeRecord } from '../types';

export function generateFeeReceiptPDF(student: Student, feeRecords: FeeRecord[], singleRecord?: FeeRecord) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Page dimensions: 210mm x 297mm
  // Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, 210, 38, 'F');

  // Amber Accent Line
  doc.setFillColor(251, 191, 36); // amber-400
  doc.rect(0, 38, 210, 2, 'F');

  // Title Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('THE APEX CHEMISTRY', 14, 16);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(226, 232, 240);
  doc.text('Excellence in Chemistry Education | Faculty: Suvomoy Mandal', 14, 23);
  doc.text('UPI ID: suvoyom@oksbi | Institute Fees Portal', 14, 29);

  // Document Badge
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(251, 191, 36);
  doc.text(singleRecord ? 'PAYMENT RECEIPT' : 'FEE STATEMENT', 196, 16, { align: 'right' });

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(203, 213, 225);
  const dateStr = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  doc.text(`Date: ${dateStr}`, 196, 23, { align: 'right' });
  doc.text(`Ref: RCPT-${student.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`, 196, 29, { align: 'right' });

  // Student Profile Summary Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(14, 45, 182, 34, 3, 3, 'FD');

  doc.setTextColor(15, 23, 42);
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'bold');
  doc.text('STUDENT INFORMATION', 18, 52);

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Student Name:', 18, 60);
  doc.text('Student ID:', 18, 66);
  doc.text('Class / Grade:', 18, 72);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text(student.name, 45, 60);
  doc.text(student.id, 45, 66);
  doc.text(student.className, 45, 72);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Batch:', 110, 60);
  doc.text('Phone:', 110, 66);
  doc.text('Joining Date:', 110, 72);

  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text(student.batchTitle || 'Apex Chemistry Batch', 132, 60);
  doc.text(student.phone || '—', 132, 66);
  doc.text(student.joiningDate || '—', 132, 72);

  // Table Header
  let startY = 86;
  doc.setFillColor(241, 245, 249);
  doc.setDrawColor(203, 213, 225);
  doc.rect(14, startY, 182, 8, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Academic Month', 18, startY + 5.5);
  doc.text('Amount', 72, startY + 5.5);
  doc.text('Status', 112, startY + 5.5);
  doc.text('Date / Transaction Ref', 150, startY + 5.5);

  startY += 8;

  const recordsToDisplay = singleRecord ? [singleRecord] : feeRecords;

  recordsToDisplay.forEach((record, index) => {
    const rowY = startY + (index * 9);

    if (index % 2 === 1) {
      doc.setFillColor(248, 250, 252);
      doc.rect(14, rowY, 182, 9, 'F');
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(record.month, 18, rowY + 6);

    doc.setFont('helvetica', 'normal');
    doc.text(`Rs. ${record.amount.toLocaleString('en-IN')}`, 72, rowY + 6);

    if (record.status === 'paid') {
      doc.setTextColor(16, 185, 129);
      doc.setFont('helvetica', 'bold');
      doc.text('PAID / CLEARED', 112, rowY + 6);
    } else if (record.status === 'pending_verification') {
      doc.setTextColor(217, 119, 6);
      doc.setFont('helvetica', 'bold');
      doc.text('PENDING VERIF.', 112, rowY + 6);
    } else {
      doc.setTextColor(225, 29, 72);
      doc.setFont('helvetica', 'bold');
      doc.text('UNPAID', 112, rowY + 6);
    }

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(record.paidDate || record.transactionRef || '—', 150, rowY + 6);

    doc.setDrawColor(226, 232, 240);
    doc.line(14, rowY + 9, 196, rowY + 9);
  });

  const totalY = startY + (recordsToDisplay.length * 9) + 6;

  // Financial Summary Card
  const totalAmount = recordsToDisplay.reduce((sum, r) => sum + r.amount, 0);
  const totalPaid = recordsToDisplay.filter(r => r.status === 'paid').reduce((sum, r) => sum + r.amount, 0);
  const totalDue = recordsToDisplay.filter(r => r.status === 'unpaid').reduce((sum, r) => sum + r.amount, 0);

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(110, totalY, 86, 28, 2, 2, 'FD');

  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text('Total Fees Billed:', 114, totalY + 7);
  doc.text('Total Amount Cleared:', 114, totalY + 14);
  doc.text('Outstanding Dues:', 114, totalY + 21);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`Rs. ${totalAmount.toLocaleString('en-IN')}`, 192, totalY + 7, { align: 'right' });

  doc.setTextColor(16, 185, 129);
  doc.text(`Rs. ${totalPaid.toLocaleString('en-IN')}`, 192, totalY + 14, { align: 'right' });

  doc.setTextColor(225, 29, 72);
  doc.text(`Rs. ${totalDue.toLocaleString('en-IN')}`, 192, totalY + 21, { align: 'right' });

  // Verification Footer
  const footerY = Math.max(totalY + 38, 235);

  doc.setDrawColor(203, 213, 225);
  doc.setLineDashPattern([1, 1], 0);
  doc.line(14, footerY, 196, footerY);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('THE APEX CHEMISTRY - ACADEMIC PORTAL', 14, footerY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('This is an official computer-generated fee statement and receipt.', 14, footerY + 11);
  doc.text('For support or queries regarding fee credits, contact: suvoyom@oksbi', 14, footerY + 15);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);
  doc.text('Suvomoy Mandal', 196, footerY + 11, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Authorized Faculty & Director', 196, footerY + 15, { align: 'right' });

  // Save File
  const safeStudentName = student.name.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = singleRecord
    ? `Fee_Receipt_${safeStudentName}_${singleRecord.month.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`
    : `Fee_Receipt_Statement_${safeStudentName}.pdf`;

  doc.save(filename);
}
