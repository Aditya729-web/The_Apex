import React, { useState } from 'react';
import { X, ShieldCheck, UserCheck, Lock, User, LogIn } from 'lucide-react';
import { Role, Student } from '../types';
import { StorageService } from '../lib/storage';
import { auth, signInWithEmailAndPassword } from '../lib/firebase';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (role: Role, student?: Student) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [activeTab, setActiveTab] = useState<'student' | 'admin'>('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (activeTab === 'admin') {
      // Firebase Email Auth attempt
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, username.trim(), password);
        onLoginSuccess('admin');
        onClose();
      } catch (err: any) {
        setError('Invalid Admin credentials! Only the registered Firebase admin can log in.');
      } finally {
        setLoading(false);
      }
    } else {
      // Student login check against registered students
      const students = StorageService.getStudents();
      const match = students.find(
        s => s.id.toLowerCase() === username.trim().toLowerCase() && s.password === password
      );

      if (match) {
        onLoginSuccess('student', match);
        onClose();
      } else {
        setError('Invalid Student ID or Password! Please contact Mr. Subhamoy Mondal for your student login details.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border border-slate-200 relative overflow-hidden">
        {/* Top Header Banner */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-xl shadow-lg shadow-indigo-600/30">
              ⚗️
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">The Apex Chemistry</h3>
              <p className="text-xs text-indigo-400 font-medium">Concept Clarity • NCERT • JEE • NEET</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2">Access your personalized learning portal or administration dashboard.</p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-slate-200 bg-slate-50">
          <button
            onClick={() => { setActiveTab('admin'); setError(''); }}
            className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'admin'
                ? 'bg-white text-slate-900 border-b-2 border-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> Admin Login
          </button>
          <button
            onClick={() => { setActiveTab('student'); setError(''); }}
            className={`flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'student'
                ? 'bg-white text-indigo-600 border-b-2 border-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserCheck className="w-4 h-4" /> Student Login
          </button>
        </div>

        {/* Login Body */}
        <div className="p-6 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {activeTab === 'student' ? 'Student ID (e.g. APEX2026101)' : 'Admin Email'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder={activeTab === 'student' ? 'APEX2026101' : 'admin@theapexchemistry.com'}
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 font-bold text-sm rounded-xl transition-all shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2 ${
                activeTab === 'admin'
                  ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'
              }`}
            >
              <LogIn className="w-4 h-4" />
              {loading ? 'Logging in...' : activeTab === 'admin' ? 'Login as Admin' : 'Login as Student'}
            </button>

            <p className="text-[11px] text-center text-slate-400 pt-1">
              Faculty: Mr. Subhamoy Mondal • The Apex Chemistry Portal
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

