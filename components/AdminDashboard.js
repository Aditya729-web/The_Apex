'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import DashboardShell from '@/components/DashboardShell';
import Modal from '@/components/Modal';
import Toast from '@/components/Toast';
import { Icon } from '@/components/Icons';
import { createClient } from '@/lib/supabase/client';
import { DAY_ORDER, formatCurrency, formatDate, monthKey, safeFileName } from '@/lib/utils';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'students', label: 'Students', icon: 'students' },
  { key: 'batches', label: 'Batches', icon: 'batches' },
  { key: 'fees', label: 'Fees', icon: 'fees' },
  { key: 'notes', label: 'Notes', icon: 'notes' },
  { key: 'doubts', label: 'Doubts', icon: 'doubts' },
  { key: 'tests', label: 'Tests', icon: 'tests' }
];

const EMPTY_DATA = {
  students: [],
  batches: [],
  fees: [],
  notes: [],
  doubts: [],
  tests: [],
  scores: [],
  notifications: [],
  helpRequests: []
};

function currentMonthLabel() {
  return new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(new Date());
}

function EmptyState({ icon = 'notes', title, message }) {
  return (
    <div className="empty-state">
      <span><Icon name={icon} size={28} /></span>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

function PageHeading({ eyebrow, title, text, action }) {
  return (
    <div className="panel-heading">
      <div><span>{eyebrow}</span><h1>{title}</h1>{text && <p>{text}</p>}</div>
      {action}
    </div>
  );
}

function MetricCard({ label, value, helper, icon }) {
  return (
    <article className="metric-card">
      <div><span>{label}</span><strong>{value}</strong><small>{helper}</small></div>
      <b><Icon name={icon} size={23}/></b>
    </article>
  );
}

function EarningsChart({ fees }) {
  const months = useMemo(() => {
    const points = [];
    const now = new Date();
    for (let offset = 6; offset >= 0; offset -= 1) {
      const date = new Date(now.getFullYear(), now.getMonth() - offset, 1);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      const total = fees
        .filter((fee) => fee.status === 'paid' && String(fee.fee_month).startsWith(key))
        .reduce((sum, fee) => sum + Number(fee.amount || 0), 0);
      points.push({ key, label: new Intl.DateTimeFormat('en-IN', { month: 'short' }).format(date), total });
    }
    return points;
  }, [fees]);

  const max = Math.max(...months.map((item) => item.total), 1);
  const polyline = months.map((item, index) => {
    const x = 24 + index * (552 / Math.max(months.length - 1, 1));
    const y = 205 - (item.total / max) * 160;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="chart-card">
      <div className="card-title-row"><div><span>Monthly collection</span><h3>Earnings overview</h3></div><strong>{currentMonthLabel()}</strong></div>
      <svg className="earnings-chart" viewBox="0 0 600 240" role="img" aria-label="Monthly fee collection chart">
        {[45, 85, 125, 165, 205].map((y) => <line key={y} x1="24" y1={y} x2="576" y2={y} className="chart-gridline" />)}
        <polyline points={polyline} className="chart-line" />
        {months.map((item, index) => {
          const x = 24 + index * (552 / Math.max(months.length - 1, 1));
          const y = 205 - (item.total / max) * 160;
          return <g key={item.key}><circle cx={x} cy={y} r="4" className="chart-dot"/><text x={x} y="228" textAnchor="middle" className="chart-label">{item.label}</text></g>;
        })}
      </svg>
      {fees.filter((fee) => fee.status === 'paid').length === 0 && <div className="chart-empty">The graph will update when fee payments are marked as paid.</div>}
    </div>
  );
}

function BatchForm({ profileId, onCreated, compact = false, initialClass = '' }) {
  const supabase = useMemo(() => createClient(), []);
  const [form, setForm] = useState({ title: '', classLevel: initialClass, classTime: '', monthlyFee: '', days: [] });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleDay(day) {
    setForm((current) => ({ ...current, days: current.days.includes(day) ? current.days.filter((item) => item !== day) : [...current.days, day] }));
  }

  async function submit(event) {
    event.preventDefault();
    setError('');
    if (!form.days.length) return setError('Select at least one class day.');
    setSaving(true);
    const { data, error: insertError } = await supabase.from('batches').insert({
      title: form.title.trim(),
      class_level: form.classLevel.trim(),
      class_time: form.classTime.trim(),
      days: form.days,
      monthly_fee: Number(form.monthlyFee),
      created_by: profileId
    }).select('*').single();
    setSaving(false);
    if (insertError) return setError(insertError.message);
    setForm({ title: '', classLevel: initialClass, classTime: '', monthlyFee: '', days: [] });
    onCreated?.(data);
  }

  return (
    <form className={`batch-form ${compact ? 'compact' : ''}`} onSubmit={submit}>
      <div className="form-grid two">
        <label>Batch title<input value={form.title} onChange={(e) => update('title', e.target.value)} placeholder="Enter batch title" required /></label>
        <label>Class<input value={form.classLevel} onChange={(e) => update('classLevel', e.target.value)} placeholder="Class 9, 10, 11 or 12" required /></label>
        <label>Time<input value={form.classTime} onChange={(e) => update('classTime', e.target.value)} placeholder="Example: 5:00 PM – 6:30 PM" required /></label>
        <label>Monthly fee<input type="number" min="0" step="1" value={form.monthlyFee} onChange={(e) => update('monthlyFee', e.target.value)} placeholder="Amount in ₹" required /></label>
      </div>
      <fieldset><legend>Class days</legend><div className="day-selector">{DAY_ORDER.map((day) => <button type="button" key={day} className={form.days.includes(day) ? 'selected' : ''} onClick={() => toggleDay(day)}>{day.slice(0, 3)}</button>)}</div></fieldset>
      {error && <div className="form-error">{error}</div>}
      <button className="button button-primary" disabled={saving}><Icon name="plus" size={17}/>{saving ? 'Creating…' : 'Create Batch'}</button>
    </form>
  );
}

export default function AdminDashboard({ initialProfile }) {
  const supabase = useMemo(() => createClient(), []);
  const [active, setActive] = useState('home');
  const [data, setData] = useState(EMPTY_DATA);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [credentials, setCredentials] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    const queries = await Promise.all([
      supabase.from('profiles').select('*').eq('role', 'student').order('created_at', { ascending: false }),
      supabase.from('batches').select('*').order('created_at', { ascending: false }),
      supabase.from('fee_records').select('*').order('fee_month', { ascending: false }),
      supabase.from('notes').select('*').order('created_at', { ascending: false }),
      supabase.from('doubts').select('*').order('created_at', { ascending: false }),
      supabase.from('tests').select('*').order('test_date', { ascending: false }),
      supabase.from('test_scores').select('*'),
      supabase.from('notifications').select('*').eq('recipient_id', initialProfile.id).order('created_at', { ascending: false }).limit(30),
      supabase.from('help_requests').select('*').order('created_at', { ascending: false }).limit(30)
    ]);
    const failed = queries.find((query) => query.error);
    if (failed?.error) setToast({ type: 'error', message: failed.error.message });
    setData({
      students: queries[0].data || [],
      batches: queries[1].data || [],
      fees: queries[2].data || [],
      notes: queries[3].data || [],
      doubts: queries[4].data || [],
      tests: queries[5].data || [],
      scores: queries[6].data || [],
      notifications: queries[7].data || [],
      helpRequests: queries[8].data || []
    });
    setLoading(false);
  }, [initialProfile.id, supabase]);

  useEffect(() => { loadData(); }, [loadData]);

  useEffect(() => {
    const channel = supabase
      .channel(`admin-live-${initialProfile.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: `recipient_id=eq.${initialProfile.id}` }, () => loadData())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'doubts' }, () => loadData())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [initialProfile.id, loadData, supabase]);

  async function logout() {
    await supabase.auth.signOut();
    window.location.href = '/login?mode=admin';
  }

  const batchMap = useMemo(() => Object.fromEntries(data.batches.map((batch) => [batch.id, batch])), [data.batches]);
  const studentMap = useMemo(() => Object.fromEntries(data.students.map((student) => [student.id, student])), [data.students]);
  const unreadCount = data.notifications.filter((item) => !item.read_at).length;

  const shared = { data, batchMap, studentMap, profile: initialProfile, reload: loadData, setToast };

  let panel = <HomePanel {...shared} />;
  if (active === 'students') panel = <StudentsPanel {...shared} onCredentials={setCredentials} />;
  if (active === 'batches') panel = <BatchesPanel {...shared} />;
  if (active === 'fees') panel = <FeesPanel {...shared} />;
  if (active === 'notes') panel = <NotesPanel {...shared} />;
  if (active === 'doubts') panel = <DoubtsPanel {...shared} />;
  if (active === 'tests') panel = <TestsPanel {...shared} />;

  return (
    <>
      <DashboardShell role="admin" active={active} setActive={setActive} items={NAV_ITEMS} profile={initialProfile} notificationCount={unreadCount} onLogout={logout}>
        {loading ? <div className="panel-loader"><span/><p>Loading secure dashboard…</p></div> : panel}
      </DashboardShell>
      <CredentialModal credentials={credentials} close={() => setCredentials(null)} />
      <Toast toast={toast} clear={() => setToast(null)} />
    </>
  );
}

function HomePanel({ data, batchMap, studentMap }) {
  const earnings = data.fees.filter((fee) => fee.status === 'paid').reduce((sum, fee) => sum + Number(fee.amount || 0), 0);
  const pendingDoubts = data.doubts.filter((doubt) => doubt.status === 'pending').length;
  const activity = [...data.notifications].slice(0, 6);

  return (
    <section>
      <PageHeading eyebrow="ADMIN DASHBOARD" title="Welcome back" text="All information is loaded from your authenticated Supabase database. Empty tables stay empty until you create records." />
      <div className="metric-grid">
        <MetricCard label="Total earnings" value={formatCurrency(earnings)} helper="Confirmed paid fees" icon="chart" />
        <MetricCard label="Total students" value={data.students.length} helper={`${data.students.filter((item) => item.is_active).length} active`} icon="students" />
        <MetricCard label="Total batches" value={data.batches.length} helper={`${data.batches.filter((item) => item.is_active).length} active`} icon="batches" />
        <MetricCard label="Total doubts" value={data.doubts.length} helper={`${pendingDoubts} pending`} icon="doubts" />
      </div>
      <div className="dashboard-grid dashboard-grid-main">
        <EarningsChart fees={data.fees} />
        <div className="card notifications-card">
          <div className="card-title-row"><div><span>Updates</span><h3>Recent notifications</h3></div><Icon name="bell" /></div>
          {activity.length ? <div className="notification-list">{activity.map((item) => <article key={item.id}><span className={`notification-type type-${item.type}`}><Icon name={item.type === 'doubt' ? 'doubts' : item.type === 'help' ? 'message' : 'bell'} size={17}/></span><div><strong>{item.title}</strong><p>{item.body}</p><small>{formatDate(item.created_at, { hour: '2-digit', minute: '2-digit' })}</small></div></article>)}</div> : <EmptyState icon="bell" title="No notifications" message="New doubts, help requests and reminders will appear here." />}
        </div>
      </div>
      <div className="card table-card">
        <div className="card-title-row"><div><span>Student support</span><h3>Recent doubts</h3></div><b>{data.doubts.length}</b></div>
        {data.doubts.length ? <div className="responsive-table"><table><thead><tr><th>Student</th><th>Batch</th><th>Question</th><th>Status</th><th>Date</th></tr></thead><tbody>{data.doubts.slice(0, 6).map((doubt) => <tr key={doubt.id}><td>{studentMap[doubt.student_id]?.full_name || 'Student'}</td><td>{batchMap[doubt.batch_id]?.title || '—'}</td><td className="table-long">{doubt.description}</td><td><span className={`status-pill ${doubt.status}`}>{doubt.status}</span></td><td>{formatDate(doubt.created_at)}</td></tr>)}</tbody></table></div> : <EmptyState icon="doubts" title="No doubts submitted" message="Student doubts will appear here after submission." />}
      </div>
    </section>
  );
}

function StudentsPanel({ data, batchMap, profile, reload, setToast, onCredentials }) {
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState('');
  const [batchQuery, setBatchQuery] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [inlineBatch, setInlineBatch] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ fullName: '', classLevel: '', phone: '', monthlyFee: '' });

  const filtered = data.students.filter((student) => [student.full_name, student.student_code, student.phone, student.class_level, batchMap[student.batch_id]?.title].join(' ').toLowerCase().includes(query.toLowerCase()));
  const batchMatches = data.batches.filter((batch) => [batch.title, batch.class_level].join(' ').toLowerCase().includes(batchQuery.toLowerCase()));

  function update(key, value) { setForm((current) => ({ ...current, [key]: value })); }

  async function submit(event) {
    event.preventDefault();
    if (!selectedBatch) return setToast({ type: 'error', message: 'Select a batch before creating the student.' });
    setSaving(true);
    const response = await fetch('/api/admin/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, batchId: selectedBatch })
    });
    const result = await response.json();
    setSaving(false);
    if (!response.ok) return setToast({ type: 'error', message: result.error || 'Unable to create student.' });
    setForm({ fullName: '', classLevel: '', phone: '', monthlyFee: '' });
    setSelectedBatch('');
    setBatchQuery('');
    setShowForm(false);
    onCredentials(result.credentials);
    await reload();
  }

  return (
    <section>
      <PageHeading eyebrow="STUDENTS" title="Student management" text="Create authenticated students and securely share their generated Student ID and temporary password." action={<button className="button button-primary" onClick={() => setShowForm((value) => !value)}><Icon name={showForm ? 'close' : 'plus'} size={17}/>{showForm ? 'Close form' : 'Create Student'}</button>} />
      {showForm && <div className="card create-card">
        <form onSubmit={submit}>
          <div className="form-grid two">
            <label>Student name<input value={form.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="Full name" required /></label>
            <label>Class<input value={form.classLevel} onChange={(e) => update('classLevel', e.target.value)} placeholder="Class 9, 10, 11 or 12" required /></label>
            <label>Phone number<input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Student or guardian number" required /></label>
            <label>Monthly fees<input type="number" min="0" value={form.monthlyFee} onChange={(e) => update('monthlyFee', e.target.value)} placeholder="Amount in ₹" required /></label>
          </div>
          <div className="batch-picker">
            <label>Search and select batch<div className="search-field"><Icon name="search" size={17}/><input value={batchQuery} onChange={(e) => setBatchQuery(e.target.value)} placeholder="Search by batch title or class" /></div></label>
            <div className="batch-options">
              {batchMatches.map((batch) => <button type="button" key={batch.id} className={selectedBatch === batch.id ? 'selected' : ''} onClick={() => { setSelectedBatch(batch.id); setForm((current) => ({ ...current, monthlyFee: current.monthlyFee || String(batch.monthly_fee), classLevel: current.classLevel || batch.class_level })); }}><strong>{batch.title}</strong><span>{batch.class_level} • {batch.class_time}</span><small>{batch.days.join(', ')} • {formatCurrency(batch.monthly_fee)}</small></button>)}
            </div>
            {!batchMatches.length && <div className="inline-create-prompt"><p>No matching batch is available.</p><button type="button" className="text-button" onClick={() => setInlineBatch(true)}><Icon name="plus" size={16}/> Create a batch here</button></div>}
          </div>
          <div className="form-actions"><button className="button button-primary" disabled={saving}>{saving ? 'Creating authenticated account…' : 'Create Student & Generate Credentials'}</button></div>
        </form>
      </div>}

      <Modal open={inlineBatch} onClose={() => setInlineBatch(false)} title="Create a batch without leaving this form" size="lg"><BatchForm profileId={profile.id} compact initialClass={form.classLevel} onCreated={async (batch) => { setSelectedBatch(batch.id); setBatchQuery(batch.title); setInlineBatch(false); await reload(); setToast({ message: 'Batch created and selected.' }); }} /></Modal>

      <div className="card table-card">
        <div className="table-toolbar"><div><span>Registered students</span><h3>{data.students.length} student{data.students.length === 1 ? '' : 's'}</h3></div><div className="search-field"><Icon name="search" size={17}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, ID, phone or batch" /></div></div>
        {filtered.length ? <div className="responsive-table"><table><thead><tr><th>Student</th><th>Student ID</th><th>Class</th><th>Batch</th><th>Phone</th><th>Monthly fee</th></tr></thead><tbody>{filtered.map((student) => <tr key={student.id}><td><strong>{student.full_name}</strong></td><td><code>{student.student_code}</code></td><td>{student.class_level}</td><td>{batchMap[student.batch_id]?.title || 'Not assigned'}</td><td>{student.phone}</td><td>{formatCurrency(student.monthly_fee)}</td></tr>)}</tbody></table></div> : <EmptyState icon="students" title={data.students.length ? 'No students match your search' : 'No students created'} message={data.students.length ? 'Try a different search.' : 'Use Create Student to generate the first authenticated account.'} />}
      </div>
    </section>
  );
}

function BatchesPanel({ data, profile, reload, setToast }) {
  return (
    <section>
      <PageHeading eyebrow="BATCHES" title="Create and manage batches" text="The selected days and class time automatically appear in each assigned student’s calendar." />
      <div className="dashboard-grid batch-management-grid">
        <div className="card form-card"><div className="card-title-row"><div><span>New batch</span><h3>Batch details</h3></div><Icon name="batches" /></div><BatchForm profileId={profile.id} onCreated={async () => { await reload(); setToast({ message: 'Batch created successfully.' }); }} /></div>
        <div className="card"><div className="card-title-row"><div><span>Current batches</span><h3>{data.batches.length} total</h3></div></div>{data.batches.length ? <div className="batch-card-list">{data.batches.map((batch) => <article key={batch.id}><div><strong>{batch.title}</strong><span>{batch.class_level}</span></div><p><Icon name="clock" size={16}/>{batch.class_time}</p><p><Icon name="calendar" size={16}/>{batch.days.join(', ')}</p><footer><b>{formatCurrency(batch.monthly_fee)}</b><span className={`status-pill ${batch.is_active ? 'answered' : 'pending'}`}>{batch.is_active ? 'Active' : 'Inactive'}</span></footer></article>)}</div> : <EmptyState icon="batches" title="No batches created" message="Create the first batch using the form." />}</div>
      </div>
    </section>
  );
}

function FeesPanel({ data, batchMap, studentMap, reload, setToast, profile }) {
  const [mode, setMode] = useState('student');
  const [selected, setSelected] = useState('');
  const [busy, setBusy] = useState('');
  const month = monthKey();

  const students = data.students.filter((student) => !selected || (mode === 'student' ? student.id === selected : student.batch_id === selected));

  function currentFee(studentId) {
    return data.fees.find((fee) => fee.student_id === studentId && fee.fee_month === month);
  }

  async function markPaid(student) {
    setBusy(student.id);
    const fee = currentFee(student.id);
    let error;
    if (fee) {
      ({ error } = await createClient().from('fee_records').update({ status: 'paid', paid_at: new Date().toISOString(), confirmed_by: profile.id }).eq('id', fee.id));
    } else {
      ({ error } = await createClient().from('fee_records').insert({ student_id: student.id, batch_id: student.batch_id, fee_month: month, amount: student.monthly_fee, status: 'paid', paid_at: new Date().toISOString(), confirmed_by: profile.id }));
    }
    setBusy('');
    if (error) return setToast({ type: 'error', message: error.message });
    await reload();
    setToast({ message: `${student.full_name}'s fee has been marked paid.` });
  }

  async function remind(student) {
    setBusy(`remind-${student.id}`);
    const response = await fetch('/api/admin/reminders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ studentIds: [student.id] }) });
    const result = await response.json();
    setBusy('');
    if (!response.ok) return setToast({ type: 'error', message: result.error });
    await reload();
    const amount = currentFee(student.id)?.amount ?? student.monthly_fee;
    const shareText = `Dear ${student.full_name}, your fee of ${formatCurrency(amount)} for ${currentMonthLabel()} is pending. Please log in to The Apex Chemistry student portal to view the payment QR and send the payment screenshot for confirmation.`;
    if (navigator.share) {
      try { await navigator.share({ title: 'Fee reminder', text: shareText }); }
      catch { await navigator.clipboard.writeText(shareText); }
    } else await navigator.clipboard.writeText(shareText);
    setToast({ message: 'Reminder created. The message was opened for sharing or copied.' });
  }

  async function remindAll() {
    if (!students.length) return;
    setBusy('all');
    const response = await fetch('/api/admin/reminders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ studentIds: students.map((student) => student.id) }) });
    const result = await response.json();
    setBusy('');
    if (!response.ok) return setToast({ type: 'error', message: result.error });
    await reload();
    setToast({ message: `${result.count} pending fee reminder${result.count === 1 ? '' : 's'} created.` });
  }

  return (
    <section>
      <PageHeading eyebrow="FEES" title="Fee management" text="Search by student or batch, confirm payments and send personal reminders." action={<button className="button button-primary" disabled={!students.length || busy === 'all'} onClick={remindAll}><Icon name="bell" size={17}/>{busy === 'all' ? 'Sending…' : 'Remind visible students'}</button>} />
      <div className="card filter-card"><div className="form-grid two"><label>Search type<select value={mode} onChange={(e) => { setMode(e.target.value); setSelected(''); }}><option value="student">Student</option><option value="batch">Batch</option></select></label><label>{mode === 'student' ? 'Select student' : 'Select batch'}<select value={selected} onChange={(e) => setSelected(e.target.value)}><option value="">All {mode === 'student' ? 'students' : 'batches'}</option>{mode === 'student' ? data.students.map((student) => <option key={student.id} value={student.id}>{student.full_name} — {student.student_code}</option>) : data.batches.map((batch) => <option key={batch.id} value={batch.id}>{batch.title}</option>)}</select></label></div></div>
      <div className="card table-card"><div className="card-title-row"><div><span>{currentMonthLabel()}</span><h3>Current fee status</h3></div><b>{students.length}</b></div>{students.length ? <div className="responsive-table"><table><thead><tr><th>Student</th><th>Batch</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead><tbody>{students.map((student) => { const fee = currentFee(student.id); const status = fee?.status || 'unpaid'; return <tr key={student.id}><td><strong>{student.full_name}</strong><small className="table-subtext">{student.student_code} • {student.phone}</small></td><td>{batchMap[student.batch_id]?.title || '—'}</td><td>{formatCurrency(fee?.amount ?? student.monthly_fee)}</td><td><span className={`status-pill ${status}`}>{status}</span></td><td><div className="table-actions">{status !== 'paid' && <button className="mini-button success" disabled={busy === student.id} onClick={() => markPaid(student)}><Icon name="check" size={15}/>{busy === student.id ? 'Saving…' : 'Mark paid'}</button>}<button className="mini-button" disabled={busy === `remind-${student.id}`} onClick={() => remind(student)}><Icon name="bell" size={15}/>{busy === `remind-${student.id}` ? 'Sending…' : 'Reminder'}</button></div></td></tr>; })}</tbody></table></div> : <EmptyState icon="fees" title="No students found" message="Create students or change the selected filter." />}</div>
    </section>
  );
}

function NotesPanel({ data, batchMap, profile, reload, setToast }) {
  const [batchId, setBatchId] = useState('');
  const [title, setTitle] = useState('');
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const supabase = useMemo(() => createClient(), []);

  async function upload(event) {
    event.preventDefault();
    if (!batchId || !files.length) return setToast({ type: 'error', message: 'Choose a batch and at least one file.' });
    setUploading(true);
    try {
      for (const file of files) {
        const path = `${batchId}/${Date.now()}-${safeFileName(file.name)}`;
        const { error: storageError } = await supabase.storage.from('notes').upload(path, file, { upsert: false, contentType: file.type || undefined });
        if (storageError) throw storageError;
        const { error: insertError } = await supabase.from('notes').insert({ batch_id: batchId, title: title.trim() || file.name, file_path: path, file_name: file.name, file_size: file.size, mime_type: file.type, uploaded_by: profile.id });
        if (insertError) { await supabase.storage.from('notes').remove([path]); throw insertError; }
      }
      setFiles([]); setTitle(''); await reload(); setToast({ message: 'Notes uploaded successfully.' });
    } catch (error) { setToast({ type: 'error', message: error.message }); }
    setUploading(false);
  }

  async function removeNote(note) {
    const confirmed = window.confirm(`Delete “${note.title}”?`);
    if (!confirmed) return;
    const { error } = await supabase.storage.from('notes').remove([note.file_path]);
    if (!error) await supabase.from('notes').delete().eq('id', note.id);
    if (error) return setToast({ type: 'error', message: error.message });
    await reload(); setToast({ message: 'Note deleted.' });
  }

  return (
    <section>
      <PageHeading eyebrow="NOTES" title="Upload study material" text="Files are stored privately in Supabase Storage and are visible only to students of the selected batch." />
      <div className="dashboard-grid notes-grid">
        <form className="card upload-card" onSubmit={upload}><div className="card-title-row"><div><span>New material</span><h3>Upload notes</h3></div><Icon name="upload" /></div><label>Batch<select value={batchId} onChange={(e) => setBatchId(e.target.value)} required><option value="">Choose a batch</option>{data.batches.map((batch) => <option value={batch.id} key={batch.id}>{batch.title} — {batch.class_level}</option>)}</select></label><label>Display title (optional)<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Uses the filename when empty" /></label><label className="drop-zone"><Icon name="upload" size={30}/><strong>Drop files here or choose files</strong><span>PDFs, documents and images up to 50 MB</span><input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files || []))} /></label>{files.length > 0 && <div className="selected-files">{files.map((file) => <span key={`${file.name}-${file.size}`}>{file.name}</span>)}</div>}<button className="button button-primary button-full" disabled={uploading}>{uploading ? 'Uploading securely…' : 'Upload to Batch'}</button></form>
        <div className="card"><div className="card-title-row"><div><span>Uploaded files</span><h3>{data.notes.length} note{data.notes.length === 1 ? '' : 's'}</h3></div></div>{data.notes.length ? <div className="file-list">{data.notes.map((note) => <article key={note.id}><span className="file-icon">PDF</span><div><strong>{note.title}</strong><p>{batchMap[note.batch_id]?.title || 'Batch'} • {note.file_name}</p><small>{formatDate(note.created_at)}</small></div><button className="icon-button danger" onClick={() => removeNote(note)}><Icon name="trash" size={17}/></button></article>)}</div> : <EmptyState icon="notes" title="No notes uploaded" message="Choose a batch and upload the first file." />}</div>
      </div>
    </section>
  );
}

function DoubtsPanel({ data, batchMap, studentMap, profile, reload, setToast }) {
  const [batchId, setBatchId] = useState('');
  const [responses, setResponses] = useState({});
  const [helpResponses, setHelpResponses] = useState({});
  const [busy, setBusy] = useState('');
  const supabase = useMemo(() => createClient(), []);
  const doubts = data.doubts.filter((item) => !batchId || item.batch_id === batchId);

  async function answer(doubt) {
    const response = (responses[doubt.id] ?? doubt.response ?? '').trim();
    if (!response) return setToast({ type: 'error', message: 'Write a response before marking the doubt answered.' });
    setBusy(doubt.id);
    const { error } = await supabase.from('doubts').update({ response, status: 'answered', answered_by: profile.id, answered_at: new Date().toISOString() }).eq('id', doubt.id);
    if (!error) await supabase.from('notifications').insert({ recipient_id: doubt.student_id, type: 'doubt', title: 'Your doubt was answered', body: response, data: { doubt_id: doubt.id } });
    setBusy('');
    if (error) return setToast({ type: 'error', message: error.message });
    await reload(); setToast({ message: 'Response sent to the student.' });
  }

  async function answerHelp(request) {
    const response = (helpResponses[request.id] ?? request.admin_response ?? '').trim();
    if (!response) return setToast({ type: 'error', message: 'Write a response before resolving the help request.' });
    setBusy(`help-${request.id}`);
    const { error } = await supabase.from('help_requests').update({ admin_response: response, status: 'resolved', resolved_at: new Date().toISOString() }).eq('id', request.id);
    if (!error) await supabase.from('notifications').insert({ recipient_id: request.student_id, type: 'help', title: 'Help request answered', body: response, data: { help_request_id: request.id } });
    setBusy('');
    if (error) return setToast({ type: 'error', message: error.message });
    await reload(); setToast({ message: 'Help response sent to the student.' });
  }

  async function viewImage(doubt) {
    if (!doubt.image_path) return;
    const { data: signed, error } = await supabase.storage.from('doubts').createSignedUrl(doubt.image_path, 120);
    if (error) return setToast({ type: 'error', message: error.message });
    window.open(signed.signedUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <section>
      <PageHeading eyebrow="DOUBTS" title="Student doubt support" text="Filter doubts by batch, review any uploaded picture and send a written answer." action={<label className="heading-select">Batch<select value={batchId} onChange={(e) => setBatchId(e.target.value)}><option value="">All batches</option>{data.batches.map((batch) => <option key={batch.id} value={batch.id}>{batch.title}</option>)}</select></label>} />
      {doubts.length ? <div className="doubt-grid">{doubts.map((doubt) => <article className="card doubt-card" key={doubt.id}><header><div><strong>{studentMap[doubt.student_id]?.full_name || 'Student'}</strong><span>{studentMap[doubt.student_id]?.student_code || ''} • {batchMap[doubt.batch_id]?.title || 'Batch'}</span></div><span className={`status-pill ${doubt.status}`}>{doubt.status}</span></header><p className="doubt-question">{doubt.description}</p>{doubt.image_path && <button className="mini-button" onClick={() => viewImage(doubt)}><Icon name="image" size={16}/> View uploaded picture</button>}<small>Asked {formatDate(doubt.created_at, { hour: '2-digit', minute: '2-digit' })}</small><label>Admin response<textarea value={responses[doubt.id] ?? doubt.response ?? ''} onChange={(e) => setResponses((current) => ({ ...current, [doubt.id]: e.target.value }))} placeholder="Write a clear response for the student" rows="4" /></label><button className="button button-primary" onClick={() => answer(doubt)} disabled={busy === doubt.id}>{busy === doubt.id ? 'Sending…' : doubt.status === 'answered' ? 'Update Answer' : 'Send Answer'}</button></article>)}</div> : <EmptyState icon="doubts" title="No doubts in this selection" message="New student doubts will appear here and create an admin notification." />}
      <div className="section-spacer" />
      <div className="card table-card"><div className="card-title-row"><div><span>Student support</span><h3>Help requests</h3></div><b>{data.helpRequests.length}</b></div>{data.helpRequests.length ? <div className="help-admin-list">{data.helpRequests.map((request) => <article key={request.id}><header><div><strong>{studentMap[request.student_id]?.full_name || 'Student'}</strong><small>{studentMap[request.student_id]?.student_code || ''} • {formatDate(request.created_at)}</small></div><span className={`status-pill ${request.status}`}>{request.status}</span></header><h4>{request.subject}</h4><p>{request.message}</p><label>Admin response<textarea rows="3" value={helpResponses[request.id] ?? request.admin_response ?? ''} onChange={(e) => setHelpResponses((current) => ({ ...current, [request.id]: e.target.value }))} placeholder="Write a support response" /></label><button className="mini-button primary" disabled={busy === `help-${request.id}`} onClick={() => answerHelp(request)}>{busy === `help-${request.id}` ? 'Sending…' : request.status === 'resolved' ? 'Update response' : 'Resolve & send'}</button></article>)}</div> : <EmptyState icon="message" title="No help requests" message="Student account and support issues will appear here." />}</div>
    </section>
  );
}

function TestsPanel({ data, batchMap, studentMap, profile, reload, setToast }) {
  const supabase = useMemo(() => createClient(), []);
  const [batchId, setBatchId] = useState('');
  const [form, setForm] = useState({ title: '', testDate: '', maxMarks: '' });
  const [marks, setMarks] = useState({});
  const [saving, setSaving] = useState(false);
  const students = data.students.filter((student) => student.batch_id === batchId && student.is_active);

  function update(key, value) { setForm((current) => ({ ...current, [key]: value })); }

  async function submit(event) {
    event.preventDefault();
    if (!batchId) return setToast({ type: 'error', message: 'Choose a batch.' });
    const entered = students.filter((student) => marks[student.id] !== '' && marks[student.id] !== undefined);
    if (!entered.length) return setToast({ type: 'error', message: 'Enter marks for at least one student.' });
    const maxMarks = Number(form.maxMarks);
    if (entered.some((student) => Number(marks[student.id]) > maxMarks || Number(marks[student.id]) < 0)) return setToast({ type: 'error', message: 'Marks must be between 0 and the maximum marks.' });
    setSaving(true);
    const { data: test, error: testError } = await supabase.from('tests').insert({ batch_id: batchId, title: form.title.trim(), test_date: form.testDate, max_marks: maxMarks, created_by: profile.id }).select('*').single();
    if (testError) { setSaving(false); return setToast({ type: 'error', message: testError.message }); }
    const rows = entered.map((student) => ({ test_id: test.id, student_id: student.id, marks: Number(marks[student.id]) }));
    const { error: scoreError } = await supabase.from('test_scores').insert(rows);
    setSaving(false);
    if (scoreError) { await supabase.from('tests').delete().eq('id', test.id); return setToast({ type: 'error', message: scoreError.message }); }
    for (const student of entered) {
      await supabase.from('notifications').insert({ recipient_id: student.id, type: 'test', title: `Test result: ${test.title}`, body: `Your marks have been uploaded. Open the Tests panel to view your automatically calculated rank.`, data: { test_id: test.id } });
    }
    setForm({ title: '', testDate: '', maxMarks: '' }); setMarks({}); await reload(); setToast({ message: 'Test marks uploaded. Ranks were calculated automatically.' });
  }

  return (
    <section>
      <PageHeading eyebrow="TESTS" title="Tests, marks and automatic ranks" text="Select a batch, create the test and enter marks. Rank is recalculated by the database whenever marks change." />
      <div className="card create-card"><form onSubmit={submit}><div className="form-grid four"><label>Batch<select value={batchId} onChange={(e) => { setBatchId(e.target.value); setMarks({}); }} required><option value="">Choose batch</option>{data.batches.map((batch) => <option key={batch.id} value={batch.id}>{batch.title}</option>)}</select></label><label>Test title<input value={form.title} onChange={(e) => update('title', e.target.value)} placeholder="Test name" required /></label><label>Test date<input type="date" value={form.testDate} onChange={(e) => update('testDate', e.target.value)} required /></label><label>Maximum marks<input type="number" min="1" value={form.maxMarks} onChange={(e) => update('maxMarks', e.target.value)} required /></label></div>{batchId && (students.length ? <div className="marks-entry"><div className="marks-head"><strong>Student</strong><strong>Marks</strong></div>{students.map((student) => <label key={student.id}><span>{student.full_name}<small>{student.student_code}</small></span><input type="number" min="0" max={form.maxMarks || undefined} value={marks[student.id] ?? ''} onChange={(e) => setMarks((current) => ({ ...current, [student.id]: e.target.value }))} placeholder="—" /></label>)}</div> : <div className="inline-message">This batch does not have any students yet.</div>)}<button className="button button-primary" disabled={saving || !students.length}>{saving ? 'Uploading marks…' : 'Create Test & Publish Marks'}</button></form></div>
      <div className="card table-card"><div className="card-title-row"><div><span>Test records</span><h3>{data.tests.length} test{data.tests.length === 1 ? '' : 's'}</h3></div></div>{data.tests.length ? <div className="responsive-table"><table><thead><tr><th>Test</th><th>Batch</th><th>Date</th><th>Maximum</th><th>Students</th><th>Top score</th></tr></thead><tbody>{data.tests.map((test) => { const scores = data.scores.filter((score) => score.test_id === test.id); return <tr key={test.id}><td><strong>{test.title}</strong></td><td>{batchMap[test.batch_id]?.title || '—'}</td><td>{formatDate(test.test_date)}</td><td>{test.max_marks}</td><td>{scores.length}</td><td>{scores.length ? Math.max(...scores.map((score) => Number(score.marks))) : '—'}</td></tr>; })}</tbody></table></div> : <EmptyState icon="tests" title="No tests created" message="Select a batch and upload the first set of marks." />}</div>
    </section>
  );
}

function CredentialModal({ credentials, close }) {
  async function copy() {
    await navigator.clipboard.writeText(credentials.message);
  }

  async function share() {
    if (navigator.share) {
      try { await navigator.share({ title: 'The Apex Chemistry Login Credentials', text: credentials.message }); }
      catch { await copy(); }
    } else await copy();
  }

  return (
    <Modal open={Boolean(credentials)} onClose={close} title="Student created successfully" size="md">
      {credentials && <div className="credential-success"><span className="success-seal"><Icon name="check" size={34}/></span><h3>{credentials.studentName}</h3><p>The authenticated student account has been created. The password is shown only now and is not stored in the profile table.</p><div className="credential-box"><label>Student ID<strong>{credentials.studentId}</strong></label><label>Temporary password<strong>{credentials.password}</strong></label><label>Website<strong>{credentials.website}</strong></label></div><div className="credential-message"><pre>{credentials.message}</pre></div><div className="modal-actions"><button className="button button-outline-dark" onClick={copy}>Copy Message</button><button className="button button-primary" onClick={share}><Icon name="share" size={17}/> Share Credentials</button></div></div>}
    </Modal>
  );
}
