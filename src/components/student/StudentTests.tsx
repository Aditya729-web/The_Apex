import React from 'react';
import { Student, Test } from '../../types';
import { StorageService } from '../../lib/storage';
import { Trophy, Award, Calendar, CheckCircle2 } from 'lucide-react';

interface StudentTestsProps {
  student: Student;
}

export const StudentTests: React.FC<StudentTestsProps> = ({ student }) => {
  const tests = StorageService.getTests().filter(t => t.batchId === student.batchId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Test Series & Performance Ranks</h2>
        <p className="text-sm text-slate-500">View test results, total scores, percentages, and your automatically calculated class rank.</p>
      </div>

      <div className="space-y-4">
        {tests.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 text-slate-400 text-xs">
            No tests conducted for your batch yet.
          </div>
        ) : (
          tests.map(t => {
            const myResult = t.results.find(r => r.studentId === student.id);
            const percentage = myResult ? Math.round((myResult.marksObtained / t.totalMarks) * 100) : 0;

            return (
              <div key={t.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200 uppercase">
                      Test Date: {t.date}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">{t.title}</h3>
                  </div>

                  {myResult ? (
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-600 text-white px-4 py-2 rounded-2xl shadow-md text-center">
                        <span className="text-[10px] font-black uppercase text-indigo-200 block">Class Rank</span>
                        <span className="text-2xl font-black font-mono">#{myResult.rank}</span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-slate-400">Absent / Not Scored</span>
                  )}
                </div>

                {myResult && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-slate-400 block font-medium">Marks Obtained</span>
                      <span className="text-lg font-extrabold text-slate-900 font-mono">
                        {myResult.marksObtained} <span className="text-xs text-slate-400">/ {t.totalMarks}</span>
                      </span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-slate-400 block font-medium">Percentage</span>
                      <span className="text-lg font-extrabold text-indigo-600 font-mono">{percentage}%</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                      <span className="text-slate-400 block font-medium">Performance Grade</span>
                      <span className="text-lg font-extrabold text-emerald-600 font-mono">
                        {percentage >= 90 ? 'A+ (Excellent)' : percentage >= 75 ? 'A (Very Good)' : 'B (Good)'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
