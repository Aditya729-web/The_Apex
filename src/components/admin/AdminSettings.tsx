import React, { useState } from 'react';
import { StorageService } from '../../lib/storage';
import { Database, AlertTriangle, Key, Link } from 'lucide-react';
import { db, collection, getDocs, deleteDoc, doc } from '../../lib/firebase';

export const AdminSettings: React.FC = () => {
  const [wiping, setWiping] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleWipeDatabase = async () => {
    if (!window.confirm("WARNING: This will permanently delete ALL data (Students, Batches, Fees, Notes, etc.) from both your local device and the Firebase cloud database. Are you absolutely sure?")) {
      return;
    }

    setWiping(true);
    setStatusMsg('Wiping database...');
    try {
      // 1. Wipe Firestore Collections
      const collections = ['students', 'batches', 'feeRecords', 'notes', 'doubts', 'tests', 'notifications'];
      for (const collName of collections) {
        const colRef = collection(db, collName);
        const snap = await getDocs(colRef);
        for (const d of snap.docs) {
          await deleteDoc(doc(db, collName, d.id));
        }
      }

      // 2. Wipe Local Storage
      StorageService.saveStudents([]);
      StorageService.saveBatches([]);
      StorageService.saveFeeRecords([]);
      StorageService.saveNotes([]);
      StorageService.saveDoubts([]);
      StorageService.saveTests([]);
      StorageService.saveNotifications([]);
      localStorage.removeItem('apex_db_initialized');

      setStatusMsg('Database wiped completely. Please refresh the page.');
    } catch (err: any) {
      console.error("Wipe failed:", err);
      setStatusMsg('Error wiping database: ' + err.message);
    } finally {
      setWiping(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Database Settings</h2>
        <p className="text-sm text-slate-500">Manage your data and cloud database synchronization.</p>
      </div>

      {statusMsg && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-xs rounded-2xl animate-in fade-in">
          {statusMsg}
        </div>
      )}

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Wipe Database Action */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-red-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-red-700 flex items-center gap-2 pb-2 border-b border-red-100">
            <AlertTriangle className="w-5 h-5 text-red-600" /> Danger Zone: Factory Reset
          </h3>

          <p className="text-xs text-slate-600 font-medium">
            This action will permanently delete all records, users, batches, tests, and fees from both this device and the Cloud Firestore database. It cannot be undone.
          </p>
          
          <button
            onClick={handleWipeDatabase}
            disabled={wiping}
            className="w-full py-3 bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            {wiping ? 'Wiping Database...' : 'Start from Zero (Wipe Database)'}
          </button>
        </div>
      </div>
    </div>
  );
};
