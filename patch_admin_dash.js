const fs = require('fs');
let code = fs.readFileSync('src/components/admin/AdminDashboard.tsx', 'utf8');

if (!code.includes('import { useState }')) {
  code = code.replace("import React from 'react';", "import React, { useState } from 'react';\nimport { googleSignIn } from '../../lib/auth';\nimport { syncFeeRemindersToCalendar } from '../../lib/calendar';\nimport { CalendarSync } from 'lucide-react';");
}

const syncFunc = `
  const [isSyncingCalendar, setIsSyncingCalendar] = useState(false);

  const handleSyncCalendar = async () => {
    try {
      setIsSyncingCalendar(true);
      await googleSignIn();
      await syncFeeRemindersToCalendar(students);
      alert('Successfully scheduled automated monthly fee reminders in Google Calendar for all students with emails!');
    } catch (err: any) {
      console.error(err);
      alert('Failed to sync calendar: ' + (err.message || 'Unknown error'));
    } finally {
      setIsSyncingCalendar(false);
    }
  };
`;

if (!code.includes('handleSyncCalendar')) {
  code = code.replace("  const students = StorageService.getStudents();", syncFunc + "\n  const students = StorageService.getStudents();");
}

const buttonHtml = `
          <button
            onClick={handleSyncCalendar}
            disabled={isSyncingCalendar}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            <CalendarSync className="w-3.5 h-3.5" /> {isSyncingCalendar ? 'Syncing...' : 'Sync Calendar'}
          </button>
`;

if (!code.includes('handleSyncCalendar}')) {
  code = code.replace(
    `<button
            onClick={() => onNavigate('students')}`,
    buttonHtml + `          <button
            onClick={() => onNavigate('students')}`
  );
}

fs.writeFileSync('src/components/admin/AdminDashboard.tsx', code);
