import React, { useState } from 'react';
import { Role, Student, NotificationItem } from '../types';
import { StorageService } from '../lib/storage';
import {
  Bell,
  LogOut,
  User,
  ShieldCheck,
  FlaskConical,
  BookOpen,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  role: Role;
  currentStudent: Student | null;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLoginClick: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  role,
  currentStudent,
  activeTab,
  onTabChange,
  onLoginClick,
  onLogout
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const notifications = StorageService.getNotifications().filter(
    n => n.targetRole === role || (role === 'student' && n.targetStudentId === currentStudent?.id)
  );
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkNotificationsRead = () => {
    StorageService.markNotificationsRead(role === 'admin' ? 'admin' : 'student', currentStudent?.id);
    setShowNotifications(false);
  };

  const navItems =
    role === 'admin'
      ? [
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'students', label: 'Students' },
          { id: 'batches', label: 'Batches' },
          { id: 'fees', label: 'Fees' },
          { id: 'notes', label: 'Notes' },
          { id: 'doubts', label: 'Doubts' },
          { id: 'tests', label: 'Tests' }
        ]
      : role === 'student'
      ? [
          { id: 'dashboard', label: 'Home' },
          { id: 'fees', label: 'Fees' },
          { id: 'notes', label: 'Notes' },
          { id: 'doubts', label: 'Ask Doubts' },
          { id: 'tests', label: 'Tests & Rank' },
          { id: 'profile', label: 'Profile' },
          { id: 'help', label: 'Help' }
        ]
      : [];

  return (
    <header className="sticky top-0 z-40 bg-[#0B132B] text-white border-b border-slate-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Branding matching prompt images */}
        <div
          onClick={() => onTabChange(role === 'guest' ? 'home' : 'dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform border border-amber-300">
            <FlaskConical className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="font-black text-lg tracking-wider text-white uppercase font-sans">
                CHEMISTRY
              </span>
              <span className="font-black text-lg text-amber-400 uppercase font-sans">
                TUITION
              </span>
            </div>
            <p className="text-[10px] text-amber-300/80 tracking-widest font-bold uppercase leading-none">
              Your Success, Our Passion
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        {navItems.length > 0 && (
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === item.id
                    ? 'bg-amber-400 text-slate-950 shadow-sm font-extrabold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Right Side Actions & User Status */}
        <div className="flex items-center gap-3">
          {role !== 'guest' && (
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-400 text-slate-950 text-[10px] font-black rounded-full flex items-center justify-center animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in zoom-in-95">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100 mb-2">
                    <h4 className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                      <Bell className="w-4 h-4 text-amber-500" /> Notifications
                    </h4>
                    {unreadCount > 0 && (
                      <button
                        onClick={handleMarkNotificationsRead}
                        className="text-[11px] text-amber-600 hover:underline font-semibold"
                      >
                        Mark read
                      </button>
                    )}
                  </div>

                  <div className="max-h-64 overflow-y-auto space-y-2 text-xs">
                    {notifications.length === 0 ? (
                      <p className="text-slate-400 text-center py-4">No notifications yet.</p>
                    ) : (
                      notifications.slice(0, 5).map(n => (
                        <div
                          key={n.id}
                          className={`p-2.5 rounded-xl border ${
                            n.read ? 'bg-slate-50 border-slate-100' : 'bg-amber-50 border-amber-200'
                          }`}
                        >
                          <p className="font-bold text-slate-800">{n.title}</p>
                          <p className="text-slate-600 mt-0.5">{n.message}</p>
                          <span className="text-[10px] text-slate-400 mt-1 block font-mono">{n.timestamp}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* User Profile Badge or Login / Sign Up Buttons */}
          {role === 'guest' ? (
            <button
              onClick={onLoginClick}
              className="px-5 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md transition-all hover:scale-[1.02] flex items-center gap-1.5"
            >
              <User className="w-4 h-4" /> Portal Login
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              {role === 'admin' ? (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-bold text-white leading-tight">Admin</p>
                    <p className="text-[10px] text-amber-400 font-medium">Mr. Subhamoy Mondal</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                    {currentStudent?.name?.charAt(0) || 'S'}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-bold text-white leading-tight">{currentStudent?.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{currentStudent?.id}</p>
                  </div>
                </div>
              )}

              <button
                onClick={onLogout}
                title="Logout"
                className="ml-1 p-1.5 text-slate-400 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-3 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                activeTab === item.id ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
