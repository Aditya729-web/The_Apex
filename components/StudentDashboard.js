'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import DashboardShell from '@/components/DashboardShell';
import Modal from '@/components/Modal';
import Toast from '@/components/Toast';
import { Icon } from '@/components/Icons';
import { createClient } from '@/lib/supabase/client';
import { DAY_ORDER, formatCurrency, formatDate, monthKey, safeFileName } from '@/lib/utils';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'fees', label: 'Fees', icon: 'fees' },
  { key: 'notes', label: 'Notes', icon: 'notes' },
  { key: 'tests', label: 'Tests', icon: 'tests' },
  { key: 'doubts', label: 'Doubts', icon: 'doubts' },
  { key: 'profile', label: 'Profile & Help', icon: 'profile' }
];

function EmptyState({ icon = 'notes', title, message }) {
  return <div className="empty-state"><span><Icon name={icon} size={28}/></span><h3>{title}</h3><p>{message}</p></div>;
}

function PageHeading({ eyebrow, title, text, action }) {
  return <div className="panel-heading"><div><span>{eyebrow}</span><h1>{title}</h1>{text && <p>{text}</p>}</div>{action}</div>;
}

function MetricCard({ label, value, helper, icon, tone = '' }) {
  return <article className={`metric-card ${tone}`}><div><span>{label}</span><strong>{value}</strong><small>{helper}</small></div><b><Icon name={icon} size={23}/></b></article>;
}

export default function StudentDashboard({ initialProfile }) {
  const supabase = useMemo(() => createClient(), []);
  const [active, setActive] = useState('home');
  const [data, setData] = useState({ batch: null, fees: [], notes: [], doubts: [], tests: [], scores: [], notifications: [], helpRequests: [] });
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [payment, setPayment] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    const [batch, fees, notes, doubts, tests, scores, notifications, help] = await Promise.all([
      initialProfile.batch_id ? supabase.from('batches').select('*').eq('id', initialProfile.batch_id).maybeSingle() : Promise.resolve({ data: null }),
      supabase.from('fee_records').select('*').eq('student_id', initialProfile.id).order('fee_month', { ascending: false }),
      supabase.from('notes').select('*').order('created_at', { ascending: false }),
      supabase.from('doubts').select('*').eq('student_id', initialProfile.id).order('created_at', { ascending: false }),
      supabase.from('tests').select('*').order('test_date', { ascending: false }),
      supabase.from('test_scores').select('*').eq('student_id', initialProfile.id),
      supabase.from('notifications').select('*').eq('recipient_id', initialProfile.id).order('created_at', { ascending: false }).limit(30),
      supabase.from('help_requests').select('*').eq('student_id', initialProfile.id).order('created_at', { ascending: false })
    ]);
    const queries = [batch, fees, notes, doubts, tests, scores, notifications, help];
    const failed = queries.find((query) => query.error);
    if (failed?.error) setToast({ type: 'error', message: failed.error.message });
    setData({
      batch: batch.data || null,
      fees: fees.data || [],
      notes: notes.data || [],
      doubts: doubts.data || [],
      tests: tests.data || [],
      scores: scores.data || [],
      notifications: notifications.data || [],
      helpRequests: help.data || []
    });
    setLoading(false);
  }, [initialProfile.batch_id, initialProfile.id, supabase]);

  useEffect(() => { loadData(); }, [loadData]);

  useEffect(() => {
    const channel = supabase
      .channel(`student-live-${initialProfile.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: `recipient_id=eq.${initialProfile.id}` }, () => loadData())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'fee_records', filter: `student_id=eq.${initialProfile.id}` }, () => loadData())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [initialProfile.id, loadData, supabase]);

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = '/login?mode=student';
  }

  const unreadCount = data.notifications.filter((item) => !item.read_at).length;
  const shared = { data, profile: initialProfile, reload: loadData, setToast, setPayment };
  let panel = <StudentHome {...shared} />;
  if (active === 'fees') panel = <StudentFees {...shared} />;
  if (active === 'notes') panel = <StudentNotes {...shared} />;
  if (active === 'tests') panel = <StudentTests {...shared} />;
  if (active === 'doubts') panel = <StudentDoubts {...shared} />;
  if (active === 'profile') panel = <StudentProfile {...shared} />;

  return (
    <>
      <DashboardShell role="student" active={active} setActive={setActive} items={NAV_ITEMS} profile={initialProfile} notificationCount={unreadCount} onLogout={logout}>
        {loading ? <div className="panel-loader"><span/><p>Loading your student portal…</p></div> : panel}
      </DashboardShell>
      <PaymentModal payment={payment} close={() => setPayment(null)} />
      <Toast toast={toast} clear={() => setToast(null)} />
    </>
  );
}

function StudentHome({ data, profile, reload, setToast }) {
  const currentFee = data.fees.find((fee) => fee.fee_month === monthKey());
  const latestTest = data.tests[0];
  const latestScore = latestTest ? data.scores.find((score) => score.test_id === latestTest.id) : null;

  async function markNotificationsRead() {
    const ids = data.notifications.filter((item) => !item.read_at).map((item) => item.id);
    if (!ids.length) return;
    const { error } = await createClient().from('notifications').update({ read_at: new Date().toISOString() }).in('id', ids);
    if (error) return setToast({ type: 'error', message: error.message });
    await reload();
  }

  return (
    <section>
      <PageHeading eyebrow="STUDENT DASHBOARD" title={`Welcome back, ${profile.full_name}`} text="Your batch schedule, fee status, notes, tests and doubt support are shown from the authenticated database." />
      <div className="metric-grid student-metrics">
        <MetricCard label="Current batch" value={data.batch?.title || 'Not assigned'} helper={data.batch ? `${data.batch.class_level} • ${data.batch.class_time}` : 'Contact the institute'} icon="batches" />
        <MetricCard label="This month fee" value={currentFee ? formatCurrency(currentFee.amount) : formatCurrency(profile.monthly_fee)} helper={currentFee?.status || 'No fee record yet'} icon="fees" tone={currentFee?.status === 'paid' ? 'metric-paid' : ''} />
        <MetricCard label="Tests recorded" value={data.scores.length} helper={latestTest ? `Latest: ${latestTest.title}` : 'No tests published'} icon="tests" />
        <MetricCard label="Latest rank" value={latestScore?.rank ? `#${latestScore.rank}` : '—'} helper={latestScore ? `${latestScore.marks}/${latestTest.max_marks} marks` : 'Available after test upload'} icon="chart" />
      </div>
      <div className="dashboard-grid student-home-grid">
        <div className="card calendar-card"><div className="card-title-row"><div><span>Batch calendar</span><h3>{new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(new Date())}</h3></div><Icon name="calendar" /></div><BatchCalendar days={data.batch?.days || []} /></div>
        <div className="card notifications-card"><div className="card-title-row"><div><span>Updates</span><h3>Notifications</h3></div>{data.notifications.some((item) => !item.read_at) && <button className="text-button" onClick={markNotificationsRead}>Mark all read</button>}</div>{data.notifications.length ? <div className="notification-list">{data.notifications.slice(0, 7).map((item) => <article key={item.id} className={!item.read_at ? 'unread' : ''}><span className={`notification-type type-${item.type}`}><Icon name={item.type === 'fee' ? 'fees' : item.type === 'test' ? 'tests' : item.type === 'doubt' ? 'doubts' : 'bell'} size={17}/></span><div><strong>{item.title}</strong><p>{item.body}</p><small>{formatDate(item.created_at, { hour: '2-digit', minute: '2-digit' })}</small></div></article>)}</div> : <EmptyState icon="bell" title="No notifications" message="Fee reminders and learning updates will appear here." />}</div>
      </div>
    </section>
  );
}

function BatchCalendar({ days }) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1);
  const total = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let index = 0; index < first.getDay(); index += 1) cells.push(null);
  for (let day = 1; day <= total; day += 1) cells.push(new Date(year, month, day));

  return (
    <div className="calendar-widget">
      <div className="calendar-weekdays">{DAY_ORDER.map((day) => <span key={day}>{day.slice(0, 3)}</span>)}</div>
      <div className="calendar-days">{cells.map((date, index) => {
        if (!date) return <span className="blank" key={`blank-${index}`} />;
        const weekday = DAY_ORDER[date.getDay()];
        const classDay = days.includes(weekday);
        const today = date.toDateString() === now.toDateString();
        return <span key={date.toISOString()} className={`${classDay ? 'class-day' : ''} ${today ? 'today' : ''}`}><b>{date.getDate()}</b>{classDay && <small>Class</small>}</span>;
      })}</div>
      <div className="calendar-legend"><span><i className="legend-class"/> Scheduled class day</span><span><i className="legend-today"/> Today</span></div>
    </div>
  );
}

function StudentFees({ data, profile, setPayment }) {
  const records = data.fees;
  return (
    <section>
      <PageHeading eyebrow="FEES" title="Monthly fee history" text="Paid, unpaid and waived months are listed below. Payment confirmation is completed by The Apex Chemistry after receiving your screenshot." />
      <div className="card table-card"><div className="card-title-row"><div><span>Fee records</span><h3>{records.length} month{records.length === 1 ? '' : 's'}</h3></div><Icon name="rupee" /></div>{records.length ? <div className="responsive-table"><table><thead><tr><th>Month</th><th>Amount</th><th>Status</th><th>Paid on</th><th>Action</th></tr></thead><tbody>{records.map((fee) => <tr key={fee.id}><td><strong>{new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(new Date(fee.fee_month))}</strong></td><td>{formatCurrency(fee.amount)}</td><td><span className={`status-pill ${fee.status}`}>{fee.status}</span></td><td>{fee.paid_at ? formatDate(fee.paid_at) : '—'}</td><td>{fee.status === 'unpaid' ? <button className="mini-button primary" onClick={() => setPayment({ ...fee, studentName: profile.full_name })}><Icon name="fees" size={15}/> Pay Fees</button> : <span className="paid-label"><Icon name="check" size={15}/> Confirmed</span>}</td></tr>)}</tbody></table></div> : <EmptyState icon="fees" title="No fee records yet" message="The institute will create your monthly fee record." />}</div>
    </section>
  );
}

function StudentNotes({ data, setToast }) {
  const [query, setQuery] = useState('');
  const supabase = useMemo(() => createClient(), []);
  const notes = data.notes.filter((note) => [note.title, note.file_name].join(' ').toLowerCase().includes(query.toLowerCase()));

  async function download(note) {
    const { data: signed, error } = await supabase.storage.from('notes').createSignedUrl(note.file_path, 90, { download: note.file_name });
    if (error) return setToast({ type: 'error', message: error.message });
    window.open(signed.signedUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <section>
      <PageHeading eyebrow="NOTES" title="Study material" text="Only notes uploaded to your assigned batch are accessible here." action={<div className="search-field heading-search"><Icon name="search" size={17}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search notes" /></div>} />
      {notes.length ? <div className="student-note-list">{notes.map((note) => <article className="card" key={note.id}><span className="file-icon">PDF</span><div><strong>{note.title}</strong><p>{note.file_name}</p><small>{formatDate(note.created_at)} • {note.file_size ? `${(note.file_size / 1024 / 1024).toFixed(1)} MB` : 'File'}</small></div><button className="icon-button primary" onClick={() => download(note)} aria-label={`Download ${note.title}`}><Icon name="download" size={18}/></button></article>)}</div> : <EmptyState icon="notes" title={data.notes.length ? 'No notes match your search' : 'No notes uploaded yet'} message={data.notes.length ? 'Try a different title.' : 'Your teacher’s batch notes will appear here.'} />}
    </section>
  );
}

function StudentTests({ data }) {
  const testMap = Object.fromEntries(data.tests.map((test) => [test.id, test]));
  const records = data.scores.map((score) => ({ ...score, test: testMap[score.test_id] })).filter((item) => item.test).sort((a, b) => new Date(b.test.test_date) - new Date(a.test.test_date));
  return (
    <section>
      <PageHeading eyebrow="TESTS" title="Test performance" text="Your marks and rank are calculated from the records uploaded by the administrator." />
      <div className="card table-card"><div className="card-title-row"><div><span>Performance records</span><h3>{records.length} test{records.length === 1 ? '' : 's'}</h3></div><Icon name="tests" /></div>{records.length ? <div className="responsive-table"><table><thead><tr><th>Test</th><th>Date</th><th>Marks</th><th>Percentage</th><th>Rank</th></tr></thead><tbody>{records.map((record) => { const percent = (Number(record.marks) / Number(record.test.max_marks)) * 100; return <tr key={record.id}><td><strong>{record.test.title}</strong></td><td>{formatDate(record.test.test_date)}</td><td>{record.marks} / {record.test.max_marks}</td><td><div className="score-progress"><span style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}/></div><small>{percent.toFixed(1)}%</small></td><td><span className="rank-badge">#{record.rank || '—'}</span></td></tr>; })}</tbody></table></div> : <EmptyState icon="tests" title="No test records yet" message="Your marks and automatic rank will appear after the admin publishes a test." />}</div>
    </section>
  );
}

function StudentDoubts({ data, profile, reload, setToast }) {
  const supabase = useMemo(() => createClient(), []);
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [sending, setSending] = useState(false);

  async function submit(event) {
    event.preventDefault();
    if (!description.trim()) return;
    setSending(true);
    let path = null;
    try {
      if (imageFile) {
        path = `${profile.id}/${Date.now()}-${safeFileName(imageFile.name)}`;
        const { error: uploadError } = await supabase.storage.from('doubts').upload(path, imageFile, { contentType: imageFile.type || undefined });
        if (uploadError) throw uploadError;
      }
      const { error } = await supabase.from('doubts').insert({ student_id: profile.id, batch_id: profile.batch_id, description: description.trim(), image_path: path });
      if (error) { if (path) await supabase.storage.from('doubts').remove([path]); throw error; }
      setDescription(''); setImageFile(null); await reload(); setToast({ message: 'Your doubt was sent. The administrator has been notified.' });
    } catch (error) { setToast({ type: 'error', message: error.message }); }
    setSending(false);
  }

  async function viewImage(doubt) {
    if (!doubt.image_path) return;
    const { data: signed, error } = await supabase.storage.from('doubts').createSignedUrl(doubt.image_path, 120);
    if (error) return setToast({ type: 'error', message: error.message });
    window.open(signed.signedUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <section>
      <PageHeading eyebrow="DOUBTS" title="Ask and track doubts" text="Add a clear description and, when useful, upload one picture. The admin receives a notification immediately." />
      <div className="dashboard-grid doubt-student-grid">
        <form className="card form-card" onSubmit={submit}><div className="card-title-row"><div><span>New doubt</span><h3>Send a question</h3></div><Icon name="doubts" /></div><label>Description<textarea rows="7" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the chemistry concept or question clearly" required /></label><label className="image-upload"><Icon name="image" size={24}/><div><strong>{imageFile ? imageFile.name : 'Attach a picture (optional)'}</strong><span>JPG, PNG or WebP up to 10 MB</span></div><input type="file" accept="image/png,image/jpeg,image/webp" onChange={(e) => setImageFile(e.target.files?.[0] || null)} /></label><button className="button button-primary button-full" disabled={sending}>{sending ? 'Sending and notifying admin…' : 'Send Doubt'}</button></form>
        <div className="card"><div className="card-title-row"><div><span>History</span><h3>My doubts</h3></div><b>{data.doubts.length}</b></div>{data.doubts.length ? <div className="student-doubt-list">{data.doubts.map((doubt) => <article key={doubt.id}><header><span className={`status-pill ${doubt.status}`}>{doubt.status}</span><small>{formatDate(doubt.created_at)}</small></header><strong>{doubt.description}</strong>{doubt.image_path && <button className="text-button" onClick={() => viewImage(doubt)}><Icon name="image" size={15}/> View my picture</button>}{doubt.response && <div className="answer-box"><span>Teacher’s answer</span><p>{doubt.response}</p></div>}</article>)}</div> : <EmptyState icon="doubts" title="No doubts sent" message="Use the form to ask your first question." />}</div>
      </div>
    </section>
  );
}

function StudentProfile({ data, profile, reload, setToast }) {
  const [form, setForm] = useState({ subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const supabase = useMemo(() => createClient(), []);

  async function submit(event) {
    event.preventDefault();
    setSending(true);
    const { error } = await supabase.from('help_requests').insert({ student_id: profile.id, subject: form.subject.trim(), message: form.message.trim() });
    setSending(false);
    if (error) return setToast({ type: 'error', message: error.message });
    setForm({ subject: '', message: '' }); await reload(); setToast({ message: 'Help request sent to the administrator.' });
  }

  return (
    <section>
      <PageHeading eyebrow="PROFILE & HELP" title="My credentials and support" text="Your password is intentionally never displayed. Contact the administrator through the help form for account or learning issues." />
      <div className="dashboard-grid profile-help-grid">
        <div className="card profile-card"><div className="profile-hero"><span>{profile.full_name.charAt(0).toUpperCase()}</span><div><h3>{profile.full_name}</h3><p>{profile.student_code}</p></div></div><dl><div><dt>Student ID</dt><dd>{profile.student_code}</dd></div><div><dt>Class</dt><dd>{profile.class_level}</dd></div><div><dt>Batch</dt><dd>{data.batch?.title || 'Not assigned'}</dd></div><div><dt>Class time</dt><dd>{data.batch?.class_time || '—'}</dd></div><div><dt>Class days</dt><dd>{data.batch?.days?.join(', ') || '—'}</dd></div><div><dt>Phone</dt><dd>{profile.phone}</dd></div><div><dt>Monthly fee</dt><dd>{formatCurrency(profile.monthly_fee)}</dd></div></dl><div className="password-hidden"><Icon name="eye" size={18}/><div><strong>Password is protected</strong><p>Passwords are not stored or shown in your profile.</p></div></div></div>
        <div className="card form-card"><div className="card-title-row"><div><span>Need assistance?</span><h3>Contact the administrator</h3></div><Icon name="message" /></div><form className="form-stack" onSubmit={submit}><label>Issue subject<input value={form.subject} onChange={(e) => setForm((current) => ({ ...current, subject: e.target.value }))} placeholder="Example: Fee confirmation or account help" required /></label><label>Describe your issue<textarea rows="6" value={form.message} onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))} placeholder="Provide the necessary details" required /></label><button className="button button-primary" disabled={sending}>{sending ? 'Sending…' : 'Send Help Request'}</button></form></div>
      </div>
      <div className="card table-card"><div className="card-title-row"><div><span>Support history</span><h3>My help requests</h3></div><b>{data.helpRequests.length}</b></div>{data.helpRequests.length ? <div className="support-list">{data.helpRequests.map((request) => <article key={request.id}><header><strong>{request.subject}</strong><span className={`status-pill ${request.status === 'resolved' ? 'answered' : 'pending'}`}>{request.status}</span></header><p>{request.message}</p>{request.admin_response && <div className="answer-box"><span>Admin response</span><p>{request.admin_response}</p></div>}<small>{formatDate(request.created_at)}</small></article>)}</div> : <EmptyState icon="message" title="No help requests" message="Your submitted support requests will appear here." />}</div>
    </section>
  );
}

function PaymentModal({ payment, close }) {
  const [ready, setReady] = useState(false);
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    if (!payment) return undefined;
    setReady(false);
    setSeconds(120);
    const loadingTimer = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(loadingTimer);
  }, [payment]);

  useEffect(() => {
    if (!payment || !ready) return undefined;
    const interval = setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => clearInterval(interval);
  }, [payment, ready]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const remaining = String(seconds % 60).padStart(2, '0');

  return (
    <Modal open={Boolean(payment)} onClose={close} title="Pay fees securely" size="md">
      {payment && <div className="payment-modal">{!ready ? <div className="payment-preparing"><span/><h3>Preparing secure payment QR…</h3><p>Please wait while your fee amount is loaded.</p></div> : seconds > 0 ? <><div className="payment-loading-line"><span/><p>Payment QR is active for this session.</p></div><div className="qr-frame"><Image src="/assets/payment-qr.jpg" alt="The Apex Chemistry UPI payment QR" width={560} height={780} priority /></div><div className="payment-amount"><span>Amount to pay</span><strong>{formatCurrency(payment.amount)}</strong><small>{new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(new Date(payment.fee_month))}</small></div><div className="payment-note"><Icon name="image" size={20}/><p>After payment, send the payment screenshot to <strong>The Apex Chemistry</strong> for confirmation. The fee status changes only after the administrator verifies it.</p></div><div className="payment-timer"><Icon name="clock" size={19}/><span>QR expires in</span><strong>{minutes}:{remaining}</strong></div></> : <div className="expired-payment"><span><Icon name="clock" size={34}/></span><h3>QR session expired</h3><p>The QR is no longer shown. Close this window and click Pay Fees again to start a new two-minute session.</p><button className="button button-primary" onClick={close}>Close</button></div>}</div>}
    </Modal>
  );
}
