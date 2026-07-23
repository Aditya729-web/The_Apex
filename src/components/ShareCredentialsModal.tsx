import React, { useState } from 'react';
import { CheckCircle, Copy, Share2, MessageCircle, X } from 'lucide-react';

interface ShareCredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: {
    name: string;
    id: string;
    password?: string;
    phone: string;
    batchTitle?: string;
    className: string;
  } | null;
}

export const ShareCredentialsModal: React.FC<ShareCredentialsModalProps> = ({
  isOpen,
  onClose,
  student
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !student) return null;

  const currentUrl = window.location.origin;
  const shareMessage = `🎓 *Welcome to The Apex Chemistry!*
Dear ${student.name},
Your enrollment for ${student.className} (${student.batchTitle || 'Regular Batch'}) is successful.

Here are your portal login credentials:
📌 *Student ID:* ${student.id}
🔑 *Password:* ${student.password || 'student123'}
🌐 *Portal Link:* ${currentUrl}

Please login to access class schedules, handwritten notes, tests, and ask doubts directly to the faculty.

*Your Success, Our Passion*
– Mr. Subhamoy Mondal
The Apex Chemistry`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const formattedPhone = student.phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/91${formattedPhone}?text=${encodeURIComponent(shareMessage)}`;
    window.open(url, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'The Apex Chemistry Credentials',
          text: shareMessage,
          url: currentUrl
        });
      } catch (err) {
        console.error('Share cancelled or failed', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-amber-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="text-center mb-5">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Student Created Successfully!</h3>
          <p className="text-sm text-slate-500 mt-1">
            Account activated for <span className="font-semibold text-indigo-600">{student.name}</span>
          </p>
        </div>

        {/* Credentials Display Box */}
        <div className="bg-slate-900 text-white rounded-xl p-4 mb-5 border border-slate-800 space-y-3 font-mono text-sm shadow-md">
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-slate-400 text-xs uppercase tracking-wider font-sans font-medium">Student ID</span>
            <span className="text-indigo-400 font-bold text-base">{student.id}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-800">
            <span className="text-slate-400 text-xs uppercase tracking-wider font-sans font-medium">Password</span>
            <span className="text-emerald-400 font-bold text-base">{student.password}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-xs uppercase tracking-wider font-sans font-medium">Phone</span>
            <span className="text-slate-200 font-medium">{student.phone}</span>
          </div>
        </div>

        {/* Share Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleWhatsAppShare}
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.01]"
          >
            <MessageCircle className="w-5 h-5" />
            Send Credentials on WhatsApp
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={handleCopy}
              className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <Copy className="w-4 h-4 text-slate-600" />
              {copied ? 'Copied!' : 'Copy Text'}
            </button>

            <button
              onClick={handleNativeShare}
              className="py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-sm"
            >
              <Share2 className="w-4 h-4" />
              Share Menu
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-800 text-center block"
        >
          Done & Close
        </button>
      </div>
    </div>
  );
};
