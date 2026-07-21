import { adminDb, requireUser, sendError } from '../_lib/firebaseAdmin.js'
import { BUCKET, supabaseAdmin } from '../_lib/supabaseAdmin.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  try {
    await requireUser(req, { adminOnly: true })
    const { type, id } = req.body || {}
    const collection = type === 'doubt' ? 'doubts' : type === 'note' ? 'notes' : null
    if (!collection || !id) throw new Error('Invalid delete request.')
    const ref = adminDb.collection(collection).doc(id)
    const snap = await ref.get()
    if (!snap.exists) return res.status(200).json({ ok: true })
    const filePath = snap.data().filePath
    if (filePath) {
      const { error } = await supabaseAdmin.storage.from(BUCKET).remove([filePath])
      if (error) throw error
    }
    await ref.delete()
    res.status(200).json({ ok: true })
  } catch (error) { sendError(res, error) }
}
