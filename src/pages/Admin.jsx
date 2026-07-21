import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { collection, addDoc, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore'
import { BarChart3, Bell, BookOpen, GraduationCap, IndianRupee, Layers3, MessageCircleQuestion, Plus, Share2, Trash2, Upload } from 'lucide-react'
import Layout from '../components/Layout'
import { Badge, Button, Card, Empty, Input, Modal, Select } from '../components/Ui'
import { db } from '../lib/firebase'
import { api } from '../lib/api'

const nav=[
  {to:'/admin',label:'Overview',icon:BarChart3},{to:'/admin/students',label:'Students',icon:GraduationCap},{to:'/admin/batches',label:'Batches',icon:Layers3},{to:'/admin/fees',label:'Fees',icon:IndianRupee},{to:'/admin/notes',label:'Notes',icon:BookOpen},{to:'/admin/notifications',label:'Notifications',icon:Bell},{to:'/admin/doubts',label:'Doubts',icon:MessageCircleQuestion},
]

function useCollection(name, sortField='createdAt'){
  const [items,setItems]=useState([]); const [loading,setLoading]=useState(true)
  useEffect(()=>{const q=query(collection(db,name),orderBy(sortField,'desc'));return onSnapshot(q,s=>{setItems(s.docs.map(d=>({id:d.id,...d.data()})));setLoading(false)},()=>setLoading(false))},[name,sortField]); return [items,loading]
}

export default function Admin({user}){
  const location=useLocation(); const [mobileOpen,setMobileOpen]=useState(false)
  const title=nav.find(n=>n.to===location.pathname)?.label || 'Administration'
  return <Layout portal="admin" title={title} nav={nav} user={user} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}><Routes><Route index element={<Overview/>}/><Route path="students" element={<Students/>}/><Route path="batches" element={<Batches/>}/><Route path="fees" element={<Fees/>}/><Route path="notes" element={<Notes/>}/><Route path="notifications" element={<Notifications/>}/><Route path="doubts" element={<Doubts/>}/></Routes></Layout>
}

function Overview(){
  const [students]=useCollection('students'); const [fees]=useCollection('fees'); const [notes]=useCollection('notes'); const [doubts]=useCollection('doubts')
  const due=fees.filter(f=>f.status!=='paid').reduce((a,f)=>a+Number(f.amount||0),0)
  return <><div className="hero-card"><div><span>ADMINISTRATION PORTAL</span><h2>Welcome back.</h2><p>Manage students, learning materials and fee records from one dashboard.</p></div><img src="/icon-192.png"/></div><div className="stats-grid"><Stat label="Active students" value={students.length}/><Stat label="Notes published" value={notes.length}/><Stat label="Open doubts" value={doubts.filter(d=>d.status!=='resolved').length}/><Stat label="Outstanding fees" value={`₹${due.toLocaleString('en-IN')}`}/></div><Card><h3>Quick start</h3><div className="checklist"><p><b>1.</b> Create batches and students.</p><p><b>2.</b> Publish notes and announcements.</p><p><b>3.</b> Record monthly fees and answer doubts.</p></div></Card></>
}
function Stat({label,value}){return <Card className="stat"><span>{label}</span><strong>{value}</strong></Card>}

function Students(){
  const [items]=useCollection('students'); const [open,setOpen]=useState(false); const [busy,setBusy]=useState(false); const [result,setResult]=useState(null); const [shareStatus,setShareStatus]=useState(''); const [form,setForm]=useState({name:'',phone:'',classLevel:'11',course:'JEE',batch:'',monthlyFee:'1500'})
  async function create(e){e.preventDefault();setBusy(true);setShareStatus('');try{const data=await api('/api/admin/create-student',{method:'POST',body:JSON.stringify(form)});setResult({...data,name:form.name,course:form.course});setOpen(false);setForm({name:'',phone:'',classLevel:'11',course:'JEE',batch:'',monthlyFee:'1500'})}catch(e){alert(e.message)}finally{setBusy(false)}}
  async function shareCredentials(){
    if(!result)return
    const website=window.location.origin
    const message=`Welcome to The Apex Chemistry!\n\nStudent: ${result.name}\nCourse: ${result.course}\nStudent ID: ${result.studentId}\nPassword: ${result.password}\nLogin: ${website}\n\nPlease keep these credentials private and change your password when instructed.`
    try{
      if(navigator.share){await navigator.share({title:'The Apex Chemistry login credentials',text:message})}
      else{await navigator.clipboard.writeText(message);setShareStatus('Full login message copied. You can paste it into WhatsApp, SMS, email or any other app.')}
    }catch(e){if(e.name!=='AbortError'){await navigator.clipboard.writeText(message);setShareStatus('Full login message copied to clipboard.')}}
  }
  async function copyCredentials(){if(!result)return;const message=`The Apex Chemistry\nLogin: ${window.location.origin}\nStudent ID: ${result.studentId}\nPassword: ${result.password}`;await navigator.clipboard.writeText(message);setShareStatus('Website link and credentials copied.')}
  async function remove(id){if(!confirm('Delete this student account and records?'))return;try{await api('/api/admin/delete-student',{method:'POST',body:JSON.stringify({uid:id})})}catch(e){alert(e.message)}}
  return <><div className="page-actions"><p>Create student accounts and share their credentials securely.</p><Button onClick={()=>setOpen(true)}><Plus size={17}/> Add student</Button></div>{result&&<div className="credential-card"><b>Student account created</b><span>Student: <strong>{result.name}</strong></span><span>Course: <strong>{result.course}</strong></span><span>Student ID: <code>{result.studentId}</code></span><span>Temporary password: <code>{result.password}</code></span><div className="credential-actions"><Button onClick={shareCredentials}><Share2 size={16}/> Share credentials</Button><button type="button" onClick={copyCredentials}>Copy login message</button></div>{shareStatus&&<small>{shareStatus}</small>}<small>For security, this password is shown only after account creation. Share it now and do not store it in Firestore.</small></div>}<Card><div className="table-wrap"><table><thead><tr><th>Name</th><th>Student ID</th><th>Class</th><th>Course</th><th>Batch</th><th>Monthly fee</th><th></th></tr></thead><tbody>{items.map(s=><tr key={s.id}><td><b>{s.name}</b><small>{s.phone}</small></td><td>{s.studentId}</td><td>{s.classLevel}</td><td>{s.course||'—'}</td><td>{s.batch||'—'}</td><td>₹{Number(s.monthlyFee||0).toLocaleString('en-IN')}</td><td><button className="danger-icon" onClick={()=>remove(s.id)}><Trash2 size={17}/></button></td></tr>)}</tbody></table>{!items.length&&<Empty>No students have been added.</Empty>}</div></Card>{open&&<Modal title="Create student" onClose={()=>setOpen(false)}><form onSubmit={create} className="form-grid"><Input label="Full name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><Input label="Phone number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/><Select label="Class" value={form.classLevel} onChange={e=>setForm({...form,classLevel:e.target.value})}><option>11</option><option>12</option><option>Dropper</option></Select><Select label="Course" value={form.course} onChange={e=>setForm({...form,course:e.target.value})}><option value="JEE">JEE</option><option value="NEET">NEET</option><option value="Boards">Boards</option></Select><Input label="Batch" value={form.batch} onChange={e=>setForm({...form,batch:e.target.value})}/><Input label="Monthly fee (₹)" type="number" min="0" value={form.monthlyFee} onChange={e=>setForm({...form,monthlyFee:e.target.value})}/><Button busy={busy} type="submit">Create account</Button></form></Modal>}</>
}

function Batches(){
  const [items]=useCollection('batches'); const [name,setName]=useState(''); const [schedule,setSchedule]=useState('')
  async function add(e){e.preventDefault();await addDoc(collection(db,'batches'),{name,schedule,createdAt:serverTimestamp()});setName('');setSchedule('')}
  return <div className="two-col"><Card><h3>Add batch</h3><form onSubmit={add}><Input label="Batch name" value={name} onChange={e=>setName(e.target.value)} required/><Input label="Schedule" value={schedule} onChange={e=>setSchedule(e.target.value)} placeholder="Mon, Wed, Fri • 5:00 PM"/><Button type="submit">Create batch</Button></form></Card><Card><h3>Existing batches</h3><div className="list">{items.map(b=><div className="list-row" key={b.id}><div><b>{b.name}</b><small>{b.schedule||'Schedule not set'}</small></div><button className="danger-icon" onClick={()=>deleteDoc(doc(db,'batches',b.id))}><Trash2 size={17}/></button></div>)}{!items.length&&<Empty>No batches created.</Empty>}</div></Card></div>
}

function Fees(){
  const [fees]=useCollection('fees'); const [students]=useCollection('students'); const [form,setForm]=useState({studentUid:'',amount:'',month:new Date().toISOString().slice(0,7),status:'due'})
  const studentMap=useMemo(()=>Object.fromEntries(students.map(s=>[s.id,s])),[students])
  async function add(e){e.preventDefault();const s=studentMap[form.studentUid];await addDoc(collection(db,'fees'),{...form,amount:Number(form.amount),studentName:s?.name||'',createdAt:serverTimestamp()});setForm({...form,studentUid:'',amount:''})}
  async function toggle(f){await updateDoc(doc(db,'fees',f.id),{status:f.status==='paid'?'due':'paid',paidAt:f.status==='paid'?null:serverTimestamp()})}
  return <><Card><h3>Add fee record</h3><form onSubmit={add} className="inline-form"><Select label="Student" required value={form.studentUid} onChange={e=>setForm({...form,studentUid:e.target.value})}><option value="">Select student</option>{students.map(s=><option key={s.id} value={s.id}>{s.name} ({s.studentId})</option>)}</Select><Input label="Amount" type="number" required value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})}/><Input label="Month" type="month" required value={form.month} onChange={e=>setForm({...form,month:e.target.value})}/><Button type="submit">Add record</Button></form></Card><Card><div className="table-wrap"><table><thead><tr><th>Student</th><th>Month</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>{fees.map(f=><tr key={f.id}><td>{f.studentName||studentMap[f.studentUid]?.name||'Student'}</td><td>{f.month}</td><td>₹{Number(f.amount||0).toLocaleString('en-IN')}</td><td><Badge tone={f.status==='paid'?'success':'warning'}>{f.status}</Badge></td><td><Button variant="ghost" onClick={()=>toggle(f)}>Mark {f.status==='paid'?'due':'paid'}</Button></td></tr>)}</tbody></table>{!fees.length&&<Empty>No fee records.</Empty>}</div></Card></>
}

function Notes(){
  const [items]=useCollection('notes'); const [students]=useCollection('students'); const [file,setFile]=useState(null); const [title,setTitle]=useState(''); const [audience,setAudience]=useState('all'); const [busy,setBusy]=useState(false)
  async function upload(e){e.preventDefault();if(!file)return;setBusy(true);try{const signed=await api('/api/storage/sign-upload',{method:'POST',body:JSON.stringify({fileName:file.name,contentType:file.type||'application/pdf'})});const res=await fetch(`${signed.supabaseUrl}/storage/v1/object/upload/sign/${signed.path}?token=${encodeURIComponent(signed.token)}`,{method:'PUT',headers:{apikey:signed.publishableKey,'Content-Type':file.type||'application/pdf'},body:file});if(!res.ok)throw new Error('File upload failed');await addDoc(collection(db,'notes'),{title,fileName:file.name,path:signed.path,audience,createdAt:serverTimestamp()});setTitle('');setFile(null)}catch(e){alert(e.message)}finally{setBusy(false)}}
  async function remove(n){if(!confirm('Delete this note?'))return;await api('/api/storage/delete',{method:'POST',body:JSON.stringify({path:n.path})});await deleteDoc(doc(db,'notes',n.id))}
  return <><Card><h3>Publish PDF note</h3><form onSubmit={upload} className="inline-form"><Input label="Title" required value={title} onChange={e=>setTitle(e.target.value)}/><Select label="Audience" value={audience} onChange={e=>setAudience(e.target.value)}><option value="all">All students</option><option value="11">Class 11</option><option value="12">Class 12</option>{students.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</Select><label className="file-field"><span>PDF file</span><input type="file" accept="application/pdf" required onChange={e=>setFile(e.target.files?.[0]||null)}/></label><Button busy={busy} type="submit"><Upload size={17}/> Upload</Button></form></Card><Card><div className="list">{items.map(n=><div className="list-row" key={n.id}><div><b>{n.title}</b><small>{n.fileName} • {n.audience==='all'?'All students':n.audience}</small></div><button className="danger-icon" onClick={()=>remove(n)}><Trash2 size={17}/></button></div>)}{!items.length&&<Empty>No notes published.</Empty>}</div></Card></>
}

function Notifications(){
  const [items]=useCollection('notifications'); const [title,setTitle]=useState(''); const [message,setMessage]=useState(''); const [audience,setAudience]=useState('all')
  async function send(e){e.preventDefault();await addDoc(collection(db,'notifications'),{title,message,audience,createdAt:serverTimestamp()});setTitle('');setMessage('')}
  return <div className="two-col"><Card><h3>New announcement</h3><form onSubmit={send}><Input label="Title" value={title} onChange={e=>setTitle(e.target.value)} required/><label className="field"><span>Message</span><textarea value={message} onChange={e=>setMessage(e.target.value)} required rows="5"/></label><Select label="Audience" value={audience} onChange={e=>setAudience(e.target.value)}><option value="all">All students</option><option value="11">Class 11</option><option value="12">Class 12</option></Select><Button type="submit">Publish</Button></form></Card><Card><h3>Recent announcements</h3><div className="list">{items.map(n=><div className="notice" key={n.id}><b>{n.title}</b><p>{n.message}</p><small>Audience: {n.audience}</small></div>)}{!items.length&&<Empty>No announcements.</Empty>}</div></Card></div>
}

function Doubts(){
  const [items]=useCollection('doubts'); const [reply,setReply]=useState({})
  async function answer(d){await updateDoc(doc(db,'doubts',d.id),{answer:reply[d.id]||'',status:'resolved',answeredAt:serverTimestamp()})}
  return <div className="doubt-grid">{items.map(d=><Card key={d.id}><div className="row-between"><div><b>{d.studentName||'Student'}</b><small>{d.subject||'Chemistry'}</small></div><Badge tone={d.status==='resolved'?'success':'warning'}>{d.status||'open'}</Badge></div><p className="question">{d.question}</p>{d.imageUrl&&<img className="doubt-image" src={d.imageUrl}/>}<label className="field"><span>Your response</span><textarea rows="4" value={reply[d.id]??d.answer??''} onChange={e=>setReply({...reply,[d.id]:e.target.value})}/></label><Button onClick={()=>answer(d)}>Save response</Button></Card>)}{!items.length&&<Empty>No student doubts.</Empty>}</div>
}
