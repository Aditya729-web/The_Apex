import { FieldValue } from 'firebase-admin/firestore'
import { adminDb } from '../_lib/firebaseAdmin.js'

function indiaParts() {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date())
  return Object.fromEntries(parts.map(p => [p.type, p.value]))
}

export default async function handler(req, res) {
  const expected = process.env.CRON_SECRET
  if (!expected || req.headers.authorization !== `Bearer ${expected}`) return res.status(401).json({ error: 'Unauthorized.' })
  const { year, month, day } = indiaParts()
  if (day !== '05') return res.status(200).json({ skipped: true, reason: 'Not the 5th in Asia/Kolkata.' })
  const key = `${year}-${month}`
  const runRef = adminDb.collection('automationRuns').doc(`monthly-fees-${key}`)
  if ((await runRef.get()).exists) return res.status(200).json({ skipped: true, reason: 'Already completed.' })
  const students = await adminDb.collection('students').where('status', '==', 'active').get()
  let count = 0
  for (const studentDoc of students.docs) {
    const s = studentDoc.data()
    const feeRef = adminDb.collection('fees').doc(`${studentDoc.id}_${key}`)
    const feeSnap = await feeRef.get()
    if (!feeSnap.exists) {
      await feeRef.set({ studentUid: studentDoc.id, studentName: s.name, studentId: s.studentId, batchId: s.batchId, month: key, amount: Number(s.monthlyFee || 0), status: 'due', createdAt: FieldValue.serverTimestamp() })
    }
    const allFees = await adminDb.collection('fees').where('studentUid', '==', studentDoc.id).get()
    const previousDue = allFees.docs.map(d => d.data()).filter(f => f.status !== 'paid' && f.month < key).sort((a,b) => a.month.localeCompare(b.month))
    const previousText = previousDue.length ? ` Previous dues: ${previousDue.map(f => f.month).join(', ')}.` : ''
    await adminDb.collection('notifications').doc(`auto-fee-${studentDoc.id}-${key}`).set({
      studentUid: studentDoc.id, title: `Fee reminder for ${key}`,
      message: `Your fee of ₹${Number(s.monthlyFee || 0).toLocaleString('en-IN')} for ${key} is due.${previousText}`,
      type: 'fee', month: key, read: false, sentBy: 'system', createdAt: FieldValue.serverTimestamp()
    })
    count += 1
  }
  await runRef.set({ completedAt: FieldValue.serverTimestamp(), studentsNotified: count })
  res.status(200).json({ ok: true, studentsNotified: count })
}
