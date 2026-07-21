import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, firebaseEnvError } from '../lib/firebase'
import { Button, Input } from '../components/ui'

const studentEmail = (id) => `${id.trim().toLowerCase().replace(/[^a-z0-9]/g,'')}@students.theapexchemistry.local`

export default function Login() {
  const [mode,setMode]=useState('student'); const [identifier,setIdentifier]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [busy,setBusy]=useState(false)
  async function submit(e){e.preventDefault();setError('');setBusy(true);try{if(firebaseEnvError)throw new Error(firebaseEnvError);const email=mode==='student'?studentEmail(identifier):identifier.trim();await signInWithEmailAndPassword(auth,email,password)}catch(err){setError(err.message.replace('Firebase: ','').replace(/\(auth\/[\w-]+\)\.?/g,''))}finally{setBusy(false)}}
  return <div className="login-page"><div className="login-visual"><img src="/apex-chemistry.png" alt="The Apex Chemistry"/><div className="visual-overlay"><span>CLASS 11–12 • JEE • NEET • BOARDS</span><h1>Learn chemistry with clarity and confidence.</h1><p>Notes, fees, announcements, tests and doubt support—together in one secure portal.</p></div></div><div className="login-panel"><div className="login-box"><img className="login-icon" src="/icon-192.png"/><p className="eyebrow">Welcome to</p><h2>The Apex Chemistry</h2><p className="muted">Sign in to continue to your portal.</p><div className="segmented"><button className={mode==='student'?'selected':''} onClick={()=>setMode('student')}>Student</button><button className={mode==='admin'?'selected':''} onClick={()=>setMode('admin')}>Administrator</button></div><form onSubmit={submit}><Input label={mode==='student'?'Student ID':'Admin email'} value={identifier} onChange={e=>setIdentifier(e.target.value)} required autoComplete="username"/><Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required autoComplete="current-password"/>{error&&<div className="alert error">{error}</div>}<Button busy={busy} type="submit">Sign in</Button></form><small className="help">Students receive their Student ID and temporary password from the administrator.</small></div></div></div>
}
