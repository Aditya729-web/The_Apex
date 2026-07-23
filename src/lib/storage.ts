import { syncArrayToFirestore, deleteFromFirestore } from './firebaseSync';
import {
  Batch,
  Student,
  FeeRecord,
  Note,
  Doubt,
  Test,
  TestResult,
  NotificationItem,
  SupabaseConfig
} from '../types';
import {
  INITIAL_BATCHES,
  INITIAL_STUDENTS,
  INITIAL_FEES,
  INITIAL_NOTES,
  INITIAL_DOUBTS,
  INITIAL_TESTS,
  INITIAL_NOTIFICATIONS
} from '../data/mockData';

const KEYS = {
  BATCHES: 'apex_batches_v2',
  STUDENTS: 'apex_students_v2',
  FEES: 'apex_fees_v2',
  NOTES: 'apex_notes_v2',
  DOUBTS: 'apex_doubts_v2',
  TESTS: 'apex_tests_v2',
  NOTIFICATIONS: 'apex_notifications_v2',
  SUPABASE_CONFIG: 'apex_supabase_config_v2'
};

function getItem<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch (e) {
    console.error('Error reading localStorage', e);
    return fallback;
  }
}

function setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error writing to localStorage', e);
  }
}

export class StorageService {
  // Config
  static getSupabaseConfig(): SupabaseConfig {
    const metaEnv = (import.meta as any).env || {};
    return getItem<SupabaseConfig>(KEYS.SUPABASE_CONFIG, {
      url: metaEnv.VITE_SUPABASE_URL || '',
      anonKey: metaEnv.VITE_SUPABASE_ANON_KEY || '',
      isConnected: false
    });
  }

  static saveSupabaseConfig(config: SupabaseConfig): void {
    setItem(KEYS.SUPABASE_CONFIG, config);
  }

  // Batches
  static getBatches(): Batch[] {
    return getItem<Batch[]>(KEYS.BATCHES, INITIAL_BATCHES);
  }

  static saveBatches(batches: Batch[]): void {
    setItem(KEYS.BATCHES, batches);
    syncArrayToFirestore('batches', batches);
  }

  static addBatch(batchData: Omit<Batch, 'id' | 'createdAt'>): Batch {
    const batches = this.getBatches();
    const newBatch: Batch = {
      ...batchData,
      id: 'b-' + Date.now().toString(36),
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updated = [newBatch, ...batches];
    this.saveBatches(updated);
    return newBatch;
  }

  static updateBatch(id: string, batchData: Omit<Batch, 'id' | 'createdAt'>): Batch | null {
    const batches = this.getBatches();
    let updatedBatch: Batch | null = null;
    const updated = batches.map(b => {
      if (b.id === id) {
        updatedBatch = { ...b, ...batchData };
        return updatedBatch;
      }
      return b;
    });
    
    if (updatedBatch) {
      this.saveBatches(updated);
      
      // Update batchTitle in students, notes, etc. if needed
      // To keep it simple, we'll just update the batch.
    }
    return updatedBatch;
  }

  static deleteBatch(id: string): void {
    deleteFromFirestore('batches', id);
    const batches = this.getBatches().filter(b => b.id !== id);
    this.saveBatches(batches);
  }

  // Students
  static getStudents(): Student[] {
    return getItem<Student[]>(KEYS.STUDENTS, INITIAL_STUDENTS);
  }

  static saveStudents(students: Student[]): void {
    setItem(KEYS.STUDENTS, students);
    syncArrayToFirestore('students', students);
  }

  static generateStudentCredentials(): { id: string; pass: string } {
    const year = new Date().getFullYear();
    const existing = this.getStudents();
    const nextNum = 100 + existing.length + 1;
    const id = `APEX${year}${nextNum}`;
    const pass = 'apex' + Math.floor(1000 + Math.random() * 9000);
    return { id, pass };
  }

  static addStudent(studentData: Omit<Student, 'id' | 'password' | 'joiningDate'>): Student {
    const students = this.getStudents();
    const { id, pass } = this.generateStudentCredentials();
    const joiningDate = new Date().toISOString().split('T')[0];

    const batches = this.getBatches();
    const batch = batches.find(b => b.id === studentData.batchId);

    const newStudent: Student = {
      ...studentData,
      id,
      password: pass,
      joiningDate,
      batchTitle: batch ? batch.title : studentData.batchTitle
    };

    const updated = [newStudent, ...students];
    this.saveStudents(updated);

    // Initialize fee records for current month
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
    this.addFeeRecord({
      studentId: newStudent.id,
      studentName: newStudent.name,
      batchId: newStudent.batchId,
      month: currentMonth,
      amount: newStudent.fees,
      status: 'unpaid'
    });

    return newStudent;
  }

  static deleteStudent(id: string): void {
    deleteFromFirestore('students', id);
    const students = this.getStudents().filter(s => s.id !== id);
    this.saveStudents(students);
  }

  // Fees
  static getFeeRecords(): FeeRecord[] {
    return getItem<FeeRecord[]>(KEYS.FEES, INITIAL_FEES);
  }

  static saveFeeRecords(fees: FeeRecord[]): void {
    setItem(KEYS.FEES, fees);
    syncArrayToFirestore('feeRecords', fees);
  }

  static addFeeRecord(feeData: Omit<FeeRecord, 'id'>): FeeRecord {
    const fees = this.getFeeRecords();
    const newRecord: FeeRecord = {
      ...feeData,
      id: 'f-' + Date.now().toString(36)
    };
    const updated = [newRecord, ...fees];
    this.saveFeeRecords(updated);
    return newRecord;
  }

  static updateFeeStatus(
    recordId: string,
    status: 'paid' | 'unpaid' | 'pending_verification',
    transactionRef?: string,
    screenshotUrl?: string
  ): void {
    const fees = this.getFeeRecords();
    const updated = fees.map(f => {
      if (f.id === recordId) {
        return {
          ...f,
          status,
          paidDate: status === 'paid' ? new Date().toISOString().split('T')[0] : f.paidDate,
          transactionRef: transactionRef || f.transactionRef,
          screenshotUrl: screenshotUrl || f.screenshotUrl
        };
      }
      return f;
    });
    this.saveFeeRecords(updated);
  }

  static deleteFeeRecord(id: string): void {
    deleteFromFirestore('feeRecords', id);
    const fees = this.getFeeRecords().filter(f => f.id !== id);
    this.saveFeeRecords(fees);
  }

  // Notes
  static getNotes(): Note[] {
    return getItem<Note[]>(KEYS.NOTES, INITIAL_NOTES);
  }

  static saveNotes(notes: Note[]): void {
    setItem(KEYS.NOTES, notes);
    syncArrayToFirestore('notes', notes);
  }

  static addNote(noteData: Omit<Note, 'id' | 'createdAt'> & { id?: string }): Note {
    const notes = this.getNotes();
    const batches = this.getBatches();
    const batch = batches.find(b => b.id === noteData.batchId);

    const newNote: Note = {
      ...noteData,
      id: noteData.id || 'n-' + Date.now().toString(36),
      batchTitle: batch ? batch.title : noteData.batchTitle,
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updated = [newNote, ...notes];
    this.saveNotes(updated);

    // Notify students
    this.addNotification({
      title: 'New Study Material Notes Uploaded',
      message: `${newNote.title} has been added to batch ${newNote.batchTitle || ''}.`,
      type: 'note',
      timestamp: 'Just now',
      targetRole: 'student',
      read: false
    });

    return newNote;
  }

  static deleteNote(id: string): void {
    deleteFromFirestore('notes', id);
    const notes = this.getNotes().filter(n => n.id !== id);
    this.saveNotes(notes);
  }

  // Doubts
  static getDoubts(): Doubt[] {
    return getItem<Doubt[]>(KEYS.DOUBTS, INITIAL_DOUBTS);
  }

  static saveDoubts(doubts: Doubt[]): void {
    setItem(KEYS.DOUBTS, doubts);
    syncArrayToFirestore('doubts', doubts);
  }

  static addDoubt(doubtData: Omit<Doubt, 'id' | 'status' | 'createdAt'>): Doubt {
    const doubts = this.getDoubts();
    const batches = this.getBatches();
    const batch = batches.find(b => b.id === doubtData.batchId);

    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newDoubt: Doubt = {
      ...doubtData,
      id: 'd-' + Date.now().toString(36),
      batchTitle: batch ? batch.title : doubtData.batchTitle,
      status: 'pending',
      createdAt: formattedDate
    };

    const updated = [newDoubt, ...doubts];
    this.saveDoubts(updated);

    // CRITICAL REQUIREMENT: Trigger Admin notification when student posts a doubt
    this.addNotification({
      title: 'New Student Doubt Received',
      message: `${newDoubt.studentName} (${newDoubt.studentClass}) asked a question in ${newDoubt.subject}.`,
      type: 'doubt',
      timestamp: 'Just now',
      targetRole: 'admin',
      read: false
    });

    return newDoubt;
  }

  static answerDoubt(id: string, answerText: string): void {
    const doubts = this.getDoubts();
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    let targetStudentId = '';
    const updated = doubts.map(d => {
      if (d.id === id) {
        targetStudentId = d.studentId;
        return {
          ...d,
          status: 'answered' as const,
          answerText,
          answeredAt: formattedDate
        };
      }
      return d;
    });

    this.saveDoubts(updated);

    // Notify student
    this.addNotification({
      title: 'Your Doubt Has Been Answered!',
      message: `The Apex Chemistry faculty responded to your doubt regarding chemistry concepts.`,
      type: 'doubt',
      timestamp: 'Just now',
      targetRole: 'student',
      targetStudentId,
      read: false
    });
  }

  static deleteDoubt(id: string): void {
    deleteFromFirestore('doubts', id);
    const doubts = this.getDoubts().filter(d => d.id !== id);
    this.saveDoubts(doubts);
  }

  // Tests & Automatic Rank Handler
  static getTests(): Test[] {
    return getItem<Test[]>(KEYS.TESTS, INITIAL_TESTS);
  }

  static saveTests(tests: Test[]): void {
    setItem(KEYS.TESTS, tests);
    syncArrayToFirestore('tests', tests);
  }

  // Automatic Rank Calculation Helper
  static calculateRanks(results: TestResult[]): TestResult[] {
    // Sort descending by marks
    const sorted = [...results].sort((a, b) => b.marksObtained - a.marksObtained);
    
    // Assign ranks cleanly handling ties
    let currentRank = 1;
    return sorted.map((res, index) => {
      if (index > 0 && res.marksObtained < sorted[index - 1].marksObtained) {
        currentRank = index + 1;
      }
      return {
        ...res,
        rank: currentRank
      };
    });
  }

  static addTest(testData: Omit<Test, 'id' | 'createdAt' | 'results'>, results: TestResult[]): Test {
    const tests = this.getTests();
    const batches = this.getBatches();
    const batch = batches.find(b => b.id === testData.batchId);

    const rankedResults = this.calculateRanks(results);

    const newTest: Test = {
      ...testData,
      id: 't-' + Date.now().toString(36),
      batchTitle: batch ? batch.title : testData.batchTitle,
      results: rankedResults,
      createdAt: new Date().toISOString().split('T')[0]
    };

    const updated = [newTest, ...tests];
    this.saveTests(updated);

    // Notify students
    this.addNotification({
      title: 'New Test Results Published',
      message: `Scores and Ranks for "${newTest.title}" have been released by Admin!`,
      type: 'test',
      timestamp: 'Just now',
      targetRole: 'student',
      read: false
    });

    return newTest;
  }

  // Notifications
  static getNotifications(): NotificationItem[] {
    return getItem<NotificationItem[]>(KEYS.NOTIFICATIONS, INITIAL_NOTIFICATIONS);
  }

  static saveNotifications(notifs: NotificationItem[]): void {
    setItem(KEYS.NOTIFICATIONS, notifs);
    syncArrayToFirestore('notifications', notifs);
  }

  static addNotification(notif: Omit<NotificationItem, 'id'>): NotificationItem {
    const notifs = this.getNotifications();
    const newNotif: NotificationItem = {
      ...notif,
      id: 'n-' + Date.now().toString(36)
    };
    const updated = [newNotif, ...notifs];
    this.saveNotifications(updated);
    return newNotif;
  }

  static markNotificationsRead(role: 'admin' | 'student', studentId?: string): void {
    const notifs = this.getNotifications();
    const updated = notifs.map(n => {
      if (n.targetRole === role && (!studentId || n.targetStudentId === studentId || !n.targetStudentId)) {
        return { ...n, read: true };
      }
      return n;
    });
    this.saveNotifications(updated);
  }
}
