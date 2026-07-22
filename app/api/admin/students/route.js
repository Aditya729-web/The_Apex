import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { createAdminClient } from '@/lib/supabase/admin';
import { absoluteSiteUrl, monthKey } from '@/lib/utils';

function generatePassword(length = 12) {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghijkmnopqrstuvwxyz';
  const digits = '23456789';
  const symbols = '@#$!';
  const all = upper + lower + digits + symbols;
  const required = [upper, lower, digits, symbols].map((group) => group[crypto.randomInt(group.length)]);
  while (required.length < length) required.push(all[crypto.randomInt(all.length)]);
  for (let index = required.length - 1; index > 0; index -= 1) {
    const target = crypto.randomInt(index + 1);
    [required[index], required[target]] = [required[target], required[index]];
  }
  return required.join('');
}

export async function POST(request) {
  const context = await requireAdmin();
  if (!context) return NextResponse.json({ error: 'Administrator authentication required.' }, { status: 401 });

  const admin = createAdminClient();
  let createdUserId = null;

  try {
    const body = await request.json();
    const fullName = String(body.fullName || '').trim();
    const classLevel = String(body.classLevel || '').trim();
    const batchId = String(body.batchId || '').trim();
    const phone = String(body.phone || '').trim();
    const monthlyFee = Number(body.monthlyFee);

    if (!fullName || !classLevel || !batchId || !phone || !Number.isFinite(monthlyFee) || monthlyFee < 0) {
      return NextResponse.json({ error: 'Complete all student fields with a valid fee.' }, { status: 400 });
    }

    const { data: batch, error: batchError } = await admin
      .from('batches')
      .select('id, title')
      .eq('id', batchId)
      .eq('is_active', true)
      .maybeSingle();

    if (batchError || !batch) {
      return NextResponse.json({ error: 'The selected batch does not exist.' }, { status: 400 });
    }

    const { data: studentCode, error: codeError } = await admin.rpc('next_student_code');
    if (codeError || !studentCode) throw new Error(codeError?.message || 'Unable to generate Student ID.');

    const password = generatePassword();
    const internalEmail = `${String(studentCode).toLowerCase()}@student.theapexchemistry.app`;

    const { data: userData, error: createError } = await admin.auth.admin.createUser({
      email: internalEmail,
      password,
      email_confirm: true,
      user_metadata: { full_name: fullName, role: 'student', student_code: studentCode }
    });

    if (createError) throw new Error(createError.message);
    createdUserId = userData.user.id;

    const { error: profileError } = await admin.from('profiles').insert({
      id: createdUserId,
      role: 'student',
      student_code: studentCode,
      full_name: fullName,
      email: internalEmail,
      phone,
      class_level: classLevel,
      batch_id: batchId,
      monthly_fee: monthlyFee
    });
    if (profileError) throw new Error(profileError.message);

    const { error: feeError } = await admin.from('fee_records').insert({
      student_id: createdUserId,
      batch_id: batchId,
      fee_month: monthKey(),
      amount: monthlyFee,
      status: 'unpaid'
    });
    if (feeError) throw new Error(feeError.message);

    const website = absoluteSiteUrl();
    const message = [
      `Welcome to The Apex Chemistry, ${fullName}.`,
      '',
      `Your Student ID: ${studentCode}`,
      `Temporary Password: ${password}`,
      `Website: ${website}`,
      '',
      'Please keep these credentials private. You can use them to access your batch schedule, fees, notes, tests, ranks and doubt support.'
    ].join('\n');

    return NextResponse.json({
      success: true,
      credentials: { studentId: studentCode, password, website, message, studentName: fullName, batchTitle: batch.title }
    });
  } catch (error) {
    if (createdUserId) await admin.auth.admin.deleteUser(createdUserId);
    return NextResponse.json({ error: error.message || 'Unable to create the student.' }, { status: 500 });
  }
}
