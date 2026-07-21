import crypto from 'node:crypto'
import { adminDb, ADMIN_UID, requireUser, sendError } from '../_lib/firebaseAdmin.js'
import { BUCKET, SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL, supabaseAdmin } from '../_lib/supabaseAdmin.js'

const clean = value => String(value || 'file').replace(/[^a-zA-Z0-9._-]/g, '_').slice(-120)
const allowedNoteTypes = new Set([
  'application/pdf', 'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'image/png', 'image/jpeg', 'text/plain', 'application/zip', 'application/x-zip-compressed'
])

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  try {
    const user = await requireUser(req)
    const { purpose, batchId, fileName, contentType, fileSize } = req.body || {}
    if (!['note', 'doubt'].includes(purpose)) throw new Error('Invalid upload purpose.')
    if (!fileName) throw new Error('Choose a file to upload.')
    if (Number(fileSize || 0) > 50 * 1024 * 1024) throw new Error('The maximum supported file size is 50 MB.')
    if (purpose === 'note' && contentType && !allowedNoteTypes.has(contentType)) {
      throw new Error('Unsupported note format. Upload a PDF, document, presentation, image, ZIP or text file.')
    }

    let folder
    if (purpose === 'note') {
      if (user.uid !== ADMIN_UID) {
        const error = new Error('Only the administrator can upload notes.')
        error.statusCode = 403
        throw error
      }
      if (!batchId) throw new Error('Select a batch.')
      folder = `notes/${clean(batchId)}`
    } else {
      const student = await adminDb.collection('students').doc(user.uid).get()
      if (!student.exists || student.data().status !== 'active') throw new Error('Student account is unavailable.')
      folder = `doubts/${user.uid}`
    }

    const path = `${folder}/${Date.now()}-${crypto.randomUUID()}-${clean(fileName)}`
    const { data, error } = await supabaseAdmin.storage.from(BUCKET).createSignedUploadUrl(path)
    if (error) throw new Error(`Supabase could not create an upload link: ${error.message}`)

    res.status(200).json({
      path,
      token: data.token,
      supabaseUrl: SUPABASE_URL,
      publishableKey: SUPABASE_PUBLISHABLE_KEY,
      bucket: BUCKET
    })
  } catch (error) {
    sendError(res, error)
  }
}
