import React, { useState } from 'react';
import { Student, Doubt } from '../../types';
import { StorageService } from '../../lib/storage';
import { HelpCircle, Send, Upload, Image as ImageIcon, CheckCircle2, Clock, Eye, XCircle } from 'lucide-react';
import { uploadFileChunks } from '../../lib/fileChunks';
import { ChunkedImage } from '../ChunkedImage';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const refreshDoubts = () => {
    setDoubts(StorageService.getDoubts().filter(d => d.studentId === student.id));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageName(file.name);
      
      try {
        const { default: imageCompression } = await import('browser-image-compression');
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1024,
          useWebWorker: true
        };
        const compressedFile = await imageCompression(file, options);
        
        // Convert to base64
        const base64Data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(compressedFile);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
        });
        
        setImageUrl(base64Data);
      } catch (err) {
        console.error('Error compressing image:', err);
        alert('Failed to process image. Please try again.');
      }
    }
  };

  const handleSubmitDoubt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isSubmitting) return;

    setIsSubmitting(true);
    let finalImageUrl = imageUrl;
    
    if (imageUrl && !imageUrl.startsWith('chunked:')) {
       const fileId = `doubt-${Date.now()}`;
       await uploadFileChunks(fileId, imageUrl);
       finalImageUrl = `chunked:${fileId}`;
    }

    // Storage service handles adding doubt AND pushing notification to Admin!
    StorageService.addDoubt({
      studentId: student.id,
      studentName: student.name,
      studentClass: student.className,
      batchId: student.batchId,
      batchTitle: student.batchTitle,
      question,
      subject,
      imageUrl: finalImageUrl || undefined
    });

    refreshDoubts();
    setQuestion('');
    setImageUrl('');
    setImageName('');

    setSubmittedMsg('✓ Doubt submitted successfully! Mr. Subhamoy Mondal has been notified.');
    setTimeout(() => setSubmittedMsg(''), 4000);
    setIsSubmitting(false);
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
              {imageUrl ? (
                <div className="relative rounded-2xl overflow-hidden border border-slate-200">
                  <img src={imageUrl.startsWith('chunked:') ? undefined : imageUrl} alt="Preview" className="w-full max-h-48 object-cover" />
                  <button
                    type="button"
                    onClick={() => {
                      setImageUrl('');
                      setImageName('');
                    }}
                    className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-full hover:bg-black/80 backdrop-blur-sm"
                  >
                    <XCircle className="w-4 h-4" />
                  </button>
                </div>
              ) : (
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
                      Click or capture question picture
                    </p>
                    <p className="text-[10px] text-slate-400">JPG, PNG up to 10MB</p>
                  </div>
                </div>
              )}
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
                    <div className="pt-2 relative group">
                      <div className="absolute top-4 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedImage(d.imageUrl!);
                            setImageModalOpen(true);
                          }}
                          className="bg-black/60 text-white px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-bold hover:bg-black/80 backdrop-blur-sm"
                        >
                          <Eye className="w-3.5 h-3.5" /> View Full
                        </button>
                      </div>
                      {d.imageUrl.startsWith('chunked:') ? (
                        <ChunkedImage 
                          fileId={d.imageUrl.split(':')[1]} 
                          className="w-full max-h-48 object-cover rounded-xl border border-slate-200 shadow-sm cursor-pointer" 
                        />
                      ) : (
                        <img
                          src={d.imageUrl}
                          alt="Question Attachment"
                          className="w-full max-h-48 object-cover rounded-xl border border-slate-200 shadow-sm cursor-pointer"
                        />
                      )}
                    </div>
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

      {/* Image Viewer Modal */}
      {imageModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-2 border border-slate-200 relative max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => {
                setImageModalOpen(false);
                setSelectedImage('');
              }}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
            >
              <XCircle className="w-6 h-6" />
            </button>
            <div className="rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center min-h-[300px]">
              {selectedImage.startsWith('chunked:') ? (
                <ChunkedImage fileId={selectedImage.split(':')[1]} className="max-w-full h-auto object-contain" />
              ) : (
                <img src={selectedImage} alt="Doubt Attachment" className="max-w-full h-auto object-contain" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
