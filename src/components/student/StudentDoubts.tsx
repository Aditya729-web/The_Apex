import React, { useState } from 'react';
import { Student, Doubt } from '../../types';
import { StorageService } from '../../lib/storage';
import { HelpCircle, Send, Upload, Image as ImageIcon, CheckCircle2, Clock } from 'lucide-react';

interface StudentDoubtsProps {
  student: Student;
}

export const StudentDoubts: React.FC<StudentDoubtsProps> = ({ student }) => {
  const [doubts, setDoubts] = useState<Doubt[]>(() =>
    StorageService.getDoubts().filter(d => d.studentId === student.id)
  );

  const [question, setQuestion] = useState('');
  const [subject, setSubject] = useState('Physical Chemistry');
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');
  const [submittedMsg, setSubmittedMsg] = useState('');

  const refreshDoubts = () => {
    setDoubts(StorageService.getDoubts().filter(d => d.studentId === student.id));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageName(file.name);
      // For preview, construct local object URL or sample chemistry illustration
      const preview = URL.createObjectURL(file);
      setImageUrl(preview);
    }
  };

  const handleSubmitDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Storage service handles adding doubt AND pushing notification to Admin!
    StorageService.addDoubt({
      studentId: student.id,
      studentName: student.name,
      studentClass: student.className,
      batchId: student.batchId,
      batchTitle: student.batchTitle,
      question,
      subject,
      imageUrl: imageUrl || undefined
    });

    refreshDoubts();
    setQuestion('');
    setImageUrl('');
    setImageName('');

    setSubmittedMsg('✓ Doubt submitted successfully! Mr. Subhamoy Mondal has been notified.');
    setTimeout(() => setSubmittedMsg(''), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Ask Faculty a Doubt</h2>
        <p className="text-sm text-slate-500">Submit chemistry questions with description and picture attachment directly to Mr. Subhamoy Mondal.</p>
      </div>

      {submittedMsg && (
        <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs rounded-2xl animate-in fade-in">
          {submittedMsg}
        </div>
      )}

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Submit Doubt Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
            <HelpCircle className="w-5 h-5 text-indigo-600" /> Submit New Doubt
          </h3>

          <form onSubmit={handleSubmitDoubt} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Subject Area *</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none font-semibold"
              >
                <option value="Physical Chemistry">Physical Chemistry</option>
                <option value="Organic Chemistry">Organic Chemistry</option>
                <option value="Inorganic Chemistry">Inorganic Chemistry</option>
                <option value="General Science">General Science</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Question / Description *</label>
              <textarea
                rows={4}
                required
                placeholder="Type your chemistry question in detail or describe where you are stuck..."
                value={question}
                onChange={e => setQuestion(e.target.value)}
                className="w-full text-xs p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none resize-none"
              />
            </div>

            {/* Picture Upload */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Attach Picture / Diagram (Optional)</label>
              <div className="relative border-2 border-dashed border-indigo-200 bg-indigo-50/30 hover:bg-indigo-50/60 rounded-2xl p-5 text-center transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="space-y-1">
                  <ImageIcon className="w-6 h-6 text-indigo-600 mx-auto" />
                  <p className="text-xs font-bold text-slate-800">
                    {imageName ? imageName : 'Click or capture question picture'}
                  </p>
                  <p className="text-[10px] text-slate-400">JPG, PNG up to 10MB</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <Send className="w-4 h-4" /> Submit Doubt & Alert Admin
            </button>
          </form>
        </div>

        {/* My Doubts History & Solutions */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-base font-bold text-slate-900">My Submitted Doubts ({doubts.length})</h3>

          <div className="space-y-3">
            {doubts.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-400 text-xs">
                You haven't asked any doubts yet.
              </div>
            ) : (
              doubts.map(d => (
                <div key={d.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex justify-between items-start gap-3">
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200 uppercase">
                      {d.subject}
                    </span>

                    {d.status === 'pending' ? (
                      <span className="px-2.5 py-0.5 bg-amber-100 text-amber-800 rounded-full font-bold text-[10px] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Pending Admin Reply
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Answered
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-slate-800">{d.question}</p>

                  {d.imageUrl && (
                    <img
                      src={d.imageUrl}
                      alt="Question Attachment"
                      className="w-full max-h-48 object-cover rounded-xl border border-slate-200 shadow-sm"
                    />
                  )}

                  {/* Admin Answer Display */}
                  {d.answerText && (
                    <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 space-y-1 text-xs">
                      <p className="text-amber-300 font-bold flex items-center gap-1 text-[11px] uppercase tracking-wider">
                        Faculty Solution • Mr. Subhamoy Mondal
                      </p>
                      <p className="text-slate-200 leading-relaxed font-medium">{d.answerText}</p>
                      <span className="text-[10px] text-slate-400 font-mono block pt-1">{d.answeredAt}</span>
                    </div>
                  )}

                  <p className="text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-100">
                    Asked on: {d.createdAt}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
