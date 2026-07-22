'use client';

import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Brand from '@/components/Brand';
import { Icon } from '@/components/Icons';
import { createClient } from '@/lib/supabase/client';

export default function LoginClient() {
  const params = useSearchParams();
  const router = useRouter();
  const initialMode = params.get('mode') === 'admin' ? 'admin' : 'student';
  const [mode, setMode] = useState(initialMode);
  const [form, setForm] = useState({ studentId: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const supabase = useMemo(() => createClient(), []);

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'student') {
        const response = await fetch('/api/auth/student-login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId: form.studentId.trim(), password: form.password })
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Unable to log in.');
        router.replace('/student');
      } else {
        const { data, error: authError } = await supabase.auth.signInWithPassword({
          email: form.email.trim(),
          password: form.password
        });
        if (authError) throw authError;

        const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).maybeSingle();
        if (profile?.role !== 'admin') {
          await supabase.auth.signOut();
          throw new Error('This account does not have administrator access.');
        }
        router.replace('/admin');
      }
      router.refresh();
    } catch (caught) {
      setError(caught.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-brand-panel">
        <Brand href="/" />
        <div className="login-image-wrap"><Image src="/assets/teacher.jpg" alt="The Apex Chemistry" fill priority sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="login-brand-copy"><span>THE APEX CHEMISTRY</span><h1>Learn with clarity. Perform with confidence.</h1><p>Secure access to batches, fees, notes, tests, ranks and doubt support.</p></div>
      </section>
      <section className="login-form-panel">
        <div className="login-card">
          <div className="login-tabs">
            <button className={mode === 'student' ? 'active' : ''} onClick={() => { setMode('student'); setError(''); }}>Student Login</button>
            <button className={mode === 'admin' ? 'active' : ''} onClick={() => { setMode('admin'); setError(''); }}>Admin Login</button>
          </div>
          <div className="login-heading"><span className="login-icon"><Icon name={mode === 'admin' ? 'profile' : 'students'} /></span><h2>{mode === 'admin' ? 'Administrator access' : 'Welcome back, student'}</h2><p>{mode === 'admin' ? 'Use the authenticated admin email created during setup.' : 'Use the Student ID and password shared by The Apex Chemistry.'}</p></div>
          <form onSubmit={submit} className="form-stack">
            {mode === 'student' ? (
              <label>Student ID<input value={form.studentId} onChange={(e) => update('studentId', e.target.value.toUpperCase())} placeholder="Example: APEX1001" autoComplete="username" required /></label>
            ) : (
              <label>Admin email<input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="admin@example.com" autoComplete="username" required /></label>
            )}
            <label>Password<input type="password" value={form.password} onChange={(e) => update('password', e.target.value)} placeholder="Enter password" autoComplete="current-password" required /></label>
            {error && <div className="form-error">{error}</div>}
            <button className="button button-gold button-full button-lg" disabled={loading}>{loading ? 'Signing in…' : `Login as ${mode === 'admin' ? 'Admin' : 'Student'}`}</button>
          </form>
          <a className="back-home" href="/">← Return to website</a>
        </div>
      </section>
    </main>
  );
}
