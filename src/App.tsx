import React, { useState, useEffect } from 'react';
import { Role, Student } from './types';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { LoginModal } from './components/LoginModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminStudents } from './components/admin/AdminStudents';
import { AdminBatches } from './components/admin/AdminBatches';
import { AdminFees } from './components/admin/AdminFees';
import { AdminNotes } from './components/admin/AdminNotes';
import { AdminDoubts } from './components/admin/AdminDoubts';
import { AdminTests } from './components/admin/AdminTests';
import { AdminSettings } from './components/admin/AdminSettings';
import { StudentDashboard } from './components/student/StudentDashboard';
import { StudentFees } from './components/student/StudentFees';
import { StudentNotes } from './components/student/StudentNotes';
import { StudentTests } from './components/student/StudentTests';
import { StudentDoubts } from './components/student/StudentDoubts';
import { StudentProfile } from './components/student/StudentProfile';
import { StudentHelp } from './components/student/StudentHelp';
import { StorageService } from './lib/storage';
import { runMonthlyFeeReminderTask } from './lib/scheduledTasks';

export default function App() {
  const [role, setRole] = useState<Role>('guest');
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Scheduled Task: Automatically run 5th-day monthly fee reminder on app initialization
  useEffect(() => {
    runMonthlyFeeReminderTask();
  }, []);

  // Handle Login
  const handleLoginSuccess = (userRole: Role, studentObj?: Student) => {
    setRole(userRole);
    if (userRole === 'student' && studentObj) {
      setCurrentStudent(studentObj);
      setActiveTab('dashboard');
    } else if (userRole === 'admin') {
      setCurrentStudent(null);
      setActiveTab('dashboard');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setRole('guest');
    setCurrentStudent(null);
    setActiveTab('home');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        role={role}
        currentStudent={currentStudent}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {role === 'guest' ? (
          <LandingPage
            onLoginClick={() => setIsLoginModalOpen(true)}
            onExploreCourses={() => setIsLoginModalOpen(true)}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {role === 'admin' && (
              <>
                {activeTab === 'dashboard' && <AdminDashboard onNavigate={setActiveTab} />}
                {activeTab === 'students' && <AdminStudents />}
                {activeTab === 'batches' && <AdminBatches />}
                {activeTab === 'fees' && <AdminFees />}
                {activeTab === 'notes' && <AdminNotes />}
                {activeTab === 'doubts' && <AdminDoubts />}
                {activeTab === 'tests' && <AdminTests />}
                {activeTab === 'settings' && <AdminSettings />}
              </>
            )}

            {role === 'student' && currentStudent && (
              <>
                {activeTab === 'dashboard' && (
                  <StudentDashboard
                    student={currentStudent}
                    onNavigate={setActiveTab}
                    onPayFees={() => setActiveTab('fees')}
                  />
                )}
                {activeTab === 'fees' && <StudentFees student={currentStudent} />}
                {activeTab === 'notes' && <StudentNotes student={currentStudent} />}
                {activeTab === 'tests' && <StudentTests student={currentStudent} />}
                {activeTab === 'doubts' && <StudentDoubts student={currentStudent} />}
                {activeTab === 'profile' && <StudentProfile student={currentStudent} />}
                {activeTab === 'help' && <StudentHelp student={currentStudent} />}
              </>
            )}
          </div>
        )}
      </main>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
