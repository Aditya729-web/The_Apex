import crypto from 'node:crypto'
import { adminDb, ADMIN_UID, requireUser, sendError } from '../_lib/firebaseAdmin.js'
import { BUCKET, supabaseAdmin } from '../_lib/supabaseAdmin.js'

const clean = value => String(value || 'file').replace(/[^a-zA-Z0-9._-]/g, '_').slice(-120)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  try {
    const user = await requireUser(req)
    const { purpose, batchId, fileName } = req.body || {}
    if (!['note', 'doubt'].includes(purpose)) throw new Error('Invalid upload purpose.')
    let folder
    if (purpose === 'note') {
      if (user.uid !== ADMIN_UID) throw new Error('FORBIDDEN')
      if (!batchId) throw new Error('Select a batch.')
      folder = `notes/${batchId}`
    } else {
      const student = await adminDb.collection('students').doc(user.uid).get()
      if (!student.exists || student.data().status !== 'active') throw new Error('Student account is unavailable.')
      folder = `doubts/${user.uid}`
    }
    const path = `${folder}/${Date.now()}-${crypto.randomUUID()}-${clean(fileName)}`
    const { data, error } = await supabaseAdmin.storage.from(BUCKET).createSignedUploadUrl(path)
    if (error) throw error
    res.status(200).json({ path, token: data.token })
  } catch (error) { sendError(res, error) }
}
