import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export async function POST(request) {
  try {
    const { studentId, password } = await request.json();
    if (!studentId || !password) {
      return NextResponse.json({ error: 'Student ID and password are required.' }, { status: 400 });
    }

    const admin = createAdminClient();
    const { data: profile, error: profileError } = await admin
      .from('profiles')
      .select('id, email, role, is_active')
      .eq('student_code', String(studentId).trim().toUpperCase())
      .maybeSingle();

    if (profileError || !profile || profile.role !== 'student' || !profile.is_active) {
      return NextResponse.json({ error: 'Invalid Student ID or inactive account.' }, { status: 401 });
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({ email: profile.email, password });
    if (error) {
      return NextResponse.json({ error: 'Invalid Student ID or password.' }, { status: 401 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Unable to log in.' }, { status: 500 });
  }
}
