import { getAdminServices, requireUser, sendError } from '../_lib/firebaseAdmin.js'
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })
  try {
    await requireUser(req, { adminOnly: true })
    const { adminDb } = getAdminServices()
    const { client, bucket } = getSupabaseAdmin()
    const { type, id } = req.body || {}
    const collection = type === 'doubt' ? 'doubts' : type === 'note' ? 'notes' : null
    if (!collection || !id) throw new Error('Invalid delete request.')
    const ref = adminDb.collection(collection).doc(id)
    const snap = await ref.get()
    if (!snap.exists) return res.status(200).json({ ok: true })
    const filePath = snap.data().filePath
    if (filePath) {
      const { error } = await client.storage.from(bucket).remove([filePath])
      if (error) throw new Error(`Supabase delete failed: ${error.message}`)
    }
    await ref.delete()
    return res.status(200).json({ ok: true })
  } catch (error) {
    return sendError(res, error)
  }
}
