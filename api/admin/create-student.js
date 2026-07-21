import { FieldValue } from 'firebase-admin/firestore'
import { getAdminServices, requireUser, sendError } from '../_lib/firebaseAdmin.js'

const safeId = () => `APEX${Date.now().toString().slice(-7)}${Math.floor(Math.random() * 90 + 10)}`
const safePassword = () => `Apex@${Math.floor(100000 + Math.random() * 900000)}`

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  try {
    await requireUser(req, { adminOnly: true })
    const { adminAuth, adminDb } = getAdminServices()
    const { name, className, batchId, batchName, monthlyFee } = req.body || {}
    if (!name || !className || !batchId || !batchName) {
      const error = new Error('Name, class and batch are required.')
      error.statusCode = 400
      throw error
    }
    const studentId = safeId()
    const password = safePassword()
    const email = `${studentId.toLowerCase()}@students.theapex.local`
    const user = await adminAuth.createUser({ email, password, displayName: String(name).trim(), emailVerified: true })
    try {
      await adminDb.collection('students').doc(user.uid).set({
        name: String(name).trim(), studentId, email,
        className: String(className).trim(), batchId: String(batchId), batchName: String(batchName),
        monthlyFee: Number(monthlyFee || 0), status: 'active', createdAt: FieldValue.serverTimestamp()
      })
    } catch (error) {
      await adminAuth.deleteUser(user.uid).catch(() => {})
      throw error
    }
    return res.status(200).json({ uid: user.uid, studentId, password, name: String(name).trim() })
  } catch (error) {
    return sendError(res, error)
  }
}
