'use client';

import { useState } from 'react';
import Brand from '@/components/Brand';
import { Icon } from '@/components/Icons';

export default function DashboardShell({ role, active, setActive, items, profile, notificationCount = 0, onLogout, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function select(key) {
    setActive(key);
    setMobileOpen(false);
  }

  return (
    <div className="dashboard-app">
      <aside className={`dashboard-sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-brand"><Brand compact href={role === 'admin' ? '/admin' : '/student'} /></div>
        <div className="sidebar-label">{role === 'admin' ? 'ADMIN PANEL' : 'STUDENT PANEL'}</div>
        <nav className="sidebar-nav">
          {items.map((item) => (
            <button type="button" key={item.key} className={active === item.key ? 'active' : ''} onClick={() => select(item.key)}>
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
              {item.key === 'home' && notificationCount > 0 && <b className="sidebar-count">{notificationCount > 9 ? '9+' : notificationCount}</b>}
            </button>
          ))}
        </nav>
        <button type="button" className="sidebar-logout" onClick={onLogout}><Icon name="logout" size={19}/> Logout</button>
      </aside>
      {mobileOpen && <button className="sidebar-overlay" aria-label="Close menu" onClick={() => setMobileOpen(false)} />}
      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <button className="mobile-menu-button" type="button" onClick={() => setMobileOpen(true)}><Icon name="menu" /></button>
          <div className="topbar-title"><strong>{items.find((item) => item.key === active)?.label || 'Dashboard'}</strong><span>{role === 'admin' ? 'The Apex Chemistry Administration' : profile?.student_code || 'Student Portal'}</span></div>
          <div className="topbar-user">
            <span className="notification-button"><Icon name="bell" />{notificationCount > 0 && <b>{notificationCount > 9 ? '9+' : notificationCount}</b>}</span>
            <span className="avatar">{(profile?.full_name || 'A').trim().charAt(0).toUpperCase()}</span>
            <div><strong>{profile?.full_name || (role === 'admin' ? 'Admin' : 'Student')}</strong><small>{role === 'admin' ? 'Administrator' : profile?.class_level || 'Student'}</small></div>
          </div>
        </header>
        <div className="dashboard-content">{children}</div>
      </section>
    </div>
  );
}
