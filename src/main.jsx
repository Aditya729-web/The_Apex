import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  LayoutDashboard, UserRound, BookOpen, Video, ClipboardList, FileText,
  CalendarDays, BarChart3, CreditCard, Megaphone, LifeBuoy, Settings,
  LogOut, Search, Bell, Moon, Sun, Menu, X, Users, GraduationCap,
  UploadCloud, ShieldCheck, Eye, EyeOff, ChevronRight, CheckCircle2,
  Clock3, Database, Monitor, Code2, Plus, MoreVertical, UserCog,
  Download, TrendingUp
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import './styles.css';

const DEMO_USERS = {
  'admin@theapex.com': { password: 'Apex@2026', role: 'admin', name: 'Apex Admin' },
  'student@theapex.com': { password: 'Student@2026', role: 'student', name: 'Aditya Singh' }
};

const performance = [
  { month: 'Jan', score: 38 }, { month: 'Feb', score: 44 },
  { month: 'Mar', score: 55 }, { month: 'Apr', score: 47 },
  { month: 'May', score: 58 }, { month: 'Jun', score: 72 },
  { month: 'Jul', score: 81 }
];

const attendanceData = [
  { name: 'Present', value: 86 },
  { name: 'Absent', value: 8 },
  { name: 'Leave', value: 6 }
];

const adminBars = [
  { name: 'Mon', students: 128 }, { name: 'Tue', students: 142 },
  { name: 'Wed', students: 136 }, { name: 'Thu', students: 151 },
  { name: 'Fri', students: 145 }, { name: 'Sat', students: 112 }
];

const studentNav = [
  ['Dashboard', LayoutDashboard], ['My Profile', UserRound], ['Courses', BookOpen],
  ['Live Classes', Video], ['Assignments', ClipboardList], ['Exams', FileText],
  ['Study Materials', BookOpen], ['Attendance', CalendarDays], ['Results', BarChart3],
  ['Fees & Payments', CreditCard], ['Announcements', Megaphone], ['Support', LifeBuoy],
  ['Settings', Settings]
];

const adminNav = [
  ['Dashboard', LayoutDashboard], ['Students', Users], ['Faculty', UserCog],
  ['Courses', GraduationCap], ['Attendance', CalendarDays], ['Marks & Results', BarChart3],
  ['Fees', CreditCard], ['Notices', Megaphone], ['File Uploads', UploadCloud],
  ['Reports', FileText], ['Settings', Settings]
];

function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('apex-demo-user')) || null; }
    catch { return null; }
  });
  const [dark, setDark] = useState(false);

  const login = (payload) => {
    setUser(payload);
    localStorage.setItem('apex-demo-user', JSON.stringify(payload));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('apex-demo-user');
  };

  return (
    <div className={dark ? 'app dark' : 'app'}>
      {!user ? <Login onLogin={login} /> : <Portal user={user} onLogout={logout} dark={dark} setDark={setDark} />}
    </div>
  );
}

function Login({ onLogin }) {
  const [email, setEmail] = useState('student@theapex.com');
  const [password, setPassword] = useState('Student@2026');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const match = DEMO_USERS[email.trim().toLowerCase()];
    if (!match || match.password !== password) {
      setError('Invalid demo email or password.');
      return;
    }
    onLogin({ email: email.trim().toLowerCase(), role: match.role, name: match.name });
  };

  const useDemo = (type) => {
    const isAdmin = type === 'admin';
    setEmail(isAdmin ? 'admin@theapex.com' : 'student@theapex.com');
    setPassword(isAdmin ? 'Apex@2026' : 'Student@2026');
    setError('');
  };

  return (
    <main className="login-page">
      <section className="login-showcase">
        <div className="brand big-brand">
          <div className="brand-mark">A</div>
          <div><strong>THE APEX</strong><span>EXCELLENCE REDEFINED</span></div>
        </div>
        <div className="showcase-copy">
          <span className="eyebrow">SMART ACADEMIC PORTAL</span>
          <h1>Everything your institution needs, in one modern workspace.</h1>
          <p>Manage classes, attendance, results, materials and communication through a secure, responsive experience.</p>
          <div className="mini-stats">
            <div><strong>24/7</strong><span>Portal access</span></div>
            <div><strong>100%</strong><span>Responsive UI</span></div>
            <div><strong>2 roles</strong><span>Admin & student</span></div>
          </div>
        </div>
        <div className="glass-preview">
          <div className="preview-head"><span></span><span></span><span></span></div>
          <div className="preview-grid">
            <div></div><div></div><div></div>
            <div className="wide"></div><div className="tall"></div><div className="wide"></div>
          </div>
        </div>
      </section>

      <section className="login-panel">
        <form className="login-card" onSubmit={submit}>
          <div className="mobile-brand brand">
            <div className="brand-mark">A</div><div><strong>THE APEX</strong><span>PORTAL DEMO</span></div>
          </div>
          <span className="eyebrow">WELCOME BACK</span>
          <h2>Sign in to your account</h2>
          <p className="muted">Use either demo account below.</p>

          <label>Email address</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required />

          <label>Password</label>
          <div className="password-wrap">
            <input value={password} onChange={e => setPassword(e.target.value)} type={show ? 'text' : 'password'} required />
            <button type="button" onClick={() => setShow(!show)}>{show ? <EyeOff size={18}/> : <Eye size={18}/>}</button>
          </div>

          {error && <div className="error">{error}</div>}
          <button className="primary-btn" type="submit">Sign in <ChevronRight size={18}/></button>

          <div className="demo-buttons">
            <button type="button" onClick={() => useDemo('student')}>Use student demo</button>
            <button type="button" onClick={() => useDemo('admin')}>Use admin demo</button>
          </div>

          <div className="credentials">
            <p><strong>Student:</strong> student@theapex.com / Student@2026</p>
            <p><strong>Admin:</strong> admin@theapex.com / Apex@2026</p>
          </div>
        </form>
      </section>
    </main>
  );
}

function Portal({ user, onLogout, dark, setDark }) {
  const isAdmin = user.role === 'admin';
  const nav = isAdmin ? adminNav : studentNav;
  const [active, setActive] = useState('Dashboard');
  const [open, setOpen] = useState(false);

  return (
    <div className="portal-shell">
      <aside className={open ? 'sidebar open' : 'sidebar'}>
        <div className="brand">
          <div className="brand-mark">A</div>
          <div><strong>THE APEX</strong><span>{isAdmin ? 'ADMIN CONSOLE' : 'STUDENT PORTAL'}</span></div>
        </div>
        <button className="mobile-close" onClick={() => setOpen(false)}><X/></button>
        <nav>
          {nav.map(([label, Icon]) => (
            <button key={label} className={active === label ? 'nav-item active' : 'nav-item'} onClick={() => { setActive(label); setOpen(false); }}>
              <Icon size={19}/><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="role-card"><ShieldCheck size={20}/><div><strong>{isAdmin ? 'Administrator' : 'Verified Student'}</strong><span>Demo access enabled</span></div></div>
          <button className="logout-btn" onClick={onLogout}><LogOut size={18}/> Logout</button>
        </div>
      </aside>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <main className="main-area">
        <header className="topbar">
          <div className="welcome">
            <button className="menu-btn" onClick={() => setOpen(true)}><Menu/></button>
            <div><span>Welcome back,</span><strong>{user.name} 👋</strong></div>
          </div>
          <div className="top-actions">
            <div className="search"><Search size={18}/><input placeholder="Search portal..." /></div>
            <button className="icon-btn"><Bell size={19}/><span className="badge">3</span></button>
            <button className="icon-btn" onClick={() => setDark(!dark)}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>
            <div className="avatar">{user.name.split(' ').map(x => x[0]).join('').slice(0,2)}</div>
          </div>
        </header>

        <section className="content">
          {active === 'Dashboard'
            ? (isAdmin ? <AdminDashboard/> : <StudentDashboard/>)
            : <PlaceholderPage title={active} role={user.role}/>
          }
        </section>
      </main>
    </div>
  );
}

function StatCard({ icon: Icon, title, value, subtitle, tone }) {
  return <div className="stat-card">
    <div className={`stat-icon ${tone}`}><Icon size={25}/></div>
    <div><span>{title}</span><strong>{value}</strong><small>{subtitle}</small></div>
    <button><ChevronRight size={17}/></button>
  </div>;
}

function StudentDashboard() {
  return <>
    <div className="page-heading"><div><h1>Student Dashboard</h1><p>Track your learning, attendance and upcoming activities.</p></div><button className="secondary-btn"><Download size={17}/> Download report</button></div>
    <div className="stats-grid">
      <StatCard icon={BookOpen} title="Courses Enrolled" value="6" subtitle="Active courses" tone="blue"/>
      <StatCard icon={CalendarDays} title="Classes Today" value="2" subtitle="Next at 10:00 AM" tone="green"/>
      <StatCard icon={ClipboardList} title="Pending Assignments" value="3" subtitle="Due this week" tone="amber"/>
      <StatCard icon={TrendingUp} title="Overall Progress" value="78%" subtitle="Keep it up" tone="purple"/>
    </div>

    <div className="dashboard-grid">
      <section className="panel chart-panel">
        <div className="panel-head"><div><h3>Performance overview</h3><p>Your progress across the current semester</p></div><select><option>This semester</option></select></div>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performance}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month"/><YAxis/><Tooltip/><Line type="monotone" dataKey="score" stroke="currentColor" strokeWidth={3} dot={{r:4}}/></LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="panel upcoming">
        <div className="panel-head"><div><h3>Upcoming classes</h3><p>Today's schedule</p></div><button>View all</button></div>
        {[
          ['Data Structures','10:00 AM – 11:30 AM',Code2,'In 30 min'],
          ['Operating Systems','12:00 PM – 1:30 PM',Monitor,'2h 30m'],
          ['Database Management','3:00 PM – 4:30 PM',Database,'5h 30m']
        ].map(([a,b,I,c]) => <div className="class-row" key={a}><div className="class-icon"><I size={20}/></div><div><strong>{a}</strong><span>{b}</span></div><em>{c}</em></div>)}
      </section>

      <section className="panel courses-panel">
        <div className="panel-head"><div><h3>Continue learning</h3><p>Resume your recent courses</p></div><button>View all</button></div>
        <div className="course-grid">
          {[
            ['Data Structures','Prof. A. Sharma','75%',Code2],
            ['Operating Systems','Prof. R. Kumar','60%',Monitor],
            ['Database Management','Prof. P. Verma','40%',Database]
          ].map(([a,b,c,I]) => <div className="course-card" key={a}><div className="course-top"><div className="course-icon"><I/></div><span>{c}</span></div><strong>{a}</strong><small>{b}</small><div className="progress"><i style={{width:c}}/></div></div>)}
        </div>
      </section>

      <section className="panel announcements">
        <div className="panel-head"><div><h3>Announcements</h3><p>Latest updates</p></div><button>View all</button></div>
        {[
          ['New study material uploaded','Data Structures – Linked Lists','2h ago'],
          ['Mid-semester exam schedule','June 15 – June 30','1d ago'],
          ['Live session on system design','By Prof. Sharma','2d ago']
        ].map(([a,b,c]) => <div className="notice-row" key={a}><Megaphone size={18}/><div><strong>{a}</strong><span>{b}</span></div><em>{c}</em></div>)}
      </section>
    </div>
  </>;
}

function AdminDashboard() {
  return <>
    <div className="page-heading"><div><h1>Admin Dashboard</h1><p>Manage users, academics, communication and institutional records.</p></div><button className="primary-small"><Plus size={17}/> Add student</button></div>
    <div className="stats-grid">
      <StatCard icon={Users} title="Registered Students" value="1,248" subtitle="+38 this month" tone="blue"/>
      <StatCard icon={UserCog} title="Faculty Members" value="64" subtitle="58 active today" tone="green"/>
      <StatCard icon={GraduationCap} title="Active Courses" value="28" subtitle="Across 7 departments" tone="purple"/>
      <StatCard icon={CreditCard} title="Fees Collected" value="₹8.4L" subtitle="92% of target" tone="amber"/>
    </div>

    <div className="admin-grid">
      <section className="panel admin-chart">
        <div className="panel-head"><div><h3>Daily portal activity</h3><p>Unique student logins this week</p></div><select><option>This week</option></select></div>
        <div className="chart-box">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={adminBars}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="name"/><YAxis/><Tooltip/><Bar dataKey="students" fill="currentColor" radius={[8,8,0,0]}/></BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="panel attendance-panel">
        <div className="panel-head"><div><h3>Attendance summary</h3><p>Institution-wide today</p></div></div>
        <div className="pie-wrap"><ResponsiveContainer width="100%" height={220}><PieChart><Pie data={attendanceData} innerRadius={58} outerRadius={86} dataKey="value"><Cell/><Cell/><Cell/></Pie><Tooltip/></PieChart></ResponsiveContainer><div className="pie-center"><strong>86%</strong><span>Present</span></div></div>
        <div className="legend"><span>● Present 86%</span><span>● Absent 8%</span><span>● Leave 6%</span></div>
      </section>

      <section className="panel recent-table">
        <div className="panel-head"><div><h3>Recently registered students</h3><p>Latest account activity</p></div><button>View all</button></div>
        <div className="table-wrap"><table><thead><tr><th>Student</th><th>Course</th><th>Status</th><th>Joined</th><th></th></tr></thead><tbody>
          {[
            ['Riya Sharma','Computer Science','Active','Today'],
            ['Arjun Mehta','Commerce','Active','Today'],
            ['Nisha Roy','Science','Pending','Yesterday'],
            ['Kabir Das','Humanities','Active','Yesterday']
          ].map(r => <tr key={r[0]}><td><div className="student-cell"><div className="mini-avatar">{r[0].split(' ').map(x=>x[0]).join('')}</div><strong>{r[0]}</strong></div></td><td>{r[1]}</td><td><span className={r[2]==='Active'?'status active-status':'status pending-status'}>{r[2]}</span></td><td>{r[3]}</td><td><MoreVertical size={17}/></td></tr>)}
        </tbody></table></div>
      </section>

      <section className="panel quick-actions">
        <div className="panel-head"><div><h3>Quick actions</h3><p>Common administrative tasks</p></div></div>
        <div className="action-grid">
          {[[Users,'Add student'],[Megaphone,'Publish notice'],[UploadCloud,'Upload material'],[BarChart3,'Enter marks'],[CalendarDays,'Manage attendance'],[FileText,'Generate report']].map(([I,t]) => <button key={t}><I size={21}/><span>{t}</span></button>)}
        </div>
      </section>
    </div>
  </>;
}

function PlaceholderPage({ title, role }) {
  const [done, setDone] = useState(false);
  return <div className="placeholder panel">
    <div className="placeholder-icon"><CheckCircle2 size={38}/></div>
    <span className="eyebrow">DEMO MODULE</span>
    <h1>{title}</h1>
    <p>This page is included in the navigation and ready to be connected to Firebase. The current version demonstrates the final interface and role-based portal flow.</p>
    <button className="primary-btn slim" onClick={() => setDone(true)}>{done ? 'Demo action completed' : `Try ${role} action`} <ChevronRight size={17}/></button>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
