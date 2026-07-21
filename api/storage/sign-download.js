import { adminDb, ADMIN_UID, requireUser, sendError } from '../_lib/firebaseAdmin.js'
import { BUCKET, supabaseAdmin } from '../_lib/supabaseAdmin.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  try {
    const user = await requireUser(req)
    const { type, id } = req.body || {}
    const collection = type === 'doubt' ? 'doubts' : type === 'note' ? 'notes' : null
    if (!collection || !id) throw new Error('Invalid file request.')
    const snap = await adminDb.collection(collection).doc(id).get()
    if (!snap.exists) throw new Error('File record not found.')
    const data = snap.data()
    if (user.uid !== ADMIN_UID) {
      if (type === 'doubt' && data.studentUid !== user.uid) throw new Error('FORBIDDEN')
      if (type === 'note') {
        const student = await adminDb.collection('students').doc(user.uid).get()
        if (!student.exists || student.data().batchId !== data.batchId) throw new Error('FORBIDDEN')
      }
    }
    const { data: signed, error } = await supabaseAdmin.storage.from(BUCKET).createSignedUrl(data.filePath, 300)
    if (error) throw error
    res.status(200).json({ url: signed.signedUrl })
  } catch (error) { sendError(res, error) }
}
