import React from 'react';
import { Student } from '../../types';
import { User, Phone, Calendar, IndianRupee, BookOpen, ShieldCheck, Award } from 'lucide-react';

interface StudentProfileProps {
  student: Student;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl border border-indigo-500/30 shadow-xl flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-4xl shadow-lg border-2 border-indigo-400">
          {student.name.charAt(0)}
        </div>

        <div className="text-center sm:text-left space-y-1">
          <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30">
            Enrolled Student
          </span>
          <h2 className="text-3xl font-black text-white">{student.name}</h2>
          <p className="text-sm font-mono text-indigo-300 font-bold">Student ID: {student.id}</p>
          <p className="text-xs text-slate-300">{student.className} • {student.batchTitle}</p>
        </div>
      </div>

      {/* Credentials Card (Password EXCLUDED) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
          <ShieldCheck className="w-5 h-5 text-indigo-600" /> Student Official Credentials
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 block font-medium">Student Registration ID</span>
            <span className="text-sm font-bold text-slate-900 font-mono">{student.id}</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 block font-medium">Full Name</span>
            <span className="text-sm font-bold text-slate-900">{student.name}</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 block font-medium">Academic Class</span>
            <span className="text-sm font-bold text-indigo-600">{student.className}</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 block font-medium">Assigned Batch</span>
            <span className="text-sm font-bold text-slate-900">{student.batchTitle || 'Regular Chemistry Batch'}</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 block font-medium">Contact Phone</span>
            <span className="text-sm font-bold text-slate-900 font-mono">{student.phone}</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-400 block font-medium">Monthly Tuition Fee Rate</span>
            <span className="text-sm font-extrabold text-indigo-600 font-mono">₹{student.fees.toLocaleString()} / month</span>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 col-span-2">
            <span className="text-slate-400 block font-medium">Date of Enrollment</span>
            <span className="text-sm font-bold text-slate-900 font-mono">{student.joiningDate}</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center italic pt-2">
          🔒 Password is encrypted for security and hidden from standard profile view. Contact Admin for credentials reset.
        </p>
      </div>
    </div>
  );
};
