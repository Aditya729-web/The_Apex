import { useState } from 'react'
import { Brand } from './Brand'
import { Menu, X, LogOut } from 'lucide-react'

export function PortalLayout({ mode, items, active, onSelect, onLogout, children, userName }) {
  const [open,setOpen]=useState(false)
  return <div className={`portal ${mode}`}>
    <aside className={open ? 'open' : ''}>
      <div className="side-head"><Brand compact/><button className="icon-btn mobile-only" onClick={()=>setOpen(false)}><X/></button></div>
      <small>{mode === 'admin' ? 'ADMIN PANEL' : 'STUDENT PANEL'}</small>
      <nav>{items.map(({key,label,icon:Icon})=><button key={key} className={active===key?'active':''} onClick={()=>{onSelect(key);setOpen(false)}}><Icon size={18}/><span>{label}</span></button>)}</nav>
      <button className="logout" onClick={onLogout}><LogOut size={18}/>Logout</button>
    </aside>
    <main>
      <header className="portal-top"><button className="icon-btn mobile-only" onClick={()=>setOpen(true)}><Menu/></button><div><b>{mode==='admin'?'Management Console':'Learning Space'}</b><span>{userName || (mode==='admin'?'Administrator':'Student')}</span></div></header>
      <div className="portal-content">{children}</div>
    </main>
  </div>
}
