import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Student from './pages/Student'
import { auth, db, firebaseEnvError, ADMIN_UID } from './lib/firebase'

export default function App(){
  const [user,setUser]=useState(undefined); const [profile,setProfile]=useState(null)
  useEffect(()=>{if(!auth){setUser(null);return}return onAuthStateChanged(auth,setUser)},[])
  useEffect(()=>{if(!user||!db){setProfile(null);return}if(user.uid===ADMIN_UID){setProfile({role:'admin'});return}return onSnapshot(doc(db,'students',user.uid),s=>setProfile(s.exists()?s.data():null),()=>setProfile(null))},[user])
  if(firebaseEnvError)return <div className="fatal"><img src="/icon-192.png"/><h1>Configuration required</h1><p>{firebaseEnvError}</p><small>Add these variables in Vercel → Project Settings → Environment Variables, then redeploy.</small></div>
  if(user===undefined)return <div className="splash"><img src="/icon-192.png"/><div className="spinner"/></div>
  if(!user)return <Routes><Route path="*" element={<Login/>}/></Routes>
  const isAdmin=user.uid===ADMIN_UID
  return <Routes><Route path="/admin/*" element={isAdmin?<Admin user={user}/>:<Navigate to="/student" replace/>}/><Route path="/student/*" element={!isAdmin?<Student user={user} profile={profile}/>:<Navigate to="/admin" replace/>}/><Route path="*" element={<Navigate to={isAdmin?'/admin':'/student'} replace/>}/></Routes>
}
