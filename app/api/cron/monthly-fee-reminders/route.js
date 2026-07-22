import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { sendWhatsAppFeeReminder } from '@/lib/whatsapp';
import { monthKey } from '@/lib/utils';

export const maxDuration = 60;

export async function GET(request) {
  const authorization = request.headers.get('authorization');
  const expected = process.env.CRON_SECRET;
  if (expected && authorization !== `Bearer ${expected}`) {
    return NextResponse.json({ error: 'Unauthorized cron request.' }, { status: 401 });
  }

  try {
    const admin = createAdminClient();
    const { data: students, error } = await admin
      .from('profiles')
      .select('id, full_name, phone, monthly_fee, batch_id')
      .eq('role', 'student')
      .eq('is_active', true);
    if (error) throw error;

    const feeMonth = monthKey();
    const monthLabel = new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(new Date(feeMonth));
    let reminders = 0;
    let whatsappSent = 0;

    for (const student of students || []) {
      const { data: fee } = await admin
        .from('fee_records')
        .select('id, amount, status')
        .eq('student_id', student.id)
        .eq('fee_month', feeMonth)
        .maybeSingle();

      const amount = Number(fee?.amount ?? student.monthly_fee ?? 0);
      if (!fee) {
        await admin.from('fee_records').insert({
          student_id: student.id,
          batch_id: student.batch_id,
          fee_month: feeMonth,
          amount,
          status: 'unpaid'
        });
      }

      if (fee?.status === 'paid' || fee?.status === 'waived') continue;

      const { data: existing } = await admin
        .from('notifications')
        .select('id')
        .eq('recipient_id', student.id)
        .eq('type', 'fee')
        .contains('data', { fee_month: feeMonth, automatic: true })
        .maybeSingle();

      if (!existing) {
        await admin.from('notifications').insert({
          recipient_id: student.id,
          type: 'fee',
          title: 'Monthly fee reminder',
          body: `Your fee of ₹${amount.toLocaleString('en-IN')} for ${monthLabel} is pending. Please use the Fees panel to view the payment QR and send the payment screenshot to The Apex Chemistry for confirmation.`,
          data: { fee_month: feeMonth, amount, automatic: true }
        });
        reminders += 1;
      }

      const result = await sendWhatsAppFeeReminder({ phone: student.phone, studentName: student.full_name, amount, monthLabel });
      if (result.sent) whatsappSent += 1;
    }

    return NextResponse.json({ success: true, reminders, whatsappSent, students: students?.length || 0 });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Cron job failed.' }, { status: 500 });
  }
}
