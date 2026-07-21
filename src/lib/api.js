import { auth } from './firebase'

export async function api(path, options = {}) {
  const token = await auth?.currentUser?.getIdToken()
  const headers = { ...(options.headers || {}) }
  if (!(options.body instanceof FormData)) headers['Content-Type'] = 'application/json'
  if (token) headers.Authorization = `Bearer ${token}`
  const response = await fetch(path, { ...options, headers })
  const text = await response.text()
  let data = {}
  try { data = text ? JSON.parse(text) : {} } catch { data = { error: text || 'Unexpected server response' } }
  if (!response.ok) throw new Error(data.error || `Request failed (${response.status})`)
  return data
}
