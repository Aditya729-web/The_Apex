import React from 'react';
import { LogOut, Menu, X } from 'lucide-react';
export default function Layout({role,tab,setTab,onLogout,items,children,userName}){
 const [open,setOpen]=React.useState(false);
 return <div className="shell">
  <aside className={open?'sidebar open':'sidebar'}>
   <div className="brand"><div className="brand-mark">A</div><div><strong>The Apex</strong><small>Chemistry</small></div></div>
   <button className="close-mobile" onClick={()=>setOpen(false)}><X/></button>
   <nav>{items.map(i=><button key={i.id} className={tab===i.id?'active':''} onClick={()=>{setTab(i.id);setOpen(false)}}><i.icon size={19}/><span>{i.label}</span></button>)}</nav>
   <div className="sidebar-foot"><small>{role} account</small><strong>{userName||'User'}</strong><button onClick={onLogout}><LogOut size={18}/> Sign out</button></div>
  </aside>
  <main className="main"><header className="topbar"><button className="menu-mobile" onClick={()=>setOpen(true)}><Menu/></button><div><h1>{items.find(i=>i.id===tab)?.label}</h1><p>Manage learning, fees and communication in one place.</p></div></header><div className="content">{children}</div></main>
 </div>
}
