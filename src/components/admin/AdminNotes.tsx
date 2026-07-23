import React, { useState } from 'react';
import { StorageService } from '../../lib/storage';
import { Note, Batch } from '../../types';
import { BookOpen, Upload, FileText, Trash2, Plus, Download } from 'lucide-react';
import { uploadFileChunks, downloadFileChunks } from '../../lib/fileChunks';

export const AdminNotes: React.FC = () => {
  const [batches] = useState<Batch[]>(() => StorageService.getBatches());
  const [notes, setNotes] = useState<Note[]>(() => StorageService.getNotes());

  const [selectedBatchId, setSelectedBatchId] = useState<string>(batches[0]?.id || '');
  const [filterBatchId, setFilterBatchId] = useState<string>('ALL');

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Physical Chemistry');
  const [description, setDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const refreshNotes = () => {
    setNotes(StorageService.getNotes());
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setSelectedFile(file);
    }
  };

  const handleNoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !selectedBatchId) return;

    setIsUploading(true);

    try {
      let finalFileUrl = '';
      const newNoteId = 'n-' + Date.now().toString(36);

      if (selectedFile) {
        const base64Data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });
        
        await uploadFileChunks(newNoteId, base64Data);
        finalFileUrl = `firestore://${newNoteId}`;
      }

      StorageService.addNote({
        id: newNoteId,
        title,
        subject,
        batchId: selectedBatchId,
        fileName: fileName || `${title.replace(/\s+/g, '_')}_Notes.pdf`,
        fileSize: selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB` : 'Unknown Size',
        fileUrl: finalFileUrl,
        description
      });

      refreshNotes();
      setTitle('');
      setDescription('');
      setFileName('');
      setFileUrl('');
      setSelectedFile(null);
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Failed to upload file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteNote = (id: string) => {
    StorageService.deleteNote(id);
    refreshNotes();
  };

  const [downloadingId, setDownloadingId] = useState<string | null>(null);

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

  const filteredNotes = notes.filter(n => filterBatchId === 'ALL' || n.batchId === filterBatchId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Notes & Study Material Upload</h2>
        <p className="text-sm text-slate-500">Publish handwritten notes, chapter worksheets, and PDF study guides for specific batches.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Upload Notes Form with Batch Dropdown & Dropzone */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
            <Upload className="w-5 h-5 text-indigo-600" /> Upload Batch Material
          </h3>

          <form onSubmit={handleNoteSubmit} className="space-y-4">
            {/* Batch Selection Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Target Batch *</label>
              <select
                required
                value={selectedBatchId}
                onChange={e => setSelectedBatchId(e.target.value)}
                className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              >
                {batches.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.title} ({b.className})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Subject / Domain *</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              >
                <option value="Physical Chemistry">Physical Chemistry</option>
                <option value="Organic Chemistry">Organic Chemistry</option>
                <option value="Inorganic Chemistry">Inorganic Chemistry</option>
                <option value="General Chemistry Foundation">General Chemistry Foundation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Note Title / Chapter Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Chemical Bonding Master Notes & PYQs"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Description / Topics Covered</label>
              <textarea
                rows={2}
                placeholder="e.g. VSEPR theory, Hybridization shortcuts, solved PYQs"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none resize-none"
              />
            </div>

            {/* Dropzone File Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Select / Drop Note File (PDF/Image) *</label>
              <div className="relative border-2 border-dashed border-indigo-200 bg-indigo-50/30 hover:bg-indigo-50/60 rounded-2xl p-6 text-center transition-colors">
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="space-y-1">
                  <FileText className="w-8 h-8 text-indigo-600 mx-auto" />
                  <p className="text-xs font-bold text-slate-800">
                    {fileName ? fileName : 'Click or drop PDF / image note file here'}
                  </p>
                  <p className="text-[10px] text-slate-400">PDF, JPG, PNG up to 25MB</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isUploading}
              className={`w-full py-3 text-white font-bold text-sm rounded-xl shadow-lg transition-all ${isUploading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isUploading ? 'Uploading...' : 'Publish Notes to Batch'}
            </button>
          </form>
        </div>

        {/* Existing Notes List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">Uploaded Study Materials</h3>

            {/* Batch Filter */}
            <select
              value={filterBatchId}
              onChange={e => setFilterBatchId(e.target.value)}
              className="text-xs px-3 py-1.5 border border-slate-300 rounded-xl outline-none"
            >
              <option value="ALL">All Batches</option>
              {batches.map(b => (
                <option key={b.id} value={b.id}>
                  {b.title}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            {filteredNotes.length === 0 ? (
              <p className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
                No notes published for this batch yet.
              </p>
            ) : (
              filteredNotes.map(n => (
                <div key={n.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          {n.subject}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">{n.createdAt}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">{n.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{n.description}</p>
                      <p className="text-[11px] font-mono text-slate-400 mt-1">
                        Batch: {n.batchTitle} • {n.fileName} ({n.fileSize})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleDownloadNote(n)}
                      disabled={downloadingId === n.id}
                      className={`p-2 rounded-lg transition-colors ${downloadingId === n.id ? 'text-slate-400 cursor-not-allowed' : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'}`}
                      title="Download Note"
                    >
                      <Download className={`w-4 h-4 ${downloadingId === n.id ? 'animate-pulse' : ''}`} />
                    </button>
                    <button
                      onClick={() => handleDeleteNote(n.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
