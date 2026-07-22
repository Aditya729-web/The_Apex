import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { createAdminClient } from '@/lib/supabase/admin';
import { sendWhatsAppFeeReminder } from '@/lib/whatsapp';
import { formatCurrency, monthKey } from '@/lib/utils';

export async function POST(request) {
  const context = await requireAdmin();
  if (!context) return NextResponse.json({ error: 'Administrator authentication required.' }, { status: 401 });

  try {
    const { studentIds } = await request.json();
    const ids = Array.isArray(studentIds) ? studentIds.filter(Boolean) : [];
    if (!ids.length) return NextResponse.json({ error: 'Select at least one student.' }, { status: 400 });

    const admin = createAdminClient();
    const { data: students, error } = await admin
      .from('profiles')
      .select('id, full_name, phone, monthly_fee, batch_id')
      .in('id', ids)
      .eq('role', 'student')
      .eq('is_active', true);
    if (error) throw error;

    const monthDate = monthKey();
    const monthLabel = new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(new Date(monthDate));
    const deliveries = [];

    for (const student of students || []) {
      const { data: fee } = await admin
        .from('fee_records')
        .select('id, amount, status')
        .eq('student_id', student.id)
        .eq('fee_month', monthDate)
        .maybeSingle();

      const amount = Number(fee?.amount ?? student.monthly_fee ?? 0);
      if (!fee) {
        await admin.from('fee_records').insert({ student_id: student.id, batch_id: student.batch_id, fee_month: monthDate, amount, status: 'unpaid' });
      }

      if (fee?.status !== 'paid' && fee?.status !== 'waived') {
        const body = `Fee reminder for ${monthLabel}: ${formatCurrency(amount)} is pending. Please open the student portal to pay and send the payment screenshot to The Apex Chemistry for confirmation.`;
        await admin.from('notifications').insert({
          recipient_id: student.id,
          type: 'fee',
          title: 'Monthly fee reminder',
          body,
          data: { fee_month: monthDate, amount }
        });
        const provider = await sendWhatsAppFeeReminder({ phone: student.phone, studentName: student.full_name, amount, monthLabel });
        deliveries.push({ studentId: student.id, provider });
      }
    }

    return NextResponse.json({ success: true, count: deliveries.length, deliveries });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Unable to send reminders.' }, { status: 500 });
  }
}
