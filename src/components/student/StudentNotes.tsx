import React, { useState } from 'react';
import { Student, Note } from '../../types';
import { StorageService } from '../../lib/storage';
import { BookOpen, Download, FileText, Search } from 'lucide-react';
import { downloadFileChunks } from '../../lib/fileChunks';

interface StudentNotesProps {
  student: Student;
}

export const StudentNotes: React.FC<StudentNotesProps> = ({ student }) => {
  const notes = StorageService.getNotes().filter(n => n.batchId === student.batchId);
  const [searchTerm, setSearchTerm] = useState('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const filtered = notes.filter(
    n => n.title.toLowerCase().includes(searchTerm.toLowerCase()) || n.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadNote = async (n: Note) => {
    if (n.fileUrl) {
      if (n.fileUrl.startsWith('firestore://')) {
        try {
          setDownloadingId(n.id);
          const fileId = n.fileUrl.replace('firestore://', '');
          const base64Data = await downloadFileChunks(fileId);
          
          if (base64Data) {
            const link = document.createElement('a');
            link.href = base64Data;
            link.download = n.fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
          }
        } catch (err) {
          console.error("Error downloading chunks:", err);
          alert("Failed to download file chunks.");
        } finally {
          setDownloadingId(null);
        }
      } else if (n.fileUrl.startsWith('data:')) {
        const link = document.createElement('a');
        link.href = n.fileUrl;
        link.download = n.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      } else if (n.fileUrl.startsWith('http')) {
        window.open(n.fileUrl, '_blank');
        return;
      }
    }

    const content = `================================================
THE APEX CHEMISTRY - STUDY MATERIAL
================================================
Title: ${n.title}
Subject: ${n.subject}
Batch: ${n.batchTitle || 'Class Notes'}
Date: ${n.createdAt}

Description:
${n.description || 'Detailed notes provided by Mr. Subhamoy Mondal.'}

------------------------------------------------
Faculty: Mr. Subhamoy Mondal
Apex Chemistry Tuition
================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = n.fileName || `${n.title.replace(/\s+/g, '_')}_Notes.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Class Study Notes</h2>
          <p className="text-sm text-slate-500">Access handwritten notes, chapter guides, and formula sheets posted by Mr. Subhamoy Mondal.</p>
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

      {/* Notes Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.length === 0 ? (
          <div className="md:col-span-2 bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-400 text-xs">
            No study notes uploaded for your batch yet.
          </div>
        ) : (
          filtered.map(n => (
            <div key={n.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-indigo-400 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200 uppercase">
                    {n.subject}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">{n.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{n.description}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">{n.fileName} ({n.fileSize})</span>
                <button
                  onClick={() => handleDownloadNote(n)}
                  disabled={downloadingId === n.id}
                  className={`px-3 py-1.5 text-white font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors ${downloadingId === n.id ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                >
                  <Download className="w-3.5 h-3.5" /> {downloadingId === n.id ? 'Downloading...' : 'Download Note'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
