import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { supabase, supabaseReady } from './lib/supabase'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Student from './pages/Student'

function Protected({ role, session, profile, children }) {
  if (!session) return <Navigate to="/login" replace/>
  if (!profile) return <div className="center-screen">Loading portal…</div>
  if (profile.role !== role) return <Navigate to={profile.role==='admin'?'/admin':'/student'} replace/>
  return children
}

export default function App(){
  const [session,setSession]=useState(null)
  const [profile,setProfile]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    if(!supabaseReady){setLoading(false);return}
    supabase.auth.getSession().then(({data})=>{setSession(data.session);loadProfile(data.session?.user?.id)})
    const {data:{subscription}}=supabase.auth.onAuthStateChange((_e,s)=>{setSession(s);loadProfile(s?.user?.id)})
    return()=>subscription.unsubscribe()
  },[])
  async function loadProfile(uid){
    if(!uid){setProfile(null);setLoading(false);return}
    const {data}=await supabase.from('profiles').select('*').eq('id',uid).maybeSingle()
    setProfile(data||null);setLoading(false)
  }
  async function logout(){await supabase?.auth.signOut();setProfile(null)}
  if(loading)return <div className="center-screen">Loading The Apex Chemistry…</div>
  return <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login session={session} profile={profile}/>}/>
    <Route path="/admin" element={<Protected role="admin" session={session} profile={profile}><Admin profile={profile} logout={logout}/></Protected>}/>
    <Route path="/student" element={<Protected role="student" session={session} profile={profile}><Student profile={profile} logout={logout}/></Protected>}/>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>
}
