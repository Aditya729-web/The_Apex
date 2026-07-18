import React, {useEffect, useMemo, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {LayoutDashboard,Users,BookOpen,Megaphone,ClipboardList,FileUp,Settings,LogOut,Menu,X,Search,Bell,Plus,Edit3,Trash2,ShieldCheck,UserCheck,UserX,Eye,EyeOff,ChevronRight,GraduationCap,CalendarDays,FileText,CheckCircle2,Clock3,AlertCircle,Save,RotateCcw,Download,Mail,Phone,Hash,LockKeyhole} from 'lucide-react';
import './styles.css';

const ADMIN={email:'admin@theapex.com',password:'Apex@2026',name:'Apex Administrator',role:'admin'};
const DB_KEY='apex-final-db-v1';
const SESSION_KEY='apex-final-session-v1';
const emptyDB={users:[],courses:[],announcements:[],assignments:[],materials:[],audit:[]};
const uid=()=>crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`;
const loadDB=()=>{try{return {...emptyDB,...JSON.parse(localStorage.getItem(DB_KEY)||'{}')}}catch{return structuredClone(emptyDB)}};
const saveDB=db=>localStorage.setItem(DB_KEY,JSON.stringify(db));
const dateNow=()=>new Date().toLocaleString();

function App(){
 const [db,setDB]=useState(loadDB);
 const [session,setSession]=useState(()=>{try{return JSON.parse(localStorage.getItem(SESSION_KEY)||'null')}catch{return null}});
 useEffect(()=>saveDB(db),[db]);
 const login=(email,password)=>{
  const e=email.trim().toLowerCase();
  if(e===ADMIN.email && password===ADMIN.password){const s={...ADMIN,password:undefined};setSession(s);localStorage.setItem(SESSION_KEY,JSON.stringify(s));return null}
  const found=db.users.find(u=>u.email.toLowerCase()===e&&u.password===password);
  if(!found)return 'Invalid email or password.';
  if(found.status!=='active')return 'This account is suspended. Contact the administrator.';
  const s={id:found.id,email:found.email,name:found.name,role:'student'};setSession(s);localStorage.setItem(SESSION_KEY,JSON.stringify(s));return null;
 };
 const logout=()=>{setSession(null);localStorage.removeItem(SESSION_KEY)};
 const updateDB=(updater,action)=>setDB(prev=>{const next=typeof updater==='function'?updater(prev):updater;return {...next,audit:[{id:uid(),action,time:dateNow()},...(next.audit||[])].slice(0,50)}});
 return session?<Portal session={session} db={db} updateDB={updateDB} logout={logout}/>:<Login onLogin={login}/>;
}

function Login({onLogin}){
 const [email,setEmail]=useState(ADMIN.email),[password,setPassword]=useState(ADMIN.password),[show,setShow]=useState(false),[error,setError]=useState('');
 const submit=e=>{e.preventDefault();setError(onLogin(email,password)||'')};
 return <main className="login-page"><section className="login-visual"><div className="brand"><Logo/><div><b>THE APEX</b><span>EXCELLENCE REDEFINED</span></div></div><div className="hero-copy"><small>ACADEMIC MANAGEMENT PORTAL</small><h1>A cleaner way to manage your institution.</h1><p>Secure role-based access, user management, courses, notices, assignments and resources in one responsive workspace.</p><div className="feature-row"><div><ShieldCheck/><span>Single-admin control</span></div><div><UserCheck/><span>Approved users only</span></div><div><LayoutDashboard/><span>Live empty-state dashboard</span></div></div></div><div className="visual-card"><div className="fakebar"></div><div className="fake-grid"><i/><i/><i/><i className="wide"/><i/><i/></div></div></section><section className="login-side"><form className="login-card" onSubmit={submit}><div className="mobile-brand brand"><Logo/><div><b>THE APEX</b><span>PORTAL</span></div></div><small className="overline">WELCOME BACK</small><h2>Sign in to continue</h2><p>Only the administrator and registered active users can access the portal.</p><label>Email address</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/><label>Password</label><div className="password"><input type={show?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} required/><button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff/>:<Eye/>}</button></div>{error&&<div className="error"><AlertCircle/>{error}</div>}<button className="primary" type="submit">Sign in <ChevronRight/></button><div className="demo-note"><b>Default administrator</b><span>{ADMIN.email}</span><span>{ADMIN.password}</span></div></form></section></main>
}
const Logo=()=> <div className="logo">A</div>;

const adminNav=[['Dashboard',LayoutDashboard],['Users',Users],['Courses',BookOpen],['Announcements',Megaphone],['Assignments',ClipboardList],['Materials',FileUp],['Settings',Settings]];
const studentNav=[['Dashboard',LayoutDashboard],['Courses',BookOpen],['Announcements',Megaphone],['Assignments',ClipboardList],['Materials',FileUp],['Profile',Users]];

function Portal({session,db,updateDB,logout}){
 const admin=session.role==='admin', nav=admin?adminNav:studentNav;
 const [active,setActive]=useState('Dashboard'),[open,setOpen]=useState(false),[query,setQuery]=useState('');
 return <div className="shell"><aside className={open?'sidebar open':'sidebar'}><div className="brand"><Logo/><div><b>THE APEX</b><span>{admin?'ADMIN CONSOLE':'STUDENT PORTAL'}</span></div></div><button className="close" onClick={()=>setOpen(false)}><X/></button><nav>{nav.map(([n,I])=><button key={n} className={active===n?'active':''} onClick={()=>{setActive(n);setOpen(false)}}><I/><span>{n}</span></button>)}</nav><div className="side-bottom"><div className="role"><ShieldCheck/><div><b>{admin?'Sole Administrator':'Registered User'}</b><span>{session.email}</span></div></div><button onClick={logout}><LogOut/>Logout</button></div></aside>{open&&<div className="overlay" onClick={()=>setOpen(false)}/>}<main className="main"><header><button className="hamb" onClick={()=>setOpen(true)}><Menu/></button><div className="header-title"><span>Welcome back,</span><b>{session.name}</b></div><div className="header-actions"><div className="search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search current page..."/></div><button><Bell/><em>0</em></button><div className="avatar">{session.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div></div></header><section className="content"><Page active={active} admin={admin} session={session} db={db} updateDB={updateDB} query={query}/></section></main></div>
}

function Page(p){
 if(p.active==='Dashboard')return p.admin?<AdminDashboard {...p}/>:<StudentDashboard {...p}/>;
 if(p.active==='Users')return <UsersPage {...p}/>;
 if(p.active==='Courses')return <CollectionPage {...p} type="courses" title="Courses" icon={BookOpen}/>;
 if(p.active==='Announcements')return <CollectionPage {...p} type="announcements" title="Announcements" icon={Megaphone}/>;
 if(p.active==='Assignments')return <CollectionPage {...p} type="assignments" title="Assignments" icon={ClipboardList}/>;
 if(p.active==='Materials')return <CollectionPage {...p} type="materials" title="Study Materials" icon={FileUp}/>;
 if(p.active==='Settings')return <SettingsPage {...p}/>;
 return <Profile session={p.session}/>;
}

const Stat=({I,label,value,sub})=><article className="stat"><div><I/></div><section><span>{label}</span><b>{value}</b><small>{sub}</small></section></article>;
function AdminDashboard({db}){
 const active=db.users.filter(u=>u.status==='active').length;
 return <><Title title="Admin Dashboard" sub="Your portal currently contains no seeded institutional data."/><div className="stats"><Stat I={Users} label="Registered users" value={db.users.length} sub="0 at first launch"/><Stat I={UserCheck} label="Active users" value={active} sub="Approved accounts"/><Stat I={BookOpen} label="Courses" value={db.courses.length} sub="Published courses"/><Stat I={Bell} label="Recent activity" value={db.audit.length} sub="Admin actions logged"/></div><div className="dashboard-columns"><Panel title="Portal overview"><Empty I={LayoutDashboard} title="No operational data yet" text="Use the sidebar to register users, create courses, publish announcements, add assignments and upload material links."/></Panel><Panel title="Recent admin actions">{db.audit.length?db.audit.slice(0,6).map(a=><div className="activity" key={a.id}><CheckCircle2/><div><b>{a.action}</b><span>{a.time}</span></div></div>):<Empty I={Clock3} title="Zero recent activity" text="Actions performed by the administrator will appear here."/>}</Panel></div></>
}
function StudentDashboard({db,session}){
 const courses=db.courses.filter(c=>!c.userIds?.length||c.userIds.includes(session.id));
 return <><Title title="Student Dashboard" sub="Your approved academic information will appear here."/><div className="stats"><Stat I={BookOpen} label="Courses" value={courses.length} sub="Assigned to you"/><Stat I={ClipboardList} label="Assignments" value={db.assignments.length} sub="Currently published"/><Stat I={Megaphone} label="Announcements" value={db.announcements.length} sub="Available notices"/><Stat I={FileText} label="Materials" value={db.materials.length} sub="Learning resources"/></div><Panel title="Your workspace"><Empty I={GraduationCap} title="Your account is ready" text="The administrator has not yet added academic data. New courses, assignments and notices will appear automatically."/></Panel></>
}
const Title=({title,sub,action})=><div className="title"><div><h1>{title}</h1><p>{sub}</p></div>{action}</div>;
const Panel=({title,children})=><section className="panel"><h3>{title}</h3>{children}</section>;
const Empty=({I,title,text})=><div className="empty"><I/><h4>{title}</h4><p>{text}</p></div>;

function UsersPage({db,updateDB,query}){
 const [modal,setModal]=useState(false),[editing,setEditing]=useState(null);
 const list=db.users.filter(u=>`${u.name} ${u.email} ${u.phone||''}`.toLowerCase().includes(query.toLowerCase()));
 const save=data=>{if(editing){updateDB(d=>({...d,users:d.users.map(u=>u.id===editing.id?{...u,...data}:u)}),`Updated user: ${data.name}`)}else{updateDB(d=>({...d,users:[...d.users,{...data,id:uid(),createdAt:dateNow()}]}),`Registered user: ${data.name}`)}setModal(false);setEditing(null)};
 const remove=u=>{if(confirm(`Delete ${u.name}? This cannot be undone.`))updateDB(d=>({...d,users:d.users.filter(x=>x.id!==u.id)}),`Deleted user: ${u.name}`)};
 const toggle=u=>updateDB(d=>({...d,users:d.users.map(x=>x.id===u.id?{...x,status:x.status==='active'?'suspended':'active'}:x)}),`${u.status==='active'?'Suspended':'Activated'} user: ${u.name}`);
 return <><Title title="Registered Users" sub="Create credentials and control who may access the portal." action={<button className="primary compact" onClick={()=>setModal(true)}><Plus/>Register user</button>}/><div className="notice"><LockKeyhole/><span>There are <b>{db.users.length}</b> registered users. The admin account is separate and cannot be created or removed here.</span></div><Panel title="User directory">{list.length?<div className="table-wrap"><table><thead><tr><th>User</th><th>Contact</th><th>Reference</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead><tbody>{list.map(u=><tr key={u.id}><td><div className="usercell"><div>{u.name.slice(0,2).toUpperCase()}</div><span><b>{u.name}</b><small>{u.email}</small></span></div></td><td>{u.phone||'—'}</td><td>{u.reference||'—'}</td><td><span className={`pill ${u.status}`}>{u.status}</span></td><td>{u.createdAt}</td><td><div className="actions"><button title="Edit" onClick={()=>{setEditing(u);setModal(true)}}><Edit3/></button><button title={u.status==='active'?'Suspend':'Activate'} onClick={()=>toggle(u)}>{u.status==='active'?<UserX/>:<UserCheck/>}</button><button className="danger" title="Delete" onClick={()=>remove(u)}><Trash2/></button></div></td></tr>)}</tbody></table></div>:<Empty I={Users} title="No registered users" text="Register the first user to create their login credentials."/>}</Panel>{modal&&<UserModal user={editing} existing={db.users} close={()=>{setModal(false);setEditing(null)}} save={save}/>}</>
}
function UserModal({user,existing,close,save}){
 const [f,setF]=useState(user||{name:'',email:'',password:'',phone:'',reference:'',status:'active'}),[show,setShow]=useState(false),[error,setError]=useState('');
 const submit=e=>{e.preventDefault();if(existing.some(x=>x.email.toLowerCase()===f.email.toLowerCase()&&x.id!==user?.id)){setError('This email is already registered.');return}if(f.password.length<6){setError('Password must contain at least 6 characters.');return}save({...f,email:f.email.trim().toLowerCase()})};
 return <div className="modal-bg"><form className="modal" onSubmit={submit}><div className="modal-head"><div><h3>{user?'Edit user':'Register new user'}</h3><p>Create portal credentials for an approved user.</p></div><button type="button" onClick={close}><X/></button></div><div className="form-grid"><label>Full name<input required value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></label><label>Email address<input required type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></label><label>Phone number<input value={f.phone} onChange={e=>setF({...f,phone:e.target.value})}/></label><label>Student/reference ID<input value={f.reference} onChange={e=>setF({...f,reference:e.target.value})}/></label><label className="full">Password<div className="password"><input required type={show?'text':'password'} value={f.password} onChange={e=>setF({...f,password:e.target.value})}/><button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff/>:<Eye/>}</button></div></label><label>Status<select value={f.status} onChange={e=>setF({...f,status:e.target.value})}><option value="active">Active</option><option value="suspended">Suspended</option></select></label></div>{error&&<div className="error"><AlertCircle/>{error}</div>}<div className="modal-actions"><button type="button" className="secondary" onClick={close}>Cancel</button><button className="primary compact"><Save/>{user?'Save changes':'Register user'}</button></div></form></div>
}

const configs={
 courses:{fields:[['title','Course title'],['code','Course code'],['teacher','Instructor']],desc:'Create and publish courses for registered users.'},
 announcements:{fields:[['title','Announcement title'],['body','Message']],desc:'Publish notices visible to all registered users.'},
 assignments:{fields:[['title','Assignment title'],['course','Course'],['due','Due date']],desc:'Create assignments and due dates.'},
 materials:{fields:[['title','Resource title'],['course','Course'],['url','Resource URL']],desc:'Publish study material links for users.'}
};
function CollectionPage({type,title,icon:I,admin,db,updateDB,query}){
 const cfg=configs[type], items=db[type]||[], [modal,setModal]=useState(false),[editing,setEditing]=useState(null);
 const filtered=items.filter(i=>Object.values(i).join(' ').toLowerCase().includes(query.toLowerCase()));
 const save=data=>{if(editing)updateDB(d=>({...d,[type]:d[type].map(x=>x.id===editing.id?{...x,...data}:x)}),`Updated ${title.toLowerCase()}: ${data.title}`);else updateDB(d=>({...d,[type]:[...d[type],{...data,id:uid(),createdAt:dateNow()}]}),`Created ${title.toLowerCase()}: ${data.title}`);setModal(false);setEditing(null)};
 const remove=i=>{if(confirm(`Delete “${i.title}”?`))updateDB(d=>({...d,[type]:d[type].filter(x=>x.id!==i.id)}),`Deleted ${title.toLowerCase()}: ${i.title}`)};
 return <><Title title={title} sub={cfg.desc} action={admin?<button className="primary compact" onClick={()=>setModal(true)}><Plus/>Add {title.slice(0,-1)}</button>:null}/><Panel title={`All ${title.toLowerCase()}`}>{filtered.length?<div className="cards">{filtered.map(i=><article className="item-card" key={i.id}><div className="item-icon"><I/></div><div className="item-body"><h4>{i.title}</h4>{cfg.fields.slice(1).map(([k])=><p key={k}>{i[k]||'—'}</p>)}<small>Added {i.createdAt}</small></div>{admin&&<div className="actions"><button onClick={()=>{setEditing(i);setModal(true)}}><Edit3/></button><button className="danger" onClick={()=>remove(i)}><Trash2/></button></div>}</article>)}</div>:<Empty I={I} title={`No ${title.toLowerCase()} yet`} text={admin?`Use “Add ${title.slice(0,-1)}” to create the first entry.`:'The administrator has not published anything here.'}/>}</Panel>{modal&&<GenericModal title={title.slice(0,-1)} fields={cfg.fields} item={editing} close={()=>{setModal(false);setEditing(null)}} save={save}/>}</>
}
function GenericModal({title,fields,item,close,save}){const initial=Object.fromEntries(fields.map(([k])=>[k,item?.[k]||'']));const[f,setF]=useState(initial);return <div className="modal-bg"><form className="modal" onSubmit={e=>{e.preventDefault();save(f)}}><div className="modal-head"><div><h3>{item?'Edit':'Add'} {title}</h3><p>Complete the required information below.</p></div><button type="button" onClick={close}><X/></button></div><div className="form-grid">{fields.map(([k,l],idx)=><label key={k} className={k==='body'?'full':''}>{l}{k==='body'?<textarea required value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>:<input required type={k==='due'?'date':k==='url'?'url':'text'} value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>}</label>)}</div><div className="modal-actions"><button type="button" className="secondary" onClick={close}>Cancel</button><button className="primary compact"><Save/>Save</button></div></form></div>}

function SettingsPage({db,updateDB}){const reset=()=>{if(confirm('Reset all portal data? The administrator login will remain available.'))updateDB(structuredClone(emptyDB),'Reset portal data')};const exportData=()=>{const blob=new Blob([JSON.stringify(db,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='the-apex-backup.json';a.click();URL.revokeObjectURL(a.href)};return <><Title title="Portal Settings" sub="Manage local demo data and migration tools."/><div className="settings-grid"><Panel title="Export data"><p className="setting-copy">Download all users and portal content as a JSON backup.</p><button className="secondary compact" onClick={exportData}><Download/>Export backup</button></Panel><Panel title="Reset demo"><p className="setting-copy">Delete all users, courses, notices, assignments, materials and activity.</p><button className="danger-btn compact" onClick={reset}><RotateCcw/>Reset all data</button></Panel></div><div className="notice warning"><AlertCircle/><span>This testing build stores data in the browser using localStorage. Connect Firebase Authentication and Firestore before collecting real client or student information.</span></div></>}
function Profile({session}){return <><Title title="My Profile" sub="Your registered portal identity."/><Panel title="Account information"><div className="profile"><div className="avatar large">{session.name.slice(0,2).toUpperCase()}</div><div><h3>{session.name}</h3><p><Mail/> {session.email}</p><p><ShieldCheck/> Registered active user</p></div></div></Panel></>}

createRoot(document.getElementById('root')).render(<App/>);
