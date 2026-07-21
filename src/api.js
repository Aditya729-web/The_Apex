import { createClient } from '@supabase/supabase-js'
import { auth } from './firebase'

async function authFetch(path, options = {}) {
  const user = auth.currentUser
  if (!user) throw new Error('Please sign in again.')
  const token = await user.getIdToken(true)
  let response
  try {
    response = await fetch(path, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...(options.headers || {})
      }
    })
  } catch {
    throw new Error('The server could not be reached. Check the deployment and try again.')
  }
  const text = await response.text()
  let data = {}
  try { data = text ? JSON.parse(text) : {} } catch { data = { error: text } }
  if (!response.ok) throw new Error(data.error || `Request failed with status ${response.status}.`)
  return data
}

export async function createStudentAccount(payload) {
  return authFetch('/api/admin/create-student', { method: 'POST', body: JSON.stringify(payload) })
}

export async function uploadPrivateFile({ file, purpose, batchId }) {
  if (!(file instanceof File) || !file.size) throw new Error('Choose a valid file first.')
  const signed = await authFetch('/api/storage/sign-upload', {
    method: 'POST',
    body: JSON.stringify({
      purpose,
      batchId,
      fileName: file.name,
      contentType: file.type || 'application/octet-stream',
      fileSize: file.size
    })
  })

  const browserUrl = import.meta.env.VITE_SUPABASE_URL || signed.supabaseUrl
  const browserKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY || signed.publishableKey
  const bucket = import.meta.env.VITE_SUPABASE_BUCKET || signed.bucket || 'apex-files'
  if (!browserUrl) throw new Error('Supabase URL is missing on the server.')
  if (!browserKey) throw new Error('Supabase publishable key is missing. Add SUPABASE_PUBLISHABLE_KEY in Vercel.')

  const client = createClient(browserUrl, browserKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  })
  const { error } = await client.storage
    .from(bucket)
    .uploadToSignedUrl(signed.path, signed.token, file, {
      contentType: file.type || 'application/octet-stream',
      upsert: false
    })
  if (error) throw new Error(`PDF upload failed: ${error.message}`)
  return signed.path
}

export async function getPrivateDownloadUrl({ type, id }) {
  const data = await authFetch('/api/storage/sign-download', {
    method: 'POST', body: JSON.stringify({ type, id })
  })
  return data.url
}

export async function deletePrivateFile({ type, id }) {
  return authFetch('/api/storage/delete', { method: 'POST', body: JSON.stringify({ type, id }) })
}
