import React, { useState } from 'react';
import { Student, Batch } from '../../types';
import { StorageService } from '../../lib/storage';
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  BookOpen,
  HelpCircle,
  Award,
  ArrowRight,
  Sparkles,
  Trophy,
  IndianRupee,
  Bell
} from 'lucide-react';

interface StudentDashboardProps {
  student: Student;
  onNavigate: (tab: string) => void;
  onPayFees: (month: string, amount: number) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  student,
  onNavigate,
  onPayFees
}) => {
  const batches = StorageService.getBatches();
  const studentBatch = batches.find(b => b.id === student.batchId);

  const feeRecords = StorageService.getFeeRecords().filter(f => f.studentId === student.id);
  const tests = StorageService.getTests().filter(t => t.batchId === student.batchId);
  const doubts = StorageService.getDoubts().filter(d => d.studentId === student.id);

  const paidCount = feeRecords.filter(f => f.status === 'paid').length;
  const unpaidCount = feeRecords.filter(f => f.status === 'unpaid').length;
  const totalFeesAmount = student.fees * feeRecords.length;
  const paidFeesAmount = feeRecords.filter(f => f.status === 'paid').reduce((a, b) => a + b.amount, 0);
  const dueFeesAmount = totalFeesAmount - paidFeesAmount;

  // Calendar scheduled days highlight calculation
  const scheduledDays = studentBatch?.days || ['Mon', 'Wed', 'Fri'];

  // Current month day numbers for interactive calendar
  const today = new Date();
  const currentMonthName = today.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => {
    const dayNum = i + 1;
    const dateObj = new Date(today.getFullYear(), today.getMonth(), dayNum);
    const dayName = dateObj.toLocaleString('en-US', { weekday: 'short' });
    const isScheduledClass = scheduledDays.includes(dayName);
    const isToday = dayNum === today.getDate();
    return { dayNum, dayName, isScheduledClass, isToday };
  });

  // Recent test score with auto-calculated rank
  const latestTest = tests[0];
  const myTestResult = latestTest?.results.find(r => r.studentId === student.id);

  return (
    <div className="space-y-6">
      {/* Welcome Banner matching Image 1 Student Dashboard */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl border border-indigo-500/20 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-full border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Welcome back, {student.name}!
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              {student.className} • {student.batchTitle || 'Chemistry Regular Batch'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Timing: <span className="text-indigo-300 font-bold">{studentBatch?.time || '04:00 PM - 05:30 PM'}</span> • Student ID: <span className="font-mono text-indigo-200 font-bold">{student.id}</span>
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onNavigate('doubts')}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4" /> Ask Doubt
            </button>
            <button
              onClick={() => onNavigate('fees')}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all flex items-center gap-1.5"
            >
              <IndianRupee className="w-4 h-4 text-indigo-400" /> Pay Fees
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Calendar & Fee Overview */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* INTERACTIVE CALENDAR HIGHLIGHTING ADMIN SCHEDULED DAYS */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-indigo-600" /> Class Schedule Calendar
              </h3>
              <p className="text-xs text-slate-500">{currentMonthName} • Highlighted days are scheduled classes</p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 font-bold text-indigo-600">
                <span className="w-3 h-3 bg-indigo-600 rounded-full inline-block" /> Class Day
              </span>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 text-center text-xs">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="font-bold text-slate-400 py-1 uppercase text-[10px]">
                {d}
              </div>
            ))}

            {calendarDays.map(({ dayNum, isScheduledClass, isToday }) => (
              <div
                key={dayNum}
                className={`p-2.5 rounded-xl font-bold transition-all relative ${
                  isToday
                    ? 'bg-slate-900 text-white ring-2 ring-indigo-400 shadow-md'
                    : isScheduledClass
                    ? 'bg-indigo-50 text-indigo-950 border border-indigo-200 shadow-sm font-black'
                    : 'bg-slate-50 text-slate-600 border border-slate-100'
                }`}
              >
                <span>{dayNum}</span>
                {isScheduledClass && (
                  <span className="block text-[9px] font-extrabold text-indigo-600 uppercase mt-0.5 leading-none">
                    Class
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
            <span className="font-semibold text-slate-800">Weekly Days Selected by Faculty:</span>
            <div className="flex gap-1">
              {scheduledDays.map(d => (
                <span key={d} className="px-2 py-0.5 bg-slate-900 text-indigo-300 font-bold text-[10px] rounded-md">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FEE STATUS OVERVIEW GAUGE matching Image 1 Student Dashboard */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900">Fee Payment Status</h3>
            <span className="text-xs font-bold text-slate-500">{currentMonthName}</span>
          </div>

          <div className="flex items-center gap-6 py-2">
            {/* Progress Gauge */}
            <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  strokeWidth="3.8"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-indigo-600"
                  strokeDasharray={`${Math.round((paidFeesAmount / (totalFeesAmount || 1)) * 100)}, 100`}
                  strokeWidth="3.8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-xl font-black text-slate-900">
                  {Math.round((paidFeesAmount / (totalFeesAmount || 1)) * 100)}%
                </span>
                <span className="block text-[9px] text-slate-400 font-bold uppercase">Paid</span>
              </div>
            </div>

            <div className="space-y-2 flex-1 text-xs">
              <div className="flex justify-between items-center p-2 bg-emerald-50 rounded-xl border border-emerald-100">
                <span className="font-semibold text-emerald-900">Paid Fees:</span>
                <span className="font-extrabold text-emerald-700">₹{paidFeesAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-indigo-50 rounded-xl border border-indigo-100">
                <span className="font-semibold text-indigo-900">Due Fees:</span>
                <span className="font-extrabold text-indigo-700">₹{dueFeesAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('fees')}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            View Fee Ledger & Pay via UPI <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Recent Test & Rank Card + Quick Access Tiles */}
      <div className="grid md:grid-cols-12 gap-6">
        {/* Test Performance & Auto Rank */}
        <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-indigo-600" /> Recent Test & Class Rank
            </h3>
            <button onClick={() => onNavigate('tests')} className="text-xs font-bold text-indigo-600 hover:underline">
              View All
            </button>
          </div>

          {latestTest && myTestResult ? (
            <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-3 shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-md border border-indigo-500/30 uppercase">
                    Date: {latestTest.date}
                  </span>
                  <h4 className="text-base font-bold text-white mt-1">{latestTest.title}</h4>
                </div>

                <div className="text-right bg-indigo-600 text-white px-3 py-1.5 rounded-xl shadow-md">
                  <span className="text-[10px] uppercase font-black block">Class Rank</span>
                  <span className="text-xl font-black font-mono">#{myTestResult.rank}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between text-xs text-slate-300">
                <span>Score: <strong className="text-white font-mono">{myTestResult.marksObtained} / {latestTest.totalMarks}</strong></span>
                <span>Percentage: <strong className="text-indigo-300 font-mono">{Math.round((myTestResult.marksObtained / latestTest.totalMarks) * 100)}%</strong></span>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-400 py-6 text-center">No tests published for your batch yet.</p>
          )}
        </div>

        {/* Quick Access Grid */}
        <div className="md:col-span-6 grid grid-cols-2 gap-3">
          <div
            onClick={() => onNavigate('notes')}
            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-500/50 cursor-pointer transition-all space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Class Notes</h4>
            <p className="text-[11px] text-slate-400">Download PDFs & handwritten PYQs</p>
          </div>

          <div
            onClick={() => onNavigate('doubts')}
            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-500/50 cursor-pointer transition-all space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Ask Doubts</h4>
            <p className="text-[11px] text-slate-400">{doubts.length} submitted doubts</p>
          </div>

          <div
            onClick={() => onNavigate('profile')}
            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-500/50 cursor-pointer transition-all space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">My Profile</h4>
            <p className="text-[11px] text-slate-400">View student credentials</p>
          </div>

          <div
            onClick={() => onNavigate('help')}
            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-500/50 cursor-pointer transition-all space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Bell className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Faculty Help</h4>
            <p className="text-[11px] text-slate-400">Connect with Mr. Subhamoy Mondal</p>
          </div>
        </div>
      </div>
    </div>
  );
};
