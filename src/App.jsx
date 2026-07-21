import React, { useEffect, useMemo, useState } from 'react'
import {
  Bell, BookOpen, CalendarDays, CheckCircle2, ChevronDown, CircleDollarSign,
  Clock3, FileText, GraduationCap, LayoutDashboard, LogOut, Menu, Plus,
  Search, Send, Settings, ShieldCheck, Trash2, Upload, UserPlus, Users,
  WalletCards, X, AlertCircle, Eye, EyeOff, Download, Pencil, RefreshCw
} from 'lucide-react'
import { initializeApp, getApps } from 'firebase/app'
import {
  createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
  signInWithEmailAndPassword, signOut
} from 'firebase/auth'
import {
  addDoc, Bytes, collection, deleteDoc, doc, getDoc, getDocs, limit, onSnapshot,
  orderBy, query, serverTimestamp, setDoc, updateDoc, where
} from 'firebase/firestore'
import { auth, db, firebaseConfig } from './firebase'

const ADMIN_UID = 'Y7hWLggcPsY36p8mfmBqbMligSD3'
const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']
const classNames = (...v) => v.filter(Boolean).join(' ')
const monthKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`
const formatDate = value => {
  if (!value) return '—'
  const date = value?.toDate ? value.toDate() : new Date(value)
  return date.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' })
}
const money = value => `₹${Number(value || 0).toLocaleString('en-IN')}`
const studentEmail = id => `${id.toLowerCase().replace(/[^a-z0-9]/g,'')}@students.theapex.local`
const generateStudentId = () => `APEX${String(Date.now()).slice(-7)}`
const generatePassword = () => `Apex@${Math.floor(1000 + Math.random()*9000)}`

function Toast({ toast, clear }) {
  useEffect(() => { if (toast) { const t=setTimeout(clear,3500); return () => clearTimeout(t) } }, [toast, clear])
  if (!toast) return null
  return <div className={classNames('toast', toast.type==='error' && 'toast-error')}>
    {toast.type==='error' ? <AlertCircle size={19}/> : <CheckCircle2 size={19}/>}<span>{toast.message}</span>
  </div>
}

function Modal({ open, title, children, onClose, wide=false }) {
  if (!open) return null
  return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
    <div className={classNames('modal',wide&&'modal-wide')}>
      <div className="modal-head"><h3>{title}</h3><button className="icon-btn" onClick={onClose}><X size={20}/></button></div>
      {children}
    </div>
  </div>
}

function Login({ onToast }) {
  const [role,setRole]=useState('student')
  const [identifier,setIdentifier]=useState('')
  const [password,setPassword]=useState('')
  const [show,setShow]=useState(false)
  const [loading,setLoading]=useState(false)
  const submit=async e=>{
    e.preventDefault(); setLoading(true)
    try {
      const email=role==='student'?studentEmail(identifier.trim()):identifier.trim()
      const cred=await signInWithEmailAndPassword(auth,email,password)
      if(role==='admin'){
        if(cred.user.uid!==ADMIN_UID){
          await signOut(auth)
          throw new Error('This Firebase account is not authorised as the administrator.')
        }
      }else{
        const profile=await getDoc(doc(db,'students',cred.user.uid))
        if(!profile.exists() || profile.data().status==='suspended'){
          await signOut(auth)
          throw new Error('Student account is unavailable or suspended.')
        }
      }
    } catch(err){ onToast(err.message.replace('Firebase: ',''),'error') }
    finally{ setLoading(false) }
  }
  return <div className="login-page">
    <section className="login-visual">
      <img src="/apex-chemistry.png" alt="The Apex Chemistry tuition"/>
      <div className="visual-shade"/>
      <div className="visual-copy"><span className="eyebrow">THE APEX CHEMISTRY</span><h1>Smart learning.<br/>Clear progress.</h1><p>A dedicated portal for students, batches, notes, class schedules and fee records.</p></div>
    </section>
    <section className="login-panel">
      <div className="login-card">
        <div className="brand-text"><img className="brand-thumb" src="/apex-chemistry.png" alt="The Apex Chemistry"/><div><strong>The Apex Chemistry</strong><small>Academic Portal</small></div></div>
        <h2>Welcome back</h2><p className="muted">Choose your portal and sign in securely.</p>
        <div className="role-tabs"><button className={role==='student'?'active':''} onClick={()=>setRole('student')}><GraduationCap size={18}/> Student</button><button className={role==='admin'?'active':''} onClick={()=>setRole('admin')}><ShieldCheck size={18}/> Admin</button></div>
        <form onSubmit={submit}>
          <label>{role==='student'?'Student ID':'Administrator email'}</label>
          <input required value={identifier} onChange={e=>setIdentifier(e.target.value)} placeholder={role==='student'?'Example: APEX1234567':'admin@example.com'}/>
          <label>Password</label>
          <div className="password-field"><input required type={show?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password"/><button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div>
          <button className="primary full" disabled={loading}>{loading?<><RefreshCw className="spin" size={18}/> Signing in…</>:<>Sign in to {role} portal</>}</button>
        </form>
        <div className="login-note">Student credentials are generated only by the administrator.</div>
      </div>
      <Footer compact/>
    </section>
  </div>
}

function Footer({compact=false}) { return <footer className={compact?'compact-footer':''}>Owned by <strong>The Apex Chemistry</strong>. All rights reserved. Maintained by <a href="https://coffeetocode26official.netlify.app" target="_blank" rel="noreferrer">Coffee To Code</a>.</footer> }

const adminNav=[
  ['dashboard','Dashboard',LayoutDashboard],['students','Students',Users],['batches','Batch Settings',Settings],
  ['notes','Study Notes',BookOpen],['fees','Fee Records',CircleDollarSign],['notifications','Notifications',Bell]
]
const studentNav=[
  ['dashboard','Home',LayoutDashboard],['notes','Study Notes',BookOpen],['fees','My Fees',WalletCards],
  ['notifications','Notifications',Bell],['profile','My Profile',GraduationCap]
]

function Shell({role,profile,active,setActive,onLogout,children,notificationCount=0}) {
  const [mobile,setMobile]=useState(false)
  const nav=role==='admin'?adminNav:studentNav
  return <div className="app-shell">
    <aside className={classNames('sidebar',mobile&&'sidebar-open')}>
      <div className="sidebar-brand"><img className="brand-thumb sidebar-thumb" src="/apex-chemistry.png" alt="The Apex Chemistry"/><div><strong>The Apex</strong><small>Chemistry Portal</small></div><button className="close-mobile" onClick={()=>setMobile(false)}><X/></button></div>
      <nav>{nav.map(([key,label,Icon])=><button key={key} className={active===key?'active':''} onClick={()=>{setActive(key);setMobile(false)}}><Icon size={19}/><span>{label}</span>{key==='notifications'&&notificationCount>0?<b>{notificationCount}</b>:null}</button>)}</nav>
      <div className="sidebar-user"><div className="avatar">{profile?.name?.[0]||'A'}</div><div><strong>{profile?.name||'Account'}</strong><small>{role==='admin'?'Administrator':profile?.studentId}</small></div><button onClick={onLogout}><LogOut size={18}/></button></div>
    </aside>
    <div className="main-area">
      <header className="topbar"><button className="menu-btn" onClick={()=>setMobile(true)}><Menu/></button><div><span className="eyebrow">THE APEX CHEMISTRY</span><h2>{nav.find(n=>n[0]===active)?.[1]}</h2></div><button className="notification-button" onClick={()=>setActive('notifications')}><Bell size={21}/>{notificationCount>0&&<b>{notificationCount}</b>}</button></header>
      <main>{children}</main><Footer/>
    </div>
    {mobile&&<div className="sidebar-overlay" onClick={()=>setMobile(false)}/>} 
  </div>
}

function EmptyState({icon:Icon,title,text,action}) { return <div className="empty-state"><div><Icon size={28}/></div><h3>{title}</h3><p>{text}</p>{action}</div> }
function Stat({icon:Icon,label,value,sub}) { return <div className="stat-card"><div className="stat-icon"><Icon/></div><div><span>{label}</span><strong>{value}</strong><small>{sub}</small></div></div> }

function AdminPortal({profile,onToast,onLogout}) {
  const [active,setActive]=useState('dashboard')
  const [students,setStudents]=useState([]), [batches,setBatches]=useState([]), [notes,setNotes]=useState([]), [fees,setFees]=useState([]), [notifications,setNotifications]=useState([])
  useEffect(()=>{
    const unsubs=[
      onSnapshot(query(collection(db,'students'),orderBy('createdAt','desc')),s=>setStudents(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(query(collection(db,'batches'),orderBy('name')),s=>setBatches(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(query(collection(db,'notes'),orderBy('createdAt','desc')),s=>setNotes(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(query(collection(db,'fees'),orderBy('createdAt','desc')),s=>setFees(s.docs.map(d=>({id:d.id,...d.data()})))),
      onSnapshot(query(collection(db,'notifications'),orderBy('createdAt','desc'),limit(80)),s=>setNotifications(s.docs.map(d=>({id:d.id,...d.data()}))))
    ]; return()=>unsubs.forEach(u=>u())
  },[])
  const body={dashboard:<AdminDashboard students={students} batches={batches} notes={notes} fees={fees} setActive={setActive}/>,students:<StudentsPanel students={students} batches={batches} onToast={onToast}/>,batches:<BatchPanel batches={batches} onToast={onToast}/>,notes:<AdminNotes notes={notes} batches={batches} onToast={onToast}/>,fees:<AdminFees fees={fees} students={students} onToast={onToast}/>,notifications:<AdminNotifications notifications={notifications} students={students}/>}[active]
  return <Shell role="admin" profile={profile} active={active} setActive={setActive} onLogout={onLogout}>{body}</Shell>
}

function AdminDashboard({students,batches,notes,fees,setActive}) {
  const due=fees.filter(f=>f.status!=='paid').length
  return <div className="page-stack"><section className="hero-card"><div><span className="eyebrow">ADMINISTRATION</span><h1>Everything starts empty and stays under your control.</h1><p>Create batches first, register students, upload notes and maintain monthly fee records from one place.</p></div><button className="primary" onClick={()=>setActive('students')}><UserPlus size={18}/> Add student</button></section>
    <div className="stats-grid"><Stat icon={Users} label="Registered students" value={students.length} sub="Across all batches"/><Stat icon={GraduationCap} label="Active batches" value={batches.length} sub="Configured by admin"/><Stat icon={BookOpen} label="Uploaded notes" value={notes.length} sub="Batch-specific resources"/><Stat icon={CircleDollarSign} label="Pending fees" value={due} sub="Monthly records due"/></div>
    <section className="panel"><div className="panel-head"><div><h3>Getting started</h3><p>Recommended setup order</p></div></div><div className="steps-grid">{[['1','Create a batch','Set class, timing, fee and class days.'],['2','Register students','Assign each student to a batch.'],['3','Upload notes','Choose the batch that should receive them.'],['4','Track fees','Send monthly reminders and mark payments.']].map(x=><div className="step" key={x[0]}><b>{x[0]}</b><strong>{x[1]}</strong><p>{x[2]}</p></div>)}</div></section>
  </div>
}

function StudentsPanel({students,batches,onToast}) {
  const [batchFilter,setBatchFilter]=useState('all'),[search,setSearch]=useState(''),[createOpen,setCreateOpen]=useState(false),[credentials,setCredentials]=useState(null)
  const filtered=students.filter(s=>(batchFilter==='all'||s.batchId===batchFilter)&&`${s.name} ${s.studentId}`.toLowerCase().includes(search.toLowerCase()))
  const sendReminder=async student=>{
    try{
      const key=monthKey(), feeId=`${student.id}_${key}`
      await setDoc(doc(db,'fees',feeId),{studentUid:student.id,studentName:student.name,studentId:student.studentId,batchId:student.batchId,month:key,amount:Number(student.monthlyFee||0),status:'due',createdAt:serverTimestamp()},{merge:true})
      await addDoc(collection(db,'notifications'),{studentUid:student.id,title:'Monthly fee reminder',message:`Your fee of ${money(student.monthlyFee)} for ${MONTH_NAMES[new Date().getMonth()]} is due.`,type:'fee',month:key,read:false,createdAt:serverTimestamp()})
      onToast(`Fee reminder sent to ${student.name}.`)
    }catch(e){onToast(e.message,'error')}
  }
  const toggleStatus=async s=>{try{await updateDoc(doc(db,'students',s.id),{status:s.status==='active'?'suspended':'active'});onToast('Student status updated.')}catch(e){onToast(e.message,'error')}}
  const remove=async s=>{if(!confirm(`Delete ${s.name}'s profile? Their Firebase Authentication account must be removed separately from Firebase Console.`))return;try{await deleteDoc(doc(db,'students',s.id));onToast('Student profile removed.')}catch(e){onToast(e.message,'error')}}
  return <div className="page-stack"><div className="toolbar"><div className="search-box"><Search size={18}/><input placeholder="Search student or ID" value={search} onChange={e=>setSearch(e.target.value)}/></div><select value={batchFilter} onChange={e=>setBatchFilter(e.target.value)}><option value="all">All batches</option>{batches.map(b=><option key={b.id} value={b.id}>{b.name}</option>)}</select><button className="primary" onClick={()=>setCreateOpen(true)}><UserPlus size={18}/> Add student</button></div>
    <section className="panel">{filtered.length?<div className="table-wrap"><table><thead><tr><th>Student</th><th>Class</th><th>Batch</th><th>Monthly fee</th><th>Status</th><th>Actions</th></tr></thead><tbody>{filtered.map(s=><tr key={s.id}><td><strong>{s.name}</strong><small>{s.studentId}</small></td><td>{s.className}</td><td>{s.batchName}</td><td>{money(s.monthlyFee)}</td><td><span className={classNames('status',s.status)}>{s.status}</span></td><td><div className="row-actions"><button title="Send fee reminder" onClick={()=>sendReminder(s)}><Send size={17}/></button><button title="Suspend/activate" onClick={()=>toggleStatus(s)}><ShieldCheck size={17}/></button><button className="danger" title="Delete profile" onClick={()=>remove(s)}><Trash2 size={17}/></button></div></td></tr>)}</tbody></table></div>:<EmptyState icon={Users} title="No students found" text={students.length?'No students match this batch or search.':'Create the first student after configuring a batch.'} action={<button className="primary" onClick={()=>setCreateOpen(true)}><Plus size={18}/> Create student</button>}/>}</section>
    <CreateStudent open={createOpen} onClose={()=>setCreateOpen(false)} batches={batches} onCreated={c=>{setCredentials(c);setCreateOpen(false)}} onToast={onToast}/>
    <Modal open={!!credentials} title="Account created successfully" onClose={()=>setCredentials(null)}><div className="success-box"><CheckCircle2 size={44}/><h3>{credentials?.name}'s account is ready</h3><p>Share these credentials privately with the student.</p><div className="credential"><span>Student ID</span><strong>{credentials?.studentId}</strong></div><div className="credential"><span>Password</span><strong>{credentials?.password}</strong></div><button className="primary full" onClick={()=>navigator.clipboard.writeText(`Student ID: ${credentials.studentId}\nPassword: ${credentials.password}`)}>Copy credentials</button></div></Modal>
  </div>
}

function CreateStudent({open,onClose,batches,onCreated,onToast}) {
  const emptyForm={name:'',className:'',batchId:'',monthlyFee:''}
  const emptyBatch={name:'',timing:'',days:[]}
  const [form,setForm]=useState(emptyForm),[busy,setBusy]=useState(false)
  const [batchSearch,setBatchSearch]=useState(''),[createBatch,setCreateBatch]=useState(false),[newBatch,setNewBatch]=useState(emptyBatch)
  const selected=batches.find(b=>b.id===form.batchId)
  const filteredBatches=batches.filter(b=>`${b.name} ${b.className}`.toLowerCase().includes(batchSearch.toLowerCase()))
  useEffect(()=>{if(selected&&!createBatch)setForm(f=>({...f,className:selected.className||'',monthlyFee:selected.monthlyFee||''}))},[form.batchId,createBatch])
  useEffect(()=>{if(!open){setForm(emptyForm);setBatchSearch('');setCreateBatch(false);setNewBatch(emptyBatch)}},[open])
  const toggleDay=i=>setNewBatch(b=>({...b,days:b.days.includes(i)?b.days.filter(x=>x!==i):[...b.days,i]}))
  const submit=async e=>{
    e.preventDefault(); setBusy(true)
    let targetBatch=selected
    try{
      if(createBatch){
        if(!newBatch.name.trim()||!newBatch.timing.trim()||!newBatch.days.length) throw new Error('Enter the new batch name, timing and at least one class day.')
        const created={name:newBatch.name.trim(),className:form.className.trim(),timing:newBatch.timing.trim(),monthlyFee:Number(form.monthlyFee),days:newBatch.days,createdAt:serverTimestamp()}
        const batchRef=await addDoc(collection(db,'batches'),created)
        targetBatch={id:batchRef.id,...created}
      }
      if(!targetBatch) throw new Error('Select an existing batch or create a new batch.')
      const studentId=generateStudentId(), password=generatePassword(), email=studentEmail(studentId)
      const secondary=getApps().find(a=>a.name==='StudentCreator')||initializeApp(firebaseConfig,'StudentCreator')
      const secondaryAuth=getAuth(secondary)
      const cred=await createUserWithEmailAndPassword(secondaryAuth,email,password)
      await setDoc(doc(db,'students',cred.user.uid),{
        name:form.name.trim(),studentId,email,className:form.className.trim(),batchId:targetBatch.id,
        batchName:targetBatch.name,monthlyFee:Number(form.monthlyFee),status:'active',createdAt:serverTimestamp()
      })
      await signOut(secondaryAuth)
      onCreated({name:form.name.trim(),studentId,password})
    }catch(e){onToast(e.message,'error')}finally{setBusy(false)}
  }
  return <Modal open={open} title="Register a new student" onClose={onClose} wide>
    <form className="form-grid" onSubmit={submit}>
      <label className="span-2">Student name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name"/></label>
      {!createBatch?<>
        <label className="span-2">Search batch<input value={batchSearch} onChange={e=>setBatchSearch(e.target.value)} placeholder="Search by batch or class"/></label>
        <label className="span-2">Batch<select required value={form.batchId} onChange={e=>setForm({...form,batchId:e.target.value})}><option value="">Select a batch</option>{filteredBatches.map(b=><option value={b.id} key={b.id}>{b.name} · {b.className}</option>)}</select></label>
        <div className="span-2 inline-choice"><span>Batch not available?</span><button type="button" className="text-btn" onClick={()=>{setCreateBatch(true);setForm(f=>({...f,batchId:''}))}}><Plus size={16}/> Create a new batch here</button></div>
      </>:<>
        <div className="span-2 inline-choice"><strong>Create new batch</strong><button type="button" className="text-btn" onClick={()=>setCreateBatch(false)}>Choose existing batch</button></div>
        <label>Batch name<input required value={newBatch.name} onChange={e=>setNewBatch({...newBatch,name:e.target.value})} placeholder="Example: XII Evening"/></label>
        <label>Batch timing<input required value={newBatch.timing} onChange={e=>setNewBatch({...newBatch,timing:e.target.value})} placeholder="5:00 PM – 6:30 PM"/></label>
        <div className="span-2"><label>Class days</label><div className="day-picker">{DAYS.map((d,i)=><button type="button" className={newBatch.days.includes(i)?'selected':''} onClick={()=>toggleDay(i)} key={d}>{d.slice(0,3)}</button>)}</div></div>
      </>}
      <label>Class<input required value={form.className} onChange={e=>setForm({...form,className:e.target.value})} placeholder="Class 11 or Class 12"/></label>
      <label>Monthly fee<input required type="number" min="0" value={form.monthlyFee} onChange={e=>setForm({...form,monthlyFee:e.target.value})} placeholder="0"/></label>
      <div className="form-actions span-2"><button type="button" className="secondary" onClick={onClose}>Cancel</button><button className="primary" disabled={busy}>{busy?'Creating…':'Create student account'}</button></div>
    </form>
  </Modal>
}

function BatchPanel({batches,onToast}) {
  const [open,setOpen]=useState(false),[editing,setEditing]=useState(null)
  const save=()=>{setEditing(null);setOpen(false)}
  const remove=async b=>{if(!confirm(`Delete batch ${b.name}?`))return;try{await deleteDoc(doc(db,'batches',b.id));onToast('Batch deleted.')}catch(e){onToast(e.message,'error')}}
  return <div className="page-stack"><div className="toolbar end"><button className="primary" onClick={()=>{setEditing(null);setOpen(true)}}><Plus size={18}/> Create batch</button></div><div className="batch-grid">{batches.map(b=><article className="batch-card" key={b.id}><div className="batch-top"><div className="batch-icon"><GraduationCap/></div><div><h3>{b.name}</h3><p>{b.className}</p></div></div><div className="batch-detail"><Clock3 size={17}/><span>Timing</span><strong>{b.timing}</strong></div><div className="batch-detail"><CalendarDays size={17}/><span>Days</span><strong>{(b.days||[]).map(d=>DAYS[d].slice(0,3)).join(', ')||'Not set'}</strong></div><div className="batch-detail"><CircleDollarSign size={17}/><span>Monthly fee</span><strong>{money(b.monthlyFee)}</strong></div><div className="card-actions"><button className="secondary" onClick={()=>{setEditing(b);setOpen(true)}}><Pencil size={16}/> Edit</button><button className="danger-btn" onClick={()=>remove(b)}><Trash2 size={16}/></button></div></article>)}{!batches.length&&<section className="panel full-grid"><EmptyState icon={GraduationCap} title="No batches configured" text="Create a batch with its class, schedule, days and monthly fee." action={<button className="primary" onClick={()=>setOpen(true)}><Plus size={18}/> Create first batch</button>}/></section>}</div><BatchForm open={open} editing={editing} onClose={()=>setOpen(false)} onSaved={save} onToast={onToast}/></div>
}
function BatchForm({open,editing,onClose,onSaved,onToast}) {
  const [form,setForm]=useState({name:'',className:'',timing:'',monthlyFee:'',days:[]})
  useEffect(()=>setForm(editing?{name:editing.name||'',className:editing.className||'',timing:editing.timing||'',monthlyFee:editing.monthlyFee||'',days:editing.days||[]}:{name:'',className:'',timing:'',monthlyFee:'',days:[]}),[editing,open])
  const toggle=d=>setForm({...form,days:form.days.includes(d)?form.days.filter(x=>x!==d):[...form.days,d]})
  const submit=async e=>{e.preventDefault();try{const data={...form,monthlyFee:Number(form.monthlyFee),updatedAt:serverTimestamp()};if(editing)await updateDoc(doc(db,'batches',editing.id),data);else await addDoc(collection(db,'batches'),{...data,createdAt:serverTimestamp()});onToast(editing?'Batch updated.':'Batch created.');onSaved()}catch(e){onToast(e.message,'error')}}
  return <Modal open={open} title={editing?'Edit batch settings':'Create a batch'} onClose={onClose}><form className="form-grid" onSubmit={submit}><label>Batch name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Example: XI Evening"/></label><label>Class<input required value={form.className} onChange={e=>setForm({...form,className:e.target.value})} placeholder="Class 11"/></label><label>Batch timing<input required value={form.timing} onChange={e=>setForm({...form,timing:e.target.value})} placeholder="5:00 PM – 6:30 PM"/></label><label>Monthly fee<input required type="number" min="0" value={form.monthlyFee} onChange={e=>setForm({...form,monthlyFee:e.target.value})}/></label><div className="span-2"><label>Class days</label><div className="day-picker">{DAYS.map((d,i)=><button type="button" className={form.days.includes(i)?'selected':''} onClick={()=>toggle(i)} key={d}>{d.slice(0,3)}</button>)}</div></div><div className="form-actions span-2"><button type="button" className="secondary" onClick={onClose}>Cancel</button><button className="primary">{editing?'Save changes':'Create batch'}</button></div></form></Modal>
}

const MAX_NOTE_BYTES = 750 * 1024
const downloadFirestoreNote = note => {
  try {
    const bytes = note.fileData?.toUint8Array ? note.fileData.toUint8Array() : new Uint8Array(note.fileData || [])
    const blob = new Blob([bytes], { type: note.mimeType || 'application/octet-stream' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = note.fileName || 'note'
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  } catch (error) {
    alert('This note could not be downloaded.')
  }
}

function AdminNotes({notes,batches,onToast}) {
  const [open,setOpen]=useState(false),[uploading,setUploading]=useState(false)
  const upload=async e=>{
    e.preventDefault()
    const fd=new FormData(e.currentTarget),file=fd.get('file'),batchId=fd.get('batchId'),title=fd.get('title'),batch=batches.find(b=>b.id===batchId)
    if(!file?.size)return
    if(file.size>MAX_NOTE_BYTES){onToast('The file is too large. Firestore notes must be 750 KB or smaller.','error');return}
    setUploading(true)
    try{
      const data = Bytes.fromUint8Array(new Uint8Array(await file.arrayBuffer()))
      await addDoc(collection(db,'notes'),{title:title.trim(),batchId,batchName:batch.name,fileName:file.name,mimeType:file.type||'application/octet-stream',fileSize:file.size,fileData:data,createdAt:serverTimestamp()})
      onToast('Note saved in Firestore for the selected batch.')
      setOpen(false)
    }catch(e){onToast(e.message,'error')}finally{setUploading(false)}
  }
  const remove=async n=>{if(confirm('Remove this note from the portal?'))await deleteDoc(doc(db,'notes',n.id))}
  return <div className="page-stack"><div className="toolbar end"><button className="primary" onClick={()=>setOpen(true)} disabled={!batches.length}><Upload size={18}/> Upload notes</button></div><section className="panel">{notes.length?<div className="resource-grid">{notes.map(n=><article className="resource" key={n.id}><div className="file-icon"><FileText/></div><div><strong>{n.title}</strong><span>{n.batchName}</span><small>{n.fileName} · {Math.ceil((n.fileSize||0)/1024)} KB · {formatDate(n.createdAt)}</small></div><div className="resource-actions"><button onClick={()=>downloadFirestoreNote(n)} title="Download"><Download size={17}/></button><button onClick={()=>remove(n)}><Trash2 size={17}/></button></div></article>)}</div>:<EmptyState icon={BookOpen} title="No notes uploaded" text="Notes are stored in Firestore and visible only to students in the selected batch."/>}</section><Modal open={open} title="Upload a small note to Firestore" onClose={()=>setOpen(false)}><form className="form-grid" onSubmit={upload}><label className="span-2">Note title<input name="title" required placeholder="Example: Chemical Bonding Revision"/></label><label className="span-2">Select batch<select name="batchId" required><option value="">Choose batch</option>{batches.map(b=><option value={b.id} key={b.id}>{b.name}</option>)}</select></label><label className="span-2 file-input">Choose file (maximum 750 KB)<input name="file" type="file" required accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.txt"/></label><small className="span-2 muted">Firestore has a 1 MiB document limit, so this portal safely limits each uploaded note to 750 KB.</small><div className="form-actions span-2"><button type="button" className="secondary" onClick={()=>setOpen(false)}>Cancel</button><button className="primary" disabled={uploading}>{uploading?'Saving…':'Save note in Firestore'}</button></div></form></Modal></div>
}

function AdminFees({fees,students,onToast}) {
  const markPaid=async f=>{try{await updateDoc(doc(db,'fees',f.id),{status:'paid',paidAt:serverTimestamp()});await addDoc(collection(db,'notifications'),{studentUid:f.studentUid,title:'Fee payment updated',message:`Your fee record for ${f.month} has been marked as paid.`,type:'fee',read:false,createdAt:serverTimestamp()});onToast('Fee marked as paid.')}catch(e){onToast(e.message,'error')}}
  return <div className="page-stack"><section className="panel"><div className="panel-head"><div><h3>Interactive fee records</h3><p>Records are created when an administrator sends a fee reminder.</p></div></div>{fees.length?<div className="table-wrap"><table><thead><tr><th>Student</th><th>Month</th><th>Amount</th><th>Status</th><th>Paid on</th><th>Action</th></tr></thead><tbody>{fees.map(f=><tr key={f.id}><td><strong>{f.studentName}</strong><small>{f.studentId}</small></td><td>{f.month}</td><td>{money(f.amount)}</td><td><span className={classNames('status',f.status)}>{f.status}</span></td><td>{formatDate(f.paidAt)}</td><td>{f.status!=='paid'?<button className="mini-primary" onClick={()=>markPaid(f)}>Mark paid</button>:<CheckCircle2 size={19}/>}</td></tr>)}</tbody></table></div>:<EmptyState icon={WalletCards} title="No fee records yet" text="Go to Students and send a monthly fee reminder to create the first record."/>}</section></div>
}
function AdminNotifications({notifications,students}) { return <div className="page-stack"><section className="panel">{notifications.length?<div className="notification-list">{notifications.map(n=><article key={n.id}><div className="notification-icon"><Bell/></div><div><strong>{n.title}</strong><p>{n.message}</p><small>{students.find(s=>s.id===n.studentUid)?.name||'Student'} · {formatDate(n.createdAt)}</small></div></article>)}</div>:<EmptyState icon={Bell} title="No notifications sent" text="Fee reminders and account updates will appear here."/>}</section></div> }

function StudentPortal({profile,onLogout,onToast}) {
  const [active,setActive]=useState('dashboard'),[batch,setBatch]=useState(null),[notes,setNotes]=useState([]),[fees,setFees]=useState([]),[notifications,setNotifications]=useState([])
  useEffect(()=>{
    const unsubs=[]
    if(profile.batchId){
      getDoc(doc(db,'batches',profile.batchId)).then(s=>{
        if(s.exists()) setBatch({id:s.id,...s.data()})
      })
      unsubs.push(onSnapshot(
        query(collection(db,'notes'),where('batchId','==',profile.batchId)),
        s=>setNotes(s.docs.map(d=>({id:d.id,...d.data()})))
      ))
    }
    unsubs.push(onSnapshot(
      query(collection(db,'fees'),where('studentUid','==',auth.currentUser.uid)),
      s=>setFees(s.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.month||'').localeCompare(a.month||'')))
    ))
    unsubs.push(onSnapshot(
      query(collection(db,'notifications'),where('studentUid','==',auth.currentUser.uid)),
      s=>setNotifications(s.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.createdAt?.seconds||0)-(a.createdAt?.seconds||0)))
    ))
    return()=>unsubs.forEach(u=>u())
  },[profile.batchId])
  const unread=notifications.filter(n=>!n.read).length
  const body={dashboard:<StudentDashboard profile={profile} batch={batch} notes={notes} fees={fees} notifications={notifications} setActive={setActive}/>,notes:<StudentNotes notes={notes}/>,fees:<StudentFees fees={fees} batch={batch} onToast={onToast}/>,notifications:<StudentNotifications notifications={notifications}/>,profile:<StudentProfile profile={profile} batch={batch}/>} [active]
  return <Shell role="student" profile={profile} active={active} setActive={setActive} onLogout={onLogout} notificationCount={unread}>{body}</Shell>
}

function StudentDashboard({profile,batch,notes,fees,notifications,setActive}) {
  const due=fees.filter(f=>f.status!=='paid').reduce((a,b)=>a+Number(b.amount||0),0)
  return <div className="page-stack"><section className="student-welcome"><div><span className="eyebrow">WELCOME BACK</span><h1>{profile.name}</h1><p>{profile.className} · {profile.batchName}</p></div><div className="student-badge"><GraduationCap/><span>{profile.studentId}</span></div></section><div className="stats-grid"><Stat icon={Clock3} label="Batch timing" value={batch?.timing||'Not set'} sub={(batch?.days||[]).map(d=>DAYS[d].slice(0,3)).join(', ')||'Schedule pending'}/><Stat icon={CircleDollarSign} label="Monthly fee" value={money(batch?.monthlyFee||profile.monthlyFee)} sub={`${money(due)} currently due`}/><Stat icon={BookOpen} label="Study notes" value={notes.length} sub="Available for your batch"/><Stat icon={Bell} label="Notifications" value={notifications.filter(n=>!n.read).length} sub="Unread reminders"/></div><div className="two-column"><ClassCalendar days={batch?.days||[]}/><section className="panel"><div className="panel-head"><div><h3>Latest notifications</h3><p>Updates from the administrator</p></div><button className="text-btn" onClick={()=>setActive('notifications')}>View all</button></div>{notifications.length?<div className="notification-list compact">{notifications.slice(0,4).map(n=><article key={n.id}><div className="notification-icon"><Bell/></div><div><strong>{n.title}</strong><p>{n.message}</p><small>{formatDate(n.createdAt)}</small></div></article>)}</div>:<EmptyState icon={Bell} title="No notifications" text="Admin reminders will appear here."/>}</section></div></div>
}
function ClassCalendar({days}) {
  const now=new Date(), year=now.getFullYear(),month=now.getMonth(),first=new Date(year,month,1).getDay(),count=new Date(year,month+1,0).getDate(),cells=[]
  for(let i=0;i<first;i++)cells.push(null);for(let i=1;i<=count;i++)cells.push(i)
  return <section className="panel calendar-panel"><div className="panel-head"><div><h3>Class calendar</h3><p>{MONTH_NAMES[month]} {year}</p></div><CalendarDays/></div><div className="calendar-week">{DAYS.map(d=><span key={d}>{d[0]}</span>)}</div><div className="calendar-grid">{cells.map((d,i)=>{const weekday=d?new Date(year,month,d).getDay():null;return <div key={i} className={classNames(d&&days.includes(weekday)&&'class-day',d===now.getDate()&&'today')}>{d||''}{d&&days.includes(weekday)&&<small>Class</small>}</div>})}</div><div className="calendar-legend"><span/><p>Highlighted dates are scheduled class days.</p></div></section>
}
function StudentNotes({notes}) { return <div className="page-stack"><section className="panel">{notes.length?<div className="resource-grid">{notes.map(n=><article className="resource" key={n.id}><div className="file-icon"><FileText/></div><div><strong>{n.title}</strong><span>{n.batchName}</span><small>{n.fileName} · {Math.ceil((n.fileSize||0)/1024)} KB · {formatDate(n.createdAt)}</small></div><button className="download-btn" onClick={()=>downloadFirestoreNote(n)} title="Download"><Download size={18}/></button></article>)}</div>:<EmptyState icon={BookOpen} title="No notes available" text="Your administrator has not uploaded notes for this batch yet."/>}</section></div> }
function StudentFees({fees,batch,onToast}) { const total=fees.reduce((a,b)=>a+Number(b.amount||0),0),paid=fees.filter(f=>f.status==='paid').reduce((a,b)=>a+Number(b.amount||0),0);return <div className="page-stack"><div className="stats-grid three"><Stat icon={CircleDollarSign} label="Monthly batch fee" value={money(batch?.monthlyFee)} sub="Configured by administrator"/><Stat icon={CheckCircle2} label="Total paid" value={money(paid)} sub="Recorded payments"/><Stat icon={AlertCircle} label="Outstanding" value={money(total-paid)} sub="Pending fee amount"/></div><section className="panel"><div className="panel-head"><div><h3>Fee tracking</h3><p>Your monthly payment history</p></div><button className="primary" onClick={()=>onToast('Online payment gateway is currently under maintenance.','error')}><WalletCards size={18}/> Pay fees</button></div>{fees.length?<div className="fee-cards">{fees.map(f=><article key={f.id}><div><span>{f.month}</span><strong>{money(f.amount)}</strong></div><span className={classNames('status',f.status)}>{f.status}</span><small>{f.status==='paid'?`Paid ${formatDate(f.paidAt)}`:'Payment due'}</small></article>)}</div>:<EmptyState icon={WalletCards} title="No fee records" text="Your monthly fee records will appear after the administrator creates them."/>}</section></div> }
function StudentNotifications({notifications}) { useEffect(()=>{notifications.filter(n=>!n.read).forEach(n=>updateDoc(doc(db,'notifications',n.id),{read:true}).catch(()=>{}))},[notifications]);return <div className="page-stack"><section className="panel">{notifications.length?<div className="notification-list">{notifications.map(n=><article key={n.id}><div className="notification-icon"><Bell/></div><div><strong>{n.title}</strong><p>{n.message}</p><small>{formatDate(n.createdAt)}</small></div></article>)}</div>:<EmptyState icon={Bell} title="No notifications" text="Important class and fee reminders will appear here."/>}</section></div> }
function StudentProfile({profile,batch}) { return <div className="page-stack"><section className="panel profile-card"><div className="large-avatar">{profile.name?.[0]}</div><div><h2>{profile.name}</h2><p>{profile.studentId}</p></div><div className="profile-grid"><div><span>Class</span><strong>{profile.className}</strong></div><div><span>Batch</span><strong>{profile.batchName}</strong></div><div><span>Timing</span><strong>{batch?.timing||'Not set'}</strong></div><div><span>Class days</span><strong>{(batch?.days||[]).map(d=>DAYS[d]).join(', ')||'Not set'}</strong></div><div><span>Monthly fee</span><strong>{money(batch?.monthlyFee||profile.monthlyFee)}</strong></div><div><span>Account status</span><strong className="capitalize">{profile.status}</strong></div></div></section></div> }

export default function App(){
  const [user,setUser]=useState(null),[role,setRole]=useState(null),[profile,setProfile]=useState(null),[loading,setLoading]=useState(true),[toast,setToast]=useState(null)
  const notify=(message,type='success')=>setToast({message,type})
  useEffect(()=>onAuthStateChanged(auth,async u=>{setLoading(true);if(!u){setUser(null);setRole(null);setProfile(null);setLoading(false);return}try{if(u.uid===ADMIN_UID){setRole('admin');setProfile({id:u.uid,name:'Apex Administrator',role:'admin'})}else{const studentSnap=await getDoc(doc(db,'students',u.uid));if(studentSnap.exists()&&studentSnap.data().status!=='suspended'){setRole('student');setProfile({id:u.uid,...studentSnap.data()})}else{await signOut(auth);notify('No active portal profile was found for this account.','error');setUser(null);return}}setUser(u)}catch(e){notify(e.message,'error')}finally{setLoading(false)}}),[])
  if(loading)return <div className="loading-screen"><div className="loader-logo"><GraduationCap/></div><strong>Loading The Apex Chemistry…</strong></div>
  return <><Toast toast={toast} clear={()=>setToast(null)}/>{!user?<Login onToast={notify}/>:role==='admin'?<AdminPortal profile={profile} onToast={notify} onLogout={()=>signOut(auth)}/>:<StudentPortal profile={profile} onToast={notify} onLogout={()=>signOut(auth)}/>}</>
}
