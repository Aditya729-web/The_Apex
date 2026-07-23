const fs = require('fs');
let code = fs.readFileSync('src/lib/storage.ts', 'utf8');

// Add import
const importStatement = `import { syncArrayToFirestore, deleteFromFirestore } from './firebaseSync';\n`;
if (!code.includes('firebaseSync')) {
  code = importStatement + code;
}

// Intercept save functions
code = code.replace(/static saveBatches\(batches: Batch\[\]\): void \{[\s\S]*?setItem\(KEYS\.BATCHES, batches\);[\s\S]*?\}/, `static saveBatches(batches: Batch[]): void {\n    setItem(KEYS.BATCHES, batches);\n    syncArrayToFirestore('batches', batches);\n  }`);

code = code.replace(/static saveStudents\(students: Student\[\]\): void \{[\s\S]*?setItem\(KEYS\.STUDENTS, students\);[\s\S]*?\}/, `static saveStudents(students: Student[]): void {\n    setItem(KEYS.STUDENTS, students);\n    syncArrayToFirestore('students', students);\n  }`);

code = code.replace(/static saveFeeRecords\(fees: FeeRecord\[\]\): void \{[\s\S]*?setItem\(KEYS\.FEES, fees\);[\s\S]*?\}/, `static saveFeeRecords(fees: FeeRecord[]): void {\n    setItem(KEYS.FEES, fees);\n    syncArrayToFirestore('feeRecords', fees);\n  }`);

code = code.replace(/static saveNotes\(notes: Note\[\]\): void \{[\s\S]*?setItem\(KEYS\.NOTES, notes\);[\s\S]*?\}/, `static saveNotes(notes: Note[]): void {\n    setItem(KEYS.NOTES, notes);\n    syncArrayToFirestore('notes', notes);\n  }`);

code = code.replace(/static saveDoubts\(doubts: Doubt\[\]\): void \{[\s\S]*?setItem\(KEYS\.DOUBTS, doubts\);[\s\S]*?\}/, `static saveDoubts(doubts: Doubt[]): void {\n    setItem(KEYS.DOUBTS, doubts);\n    syncArrayToFirestore('doubts', doubts);\n  }`);

code = code.replace(/static saveTests\(tests: Test\[\]\): void \{[\s\S]*?setItem\(KEYS\.TESTS, tests\);[\s\S]*?\}/, `static saveTests(tests: Test[]): void {\n    setItem(KEYS.TESTS, tests);\n    syncArrayToFirestore('tests', tests);\n  }`);

code = code.replace(/static saveNotifications\(notifs: NotificationItem\[\]\): void \{[\s\S]*?setItem\(KEYS\.NOTIFICATIONS, notifs\);[\s\S]*?\}/, `static saveNotifications(notifs: NotificationItem[]): void {\n    setItem(KEYS.NOTIFICATIONS, notifs);\n    syncArrayToFirestore('notifications', notifs);\n  }`);

// Intercept delete functions
code = code.replace(/static deleteBatch\(id: string\): void \{/g, `static deleteBatch(id: string): void {\n    deleteFromFirestore('batches', id);`);
code = code.replace(/static deleteStudent\(id: string\): void \{/g, `static deleteStudent(id: string): void {\n    deleteFromFirestore('students', id);`);
code = code.replace(/static deleteFeeRecord\(id: string\): void \{/g, `static deleteFeeRecord(id: string): void {\n    deleteFromFirestore('feeRecords', id);`);
code = code.replace(/static deleteNote\(id: string\): void \{/g, `static deleteNote(id: string): void {\n    deleteFromFirestore('notes', id);`);
code = code.replace(/static deleteDoubt\(id: string\): void \{/g, `static deleteDoubt(id: string): void {\n    deleteFromFirestore('doubts', id);`);

fs.writeFileSync('src/lib/storage.ts', code);
