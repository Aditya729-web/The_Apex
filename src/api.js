import { auth } from './firebase'
import { supabase, SUPABASE_BUCKET } from './supabase'

async function authFetch(path, options = {}) {
  const token = await auth.currentUser?.getIdToken()
  if (!token) throw new Error('Please sign in again.')
  const response = await fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers || {})
    }
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || 'Request failed.')
  return data
}

export async function createStudentAccount(payload) {
  return authFetch('/api/admin/create-student', { method: 'POST', body: JSON.stringify(payload) })
}

export async function uploadPrivateFile({ file, purpose, batchId }) {
  if (!supabase) throw new Error('Supabase environment variables are missing.')
  const signed = await authFetch('/api/storage/sign-upload', {
    method: 'POST',
    body: JSON.stringify({ purpose, batchId, fileName: file.name, contentType: file.type || 'application/octet-stream' })
  })
  const { error } = await supabase.storage
    .from(SUPABASE_BUCKET)
    .uploadToSignedUrl(signed.path, signed.token, file, { contentType: file.type || 'application/octet-stream' })
  if (error) throw error
  return signed.path
}

export async function getPrivateDownloadUrl({ type, id }) {
  const data = await authFetch('/api/storage/sign-download', {
    method: 'POST',
    body: JSON.stringify({ type, id })
  })
  return data.url
}

export async function deletePrivateFile({ type, id }) {
  return authFetch('/api/storage/delete', { method: 'POST', body: JSON.stringify({ type, id }) })
}
