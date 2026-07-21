import { auth } from './firebase';
export async function api(path, options = {}) {
  const token = auth.currentUser ? await auth.currentUser.getIdToken() : '';
  const response = await fetch(path, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(options.headers || {}) }
  });
  const text = await response.text();
  let body; try { body = text ? JSON.parse(text) : {}; } catch { body = { error: text || `HTTP ${response.status}` }; }
  if (!response.ok) throw new Error(body.error || body.message || `Request failed (${response.status})`);
  return body;
}
