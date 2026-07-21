import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Brand } from '../components/Brand'
import { Button, Input } from '../components/UI'
import { supabase, supabaseReady } from '../lib/supabase'

export default function Login({session,profile}){
  const [params]=useSearchParams(); const nav=useNavigate()
  const [role,setRole]=useState(params.get('role')==='admin'?'admin':'student')
  const [identifier,setIdentifier]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState(''); const [busy,setBusy]=useState(false)
  useEffect(()=>{if(session&&profile)nav(profile.role==='admin'?'/admin':'/student')},[session,profile])
  async function submit(e){
    e.preventDefault();setBusy(true);setError('')
    try{
      if(!supabaseReady)throw new Error('Supabase browser variables are missing.')
      if(role==='admin'){
        const {error:e}=await supabase.auth.signInWithPassword({email:identifier.trim(),password}); if(e)throw e
      }else{
        const r=await fetch('/api/student-login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({studentId:identifier.trim().toUpperCase(),password})})
        const data=await r.json(); if(!r.ok)throw new Error(data.error||'Login failed')
        const {error:e}=await supabase.auth.setSession({access_token:data.access_token,refresh_token:data.refresh_token}); if(e)throw e
      }
    }catch(e){setError(e.message)}finally{setBusy(false)}
  }
  return <div className="login-page"><div className="login-brand"><Brand/><div><span>Your Success, Our Passion</span><h1>{role==='admin'?'Administrator Console':'Student Learning Portal'}</h1><p>Secure access to The Apex Chemistry dashboard.</p></div></div><form onSubmit={submit} className="login-card"><div className="role-tabs"><button type="button" className={role==='student'?'active':''} onClick={()=>setRole('student')}>Student Login</button><button type="button" className={role==='admin'?'active':''} onClick={()=>setRole('admin')}>Admin Login</button></div><h2>Welcome back</h2><p>{role==='student'?'Use the Student ID provided by your administrator.':'Use your administrator email and password.'}</p><Input label={role==='student'?'Student ID':'Admin Email'} type={role==='student'?'text':'email'} value={identifier} onChange={e=>setIdentifier(e.target.value)} required/><Input label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>{error&&<div className="error-box">{error}</div>}<Button disabled={busy}>{busy?'Signing in…':'Login'}</Button><button type="button" className="text-link" onClick={()=>nav('/')}>Return to website</button></form></div>
}
