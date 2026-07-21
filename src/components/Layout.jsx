import React from 'react'
import { NavLink } from 'react-router-dom'
import { LogOut, Menu, X, ShieldCheck, GraduationCap } from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function Layout({ title, nav, children, user, mobileOpen, setMobileOpen, portal='student' }) {
  const isAdmin = portal === 'admin'
  return <div className={`app-shell ${isAdmin ? 'admin-shell' : 'student-shell'}`}>
    <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
      <div className="brand"><img src="/icon-192.png" alt="The Apex Chemistry"/><div><strong>The Apex</strong><span>{isAdmin ? 'Administrator' : 'Student Portal'}</span></div></div>
      <button className="close-nav" aria-label="Close navigation" onClick={()=>setMobileOpen(false)}><X/></button>
      <div className="portal-badge">{isAdmin ? <ShieldCheck size={17}/> : <GraduationCap size={17}/>}<span>{isAdmin ? 'Management Console' : 'Learning Space'}</span></div>
      <nav>{nav.map(({to,label,icon:Icon})=><NavLink key={to} to={to} end={to===(isAdmin?'/admin':'/student')} onClick={()=>setMobileOpen(false)} className={({isActive})=>isActive?'active':''}><Icon size={19}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-foot"><div className="user-mini"><span>{user?.displayName || (isAdmin ? 'Administrator' : 'Student')}</span><small>{isAdmin ? 'Full management access' : (user?.email || 'Registered student')}</small></div><button onClick={()=>signOut(auth)}><LogOut size={18}/> Sign out</button></div>
    </aside>
    <main className="main"><header className="topbar"><button className="menu-button" aria-label="Open navigation" onClick={()=>setMobileOpen(true)}><Menu/></button><div className="topbar-title"><small>{isAdmin ? 'ADMINISTRATION • THE APEX CHEMISTRY' : 'MY LEARNING • THE APEX CHEMISTRY'}</small><h1>{title}</h1></div><div className="role-chip">{isAdmin ? <ShieldCheck size={16}/> : <GraduationCap size={16}/>} {isAdmin ? 'Admin' : 'Student'}</div></header><div className="content">{children}</div></main>
  </div>
}
