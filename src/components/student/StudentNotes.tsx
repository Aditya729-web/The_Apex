import React, { useState } from 'react';
import { Student } from '../../types';
import { Mail, Search, CheckCircle2, History } from 'lucide-react';

interface StudentNotesProps {
  student: Student;
}

interface NoteEmailLog {
  id: string;
  title: string;
  subject: string;
  batchId: string;
  batchTitle: string;
  fileName: string;
  description: string;
  sentAt: string;
  recipientCount: number;
}

export const StudentNotes: React.FC<StudentNotesProps> = ({ student }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const emailLogs: NoteEmailLog[] = (() => {
    try {
      const saved = localStorage.getItem('apex_email_notes_log');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  })();

  const studentLogs = emailLogs.filter(log => log.batchId === student.batchId);

  const filteredLogs = studentLogs.filter(
    n => n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Class Study Notes</h2>
          <p className="text-sm text-slate-500">Handwritten notes and chapter guides are sent directly to your email inbox by Mr. Subhamoy Mondal.</p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search notes by topic..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
      </div>

      {/* Direct Email Delivery Notice */}
      <div className="bg-indigo-50/80 border border-indigo-100 p-5 rounded-2xl flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 font-bold shadow-md shadow-indigo-600/20">
          <Mail className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-indigo-950 flex items-center gap-1.5">
            Direct Email Delivery Active <CheckCircle2 className="w-4 h-4 text-indigo-600" />
          </h4>
          <p className="text-xs text-indigo-900/80 mt-1 leading-relaxed">
            All study materials, chapter formula sheets, and handwritten notes are dispatched directly to your registered email address: <strong className="font-bold text-indigo-950">{student.email || 'your email'}</strong>. Please check your Gmail inbox to view or download new study releases sent by Mr. Subhamoy Mondal.
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-indigo-200 rounded-lg text-xs font-bold text-indigo-800 shadow-sm">
            <History className="w-3.5 h-3.5 text-indigo-600" />
            {studentLogs.length} Email Dispatch{studentLogs.length !== 1 ? 'es' : ''} sent to your batch
          </div>
        </div>
      </div>

      {/* Notes Logs Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredLogs.length === 0 ? (
          <div className="md:col-span-2 bg-white p-10 text-center rounded-2xl border border-slate-200 text-slate-400 text-xs space-y-2">
            <Mail className="w-8 h-8 mx-auto text-indigo-400" />
            <p className="font-semibold text-slate-700 text-sm">Check Your Email Inbox</p>
            <p className="text-slate-500 max-w-md mx-auto">
              New study notes and chapter worksheets are sent directly to <strong>{student.email || 'your registered email'}</strong>. No emails have been dispatched for your batch yet.
            </p>
          </div>
        ) : (
          filteredLogs.map(log => (
            <div key={log.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-indigo-400 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200 uppercase">
                    {log.subject}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">{log.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{log.description}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">Attachment: {log.fileName}</span>
                <span className="text-slate-400 text-[10px]">{log.sentAt}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

