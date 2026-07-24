import React, { useState, useEffect } from 'react';
import { X, Clock, Upload, CheckCircle2, AlertCircle, RefreshCw, Smartphone } from 'lucide-react';
import { StorageService } from '../lib/storage';
import imageCompression from 'browser-image-compression';
import { uploadFileChunks } from '../lib/fileChunks';

interface PayFeesModalProps {
  isOpen: boolean;
  onClose: () => void;
  feeRecord: {
    id: string;
    month: string;
    amount: number;
    studentName: string;
    studentId: string;
  } | null;
  onSuccess?: () => void;
}

export const PayFeesModal: React.FC<PayFeesModalProps> = ({
  isOpen,
  onClose,
  feeRecord,
  onSuccess
}) => {
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes (120 seconds)
  const [isExpired, setIsExpired] = useState(false);
  const [transactionRef, setTransactionRef] = useState('');
  const [screenshotName, setScreenshotName] = useState('');
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Initialize or restart payment timer
  useEffect(() => {
    if (isOpen && feeRecord) {
      setLoading(true);
      setIsExpired(false);
      setTimeLeft(120);
      setSubmitted(false);
      setTransactionRef('');
      setScreenshotName('');
      setScreenshotFile(null);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 900); // simulate 0.9s secure QR generation loading

      return () => clearTimeout(timer);
    }
  }, [isOpen, feeRecord]);

  // Countdown clock effect
  useEffect(() => {
    if (!isOpen || loading || isExpired || submitted) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, loading, isExpired, submitted]);

  if (!isOpen || !feeRecord) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshotName(e.target.files[0].name);
      setScreenshotFile(e.target.files[0]);
    }
  };

  const handleSubmitProof = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feeRecord) return;

    setUploading(true);
    let screenshotBase64 = '';
    
    if (screenshotFile) {
      try {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1024,
          useWebWorker: true
        };
        const compressedFile = await imageCompression(screenshotFile, options);
        
        // Convert to base64
        screenshotBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(compressedFile);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
        });
      } catch (err) {
        console.error('Error compressing screenshot:', err);
        alert('Failed to process screenshot. Please try again.');
        setUploading(false);
        return;
      }
    }

    // Update status to pending verification or paid
    let finalScreenshotUrl = screenshotBase64;
    
    if (screenshotBase64) {
      const fileId = `fee-${Date.now()}`;
      await uploadFileChunks(fileId, screenshotBase64);
      finalScreenshotUrl = `chunked:${fileId}`;
    }

    StorageService.updateFeeStatus(
      feeRecord.id,
      'pending_verification',
      transactionRef || 'UPI-' + Math.floor(100000 + Math.random() * 900000),
      finalScreenshotUrl || undefined
    );

    // Notify Admin
    StorageService.addNotification({
      title: 'Fee Payment Proof Uploaded',
      message: `${feeRecord.studentName} paid ₹${feeRecord.amount} for ${feeRecord.month} via UPI. Pending verification.`,
      type: 'payment_received',
      timestamp: 'Just now',
      targetRole: 'admin',
      read: false
    });

    setUploading(false);
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const restartTimer = () => {
    setLoading(true);
    setIsExpired(false);
    setTimeLeft(120);
    setTimeout(() => setLoading(false), 600);
  };

  // Construct precise UPI URL for QR Code SVG
  const upiId = 'suvoyom@oksbi';
  const name = 'suvomoy mandal';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${feeRecord.amount}&cu=INR&tn=${encodeURIComponent(
      `Fee for ${feeRecord.month}`
    )}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 border border-slate-200 relative my-auto scrollbar-thin">
        {/* Top Header */}
        <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 mb-3 sticky top-0 bg-white z-20">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Pay Monthly Fees</h3>
            <p className="text-xs text-slate-500">The Apex Chemistry • {feeRecord.month}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm font-semibold text-slate-700">Generating Secure UPI QR Code...</p>
            <p className="text-xs text-slate-400">Please wait while amount ₹{feeRecord.amount.toLocaleString()} is configured.</p>
          </div>
        ) : submitted ? (
          /* Submitted State */
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Payment Submitted!</h4>
            <p className="text-xs text-slate-600 px-2">
              Your screenshot and payment reference have been sent to <span className="font-semibold text-indigo-600">The Apex Chemistry</span> for verification.
            </p>
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 font-mono text-slate-700">
              <div className="flex justify-between"><span>Student:</span><span className="font-bold">{feeRecord.studentName}</span></div>
              <div className="flex justify-between"><span>Month:</span><span className="font-bold">{feeRecord.month}</span></div>
              <div className="flex justify-between"><span>Amount Paid:</span><span className="font-bold text-emerald-600">₹{feeRecord.amount}</span></div>
              <div className="flex justify-between"><span>Ref ID:</span><span className="font-bold">{transactionRef || 'Submitted'}</span></div>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md text-xs"
            >
              Back to Dashboard
            </button>
          </div>
        ) : (
          /* Active / Expired QR State */
          <div className="space-y-3">
            {/* QR Code Container */}
            <div className="bg-slate-50 rounded-2xl p-3.5 text-center border border-slate-200 shadow-sm relative">
              {/* Account Header */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  SM
                </div>
                <div className="text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">suvomoy mandal</h4>
                  <p className="text-[10px] text-slate-500">The Apex Chemistry</p>
                </div>
              </div>

              {/* QR Image Frame */}
              {!isExpired ? (
                <div className="relative inline-block bg-white p-2.5 rounded-2xl shadow-md border border-slate-200 my-0.5">
                  <img
                    src={qrCodeUrl}
                    alt="UPI QR Code"
                    className="w-40 h-40 sm:w-44 sm:h-44 object-contain mx-auto"
                  />
                  {/* Google Pay / UPI badge center icon */}
                  <div className="mt-1.5 text-[11px] font-mono font-medium text-slate-600">
                    UPI ID: <span className="font-bold text-slate-900">{upiId}</span>
                  </div>
                </div>
              ) : (
                <div className="w-40 h-40 sm:w-44 sm:h-44 mx-auto bg-slate-200/70 rounded-2xl flex flex-col items-center justify-center p-3 text-center space-y-1.5 border border-slate-300 my-0.5">
                  <AlertCircle className="w-8 h-8 text-indigo-600" />
                  <p className="text-xs font-bold text-slate-800">QR Code Expired</p>
                  <p className="text-[10px] text-slate-500">2-minute payment window elapsed.</p>
                  <button
                    onClick={restartTimer}
                    className="mt-1 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-lg flex items-center gap-1 shadow-sm"
                  >
                    <RefreshCw className="w-3 h-3" /> Regenerate QR
                  </button>
                </div>
              )}

              {/* Fee Amount displaying at bottom of QR */}
              <div className="mt-2 pt-2 border-t border-slate-200 flex justify-between items-center px-2">
                <span className="text-xs text-slate-500 font-medium">Total Payable Fees:</span>
                <span className="text-lg sm:text-xl font-extrabold text-indigo-600">₹{feeRecord.amount.toLocaleString()}</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5">Scan with Google Pay, PhonePe, Paytm, or BHIM</p>
            </div>

            {/* Crucial Instruction Notice */}
            <div className="bg-indigo-50 border border-indigo-200 text-indigo-900 rounded-xl p-2.5 text-xs flex items-start gap-2">
              <Smartphone className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Important:</span> Send the payment screenshot to <span className="font-semibold">The Apex Chemistry</span> for instant account update and confirmation.
              </div>
            </div>

            {/* 2-Minute Timer Bar */}
            {!isExpired && (
              <div className="flex items-center justify-between bg-slate-900 text-white px-3.5 py-2 rounded-xl shadow-inner">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <Clock className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                  <span>QR Code valid for:</span>
                </div>
                <span className="font-mono text-sm sm:text-base font-bold text-indigo-400">{formatTime(timeLeft)}</span>
              </div>
            )}

            {/* Proof Submission Form */}
            <form onSubmit={handleSubmitProof} className="space-y-2.5">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-0.5">
                  UPI Transaction Ref / UTR Number (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 420918736192"
                  value={transactionRef}
                  onChange={e => setTransactionRef(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-0.5">
                  Upload Payment Screenshot
                </label>
                <div className="relative border border-dashed border-slate-300 rounded-lg p-2 text-center hover:bg-slate-50 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                    <Upload className="w-4 h-4 text-indigo-600" />
                    <span className="truncate">{screenshotName || 'Click or drop screenshot here'}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isExpired || uploading}
                className={`w-full py-2.5 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 ${
                  isExpired || uploading
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'
                }`}
              >
                {uploading ? (
                  <div className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
                {uploading ? 'Uploading & Submitting...' : 'Confirm Payment & Submit Screenshot'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
