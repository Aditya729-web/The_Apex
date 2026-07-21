import { getAdminServices, getAdminUid, requireUser, sendError } from '../_lib/firebaseAdmin.js'
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  try {
    const user = await requireUser(req)
    const { adminDb } = getAdminServices()
    const { client, bucket } = getSupabaseAdmin()
    const { type, id } = req.body || {}
    const collection = type === 'doubt' ? 'doubts' : type === 'note' ? 'notes' : null
    if (!collection || !id) throw new Error('Invalid file request.')
    const snap = await adminDb.collection(collection).doc(id).get()
    if (!snap.exists) throw new Error('File record not found.')
    const data = snap.data()
    if (user.uid !== getAdminUid()) {
      if (type === 'doubt' && data.studentUid !== user.uid) throw new Error('You cannot open this file.')
      if (type === 'note') {
        const student = await adminDb.collection('students').doc(user.uid).get()
        if (!student.exists || student.data().batchId !== data.batchId) throw new Error('You cannot open this file.')
      }
    }
    const { data: signed, error } = await client.storage.from(bucket).createSignedUrl(data.filePath, 300)
    if (error) throw new Error(`Supabase download failed: ${error.message}`)
    return res.status(200).json({ url: signed.signedUrl })
  } catch (error) {
    return sendError(res, error)
  }
}
