import React, { useState } from 'react';
import { StorageService } from '../../lib/storage';
import { Test, Batch, Student, TestResult } from '../../types';
import { Award, Plus, Trophy, CheckCircle2, Trash2 } from 'lucide-react';

export const AdminTests: React.FC = () => {
  const [batches] = useState<Batch[]>(() => StorageService.getBatches());
  const [students] = useState<Student[]>(() => StorageService.getStudents());
  const [tests, setTests] = useState<Test[]>(() => StorageService.getTests());

  // Batch Dropdown Selection
  const [selectedBatchId, setSelectedBatchId] = useState<string>(batches[0]?.id || '');
  const [filterBatchId, setFilterBatchId] = useState<string>('ALL');

  // Test Creation Form State
  const [title, setTitle] = useState('');
  const [totalMarks, setTotalMarks] = useState(100);
  const [testDate, setTestDate] = useState(new Date().toISOString().split('T')[0]);

  // Student Marks Input map { studentId: score }
  const [studentMarksMap, setStudentMarksMap] = useState<Record<string, number>>({});

  const refreshTests = () => {
    setTests(StorageService.getTests());
  };

  const batchStudents = students.filter(s => s.batchId === selectedBatchId);

  const handleScoreChange = (studentId: string, value: number) => {
    setStudentMarksMap(prev => ({
      ...prev,
      [studentId]: value
    }));
  };

  const handleCreateTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !selectedBatchId) return;

    // Collect results array
    const results: TestResult[] = batchStudents.map(s => {
      const marksObtained = Number(studentMarksMap[s.id] ?? 0);
      return {
        studentId: s.id,
        studentName: s.name,
        marksObtained
      };
    });

    // Storage engine automatically handles rank calculation!
    StorageService.addTest(
      {
        title,
        batchId: selectedBatchId,
        totalMarks: Number(totalMarks),
        date: testDate
      },
      results
    );

    refreshTests();
    setTitle('');
    setStudentMarksMap({});
  };

  const handleDeleteTest = (id: string) => {
    const updated = tests.filter(t => t.id !== id);
    StorageService.saveTests(updated);
    refreshTests();
  };

  const filteredTests = tests.filter(t => filterBatchId === 'ALL' || t.batchId === filterBatchId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Test Series & Automatic Rank Panel</h2>
        <p className="text-sm text-slate-500">Create batch tests, enter student scores, and the website handles class ranks automatically.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Create Test & Enter Marks Form */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
            <Award className="w-5 h-5 text-indigo-600" /> Create Test & Enter Marks
          </h3>

          <form onSubmit={handleCreateTestSubmit} className="space-y-4">
            {/* Batch Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Select Batch *</label>
              <select
                required
                value={selectedBatchId}
                onChange={e => setSelectedBatchId(e.target.value)}
                className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none font-semibold"
              >
                {batches.map(b => (
                  <option key={b.id} value={b.id}>
                    {b.title} ({b.className})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Test Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. JEE Main Mock Test - Thermodynamics"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Total Marks *</label>
                <input
                  type="number"
                  required
                  value={totalMarks}
                  onChange={e => setTotalMarks(Number(e.target.value))}
                  className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Test Date *</label>
                <input
                  type="date"
                  required
                  value={testDate}
                  onChange={e => setTestDate(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>
            </div>

            {/* Student Marks Entry Table */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Enter Marks for Enrolled Batch Students ({batchStudents.length}):
              </label>

              {batchStudents.length === 0 ? (
                <p className="p-4 bg-slate-50 text-center rounded-xl text-xs text-slate-400">
                  No students currently enrolled in this batch.
                </p>
              ) : (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {batchStudents.map(student => (
                    <div key={student.id} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <div>
                        <p className="text-xs font-bold text-slate-900">{student.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono">{student.id}</p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          max={totalMarks}
                          placeholder="0"
                          value={studentMarksMap[student.id] ?? ''}
                          onChange={e => handleScoreChange(student.id, Number(e.target.value))}
                          className="w-20 text-xs px-2 py-1.5 border border-slate-300 rounded-lg text-right font-bold focus:ring-2 focus:ring-indigo-600 outline-none"
                        />
                        <span className="text-xs font-semibold text-slate-400">/ {totalMarks}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={batchStudents.length === 0}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-xl shadow-lg transition-all"
            >
              Publish Test Scores & Auto-Calculate Ranks
            </button>
          </form>
        </div>

        {/* Test Records & Leaderboards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900">Published Tests & Ranks</h3>

            <select
              value={filterBatchId}
              onChange={e => setFilterBatchId(e.target.value)}
              className="w-full sm:w-auto text-xs px-3 py-2 sm:py-1.5 border border-slate-300 rounded-xl outline-none"
            >
              <option value="ALL">All Batches</option>
              {batches.map(b => (
                <option key={b.id} value={b.id}>
                  {b.title}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            {filteredTests.length === 0 ? (
              <p className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
                No tests published yet.
              </p>
            ) : (
              filteredTests.map(t => (
                <div key={t.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        Total Marks: {t.totalMarks} • Date: {t.date}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 mt-1">{t.title}</h4>
                      <p className="text-xs text-slate-500">Batch: {t.batchTitle}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteTest(t.id)}
                      className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Leaderboard Table with Auto Ranks */}
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" /> Class Rank Standings (Auto-Calculated)
                    </p>
                    <div className="space-y-1.5 max-h-40 overflow-y-auto text-xs">
                      {t.results.map(r => (
                        <div
                          key={r.studentId}
                          className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                                r.rank === 1
                                  ? 'bg-amber-400 text-slate-950 font-black'
                                  : r.rank === 2
                                  ? 'bg-slate-300 text-slate-900'
                                  : r.rank === 3
                                  ? 'bg-amber-700 text-white'
                                  : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              #{r.rank}
                            </span>
                            <span className="font-bold text-slate-900">{r.studentName}</span>
                          </div>

                          <div className="font-mono text-slate-800 font-bold">
                            {r.marksObtained} / {t.totalMarks}
                            <span className="text-[10px] text-slate-400 ml-1">
                              ({Math.round((r.marksObtained / t.totalMarks) * 100)}%)
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
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
