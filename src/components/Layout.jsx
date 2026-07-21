import React from 'react'
import { NavLink } from 'react-router-dom'
import { LogOut, Menu, X } from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function Layout({ title, nav, children, user, mobileOpen, setMobileOpen }) {
  return <div className="app-shell">
    <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
      <div className="brand"><img src="/icon-192.png"/><div><strong>The Apex</strong><span>Chemistry</span></div></div>
      <button className="close-nav" onClick={()=>setMobileOpen(false)}><X/></button>
      <nav>{nav.map(({to,label,icon:Icon})=><NavLink key={to} to={to} onClick={()=>setMobileOpen(false)} className={({isActive})=>isActive?'active':''}><Icon size={19}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-foot"><div className="user-mini"><span>{user?.displayName || user?.email || 'User'}</span><small>{user?.email}</small></div><button onClick={()=>signOut(auth)}><LogOut size={18}/> Sign out</button></div>
    </aside>
    <main className="main"><header className="topbar"><button className="menu-button" onClick={()=>setMobileOpen(true)}><Menu/></button><div><small>THE APEX CHEMISTRY</small><h1>{title}</h1></div></header><div className="content">{children}</div></main>
  </div>
}
