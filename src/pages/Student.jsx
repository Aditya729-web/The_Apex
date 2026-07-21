import { useEffect, useState } from 'react'
import { LayoutDashboard, User, IndianRupee, FileText, MessageCircleQuestion, Bell, CalendarDays, Download, Send } from 'lucide-react'
import { PortalLayout } from '../components/Layout'
import { Badge, Button, Card, Empty, Input, Select } from '../components/UI'
import { supabase } from '../lib/supabase'

const navItems=[{key:'dashboard',label:'Dashboard',icon:LayoutDashboard},{key:'profile',label:'My Profile',icon:User},{key:'fees',label:'Fees',icon:IndianRupee},{key:'notes',label:'Notes',icon:FileText},{key:'doubts',label:'Doubts',icon:MessageCircleQuestion},{key:'notifications',label:'Notifications',icon:Bell},{key:'calendar',label:'Calendar',icon:CalendarDays}]

export default function Student({profile,logout}){
  const [active,setActive]=useState('dashboard')
  const [student,setStudent]=useState(null),[fees,setFees]=useState([]),[notes,setNotes]=useState([]),[doubts,setDoubts]=useState([]),[notifications,setNotifications]=useState([]),[error,setError]=useState('')
  const [question,setQuestion]=useState(''),[subject,setSubject]=useState('Physical Chemistry')
  useEffect(()=>{load()},[])
  async function load(){
    const [s,f,n,d,a]=await Promise.all([
      supabase.from('students').select('*').eq('user_id',profile.id).maybeSingle(),
      supabase.from('fees').select('*').eq('student_user_id',profile.id).order('created_at',{ascending:false}),
      supabase.from('notes').select('*').order('created_at',{ascending:false}),
      supabase.from('doubts').select('*').eq('student_user_id',profile.id).order('created_at',{ascending:false}),
      supabase.from('notifications').select('*').order('created_at',{ascending:false})
    ])
    setStudent(s.data);setFees(f.data||[]);setNotes(n.data||[]);setDoubts(d.data||[]);setNotifications(a.data||[])
  }
  const paid=fees.filter(f=>f.status==='paid').reduce((s,f)=>s+Number(f.amount||0),0)
  const due=fees.filter(f=>f.status!=='paid').reduce((s,f)=>s+Number(f.amount||0),0)
  async function ask(e){e.preventDefault();const {error}=await supabase.from('doubts').insert({student_user_id:profile.id,student_id:student.student_id,question,subject,status:'pending'});if(error)setError(error.message);else{setQuestion('');load()}}
  async function download(note){const {data,error}=await supabase.storage.from('apex-chemistry-files').createSignedUrl(note.file_path,120);if(error)return setError(error.message);window.open(data.signedUrl,'_blank','noopener,noreferrer')}
  return <PortalLayout mode="student" items={navItems} active={active} onSelect={setActive} onLogout={logout} userName={profile.full_name}>
    {error&&<div className="error-box">{error}</div>}
    {active==='dashboard'&&<><div className="page-title"><div><h1>Welcome back, {student?.full_name||profile.full_name} 👋</h1><p>Keep learning and growing.</p></div><Card className="batch-mini"><span>Current Batch</span><b>{student?.course||'—'} • Class {student?.class_level||'—'}</b></Card></div><div className="stats"><Card className="stat-card"><div><span>Total Fees</span><strong>₹ {(paid+due).toLocaleString('en-IN')}</strong></div></Card><Card className="stat-card"><div><span>Paid Fees</span><strong>₹ {paid.toLocaleString('en-IN')}</strong></div></Card><Card className="stat-card"><div><span>Due Fees</span><strong>₹ {due.toLocaleString('en-IN')}</strong></div></Card><Card className="stat-card"><div><span>Doubts Asked</span><strong>{doubts.length}</strong></div></Card></div><div className="dashboard-grid"><Card><h3>Recent Notifications</h3>{notifications.slice(0,4).map(n=><div className="notice-row" key={n.id}><Bell size={18}/><span><b>{n.title}</b><small>{n.message}</small></span></div>)}</Card><Card><h3>Quick Access</h3><div className="quick-grid"><button onClick={()=>setActive('notes')}><FileText/>Notes</button><button onClick={()=>setActive('doubts')}><MessageCircleQuestion/>Doubts</button><button onClick={()=>setActive('fees')}><IndianRupee/>Fees</button><button onClick={()=>setActive('profile')}><User/>Profile</button></div></Card></div></>}
    {active==='profile'&&<Card><h2>My Profile</h2><div className="profile-grid"><div><span>Name</span><b>{student?.full_name}</b></div><div><span>Student ID</span><b>{student?.student_id}</b></div><div><span>Course</span><b>{student?.course}</b></div><div><span>Class</span><b>{student?.class_level}</b></div><div><span>Phone</span><b>{student?.phone||'—'}</b></div></div></Card>}
    {active==='fees'&&<><div className="page-title"><div><h1>My Fees</h1><p>Your complete payment history.</p></div></div><Card><div className="table"><div className="tr th"><span>Month</span><span>Amount</span><span>Status</span><span>Date</span><span></span></div>{fees.map(f=><div className="tr" key={f.id}><span>{f.month}</span><span>₹ {Number(f.amount).toLocaleString('en-IN')}</span><span><Badge tone={f.status==='paid'?'green':'orange'}>{f.status}</Badge></span><span>{new Date(f.created_at).toLocaleDateString()}</span><span></span></div>)}</div></Card></>}
    {active==='notes'&&<><div className="page-title"><div><h1>Notes</h1><p>Download your study materials.</p></div></div><div className="cards-grid">{notes.length?notes.map(n=><Card key={n.id}><Badge>{n.course}</Badge><h3>{n.title}</h3><p>{n.subject} • Class {n.class_level}</p><Button variant="outline" onClick={()=>download(n)}><Download size={16}/>Download</Button></Card>):<Empty/>}</div></>}
    {active==='doubts'&&<><div className="page-title"><div><h1>Doubts</h1><p>Ask and track your questions.</p></div></div><Card><form className="form-grid" onSubmit={ask}><Select label="Subject" value={subject} onChange={e=>setSubject(e.target.value)}><option>Physical Chemistry</option><option>Organic Chemistry</option><option>Inorganic Chemistry</option></Select><Input label="Question" value={question} onChange={e=>setQuestion(e.target.value)} required/><Button><Send size={16}/>Ask Doubt</Button></form></Card><div className="cards-grid">{doubts.map(d=><Card key={d.id}><Badge tone={d.status==='answered'?'green':'orange'}>{d.status}</Badge><h3>{d.question}</h3><p>{d.subject}</p>{d.answer&&<div className="answer">{d.answer}</div>}</Card>)}</div></>}
    {active==='notifications'&&<><div className="page-title"><div><h1>Notifications</h1><p>Never miss an update.</p></div></div><div className="cards-grid">{notifications.map(n=><Card key={n.id}><Bell/><h3>{n.title}</h3><p>{n.message}</p></Card>)}</div></>}
    {active==='calendar'&&<Card><h2>Academic Calendar</h2><p>Tests and important dates published by the administrator will appear here.</p></Card>}
  </PortalLayout>
}
