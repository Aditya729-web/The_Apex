import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { firstEnv, requireEnv } from './env.js'

function normalizePrivateKey(value) {
  let key = String(value || '').trim()
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1)
  }
  key = key.replace(/\\n/g, '\n')
  if (!key.includes('BEGIN PRIVATE KEY') || !key.includes('END PRIVATE KEY')) {
    const error = new Error('FIREBASE_PRIVATE_KEY is invalid. Paste the complete private_key value from the Firebase service-account JSON.')
    error.statusCode = 500
    throw error
  }
  return key
}

export function getAdminServices() {
  try {
    let app = getApps()[0]
    if (!app) {
      const projectId = requireEnv('Firebase project ID', 'FIREBASE_PROJECT_ID', 'GCLOUD_PROJECT')
      const clientEmail = requireEnv('Firebase client email', 'FIREBASE_CLIENT_EMAIL')
      const privateKey = normalizePrivateKey(requireEnv('Firebase private key', 'FIREBASE_PRIVATE_KEY'))
      app = initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) })
    }
    return { adminAuth: getAuth(app), adminDb: getFirestore(app) }
  } catch (error) {
    if (!error.statusCode) error.statusCode = 500
    throw error
  }
}

export function getAdminUid() {
  return firstEnv('ADMIN_UID', 'VITE_ADMIN_UID') || 'Y7hWLggcPsY36p8mfmBqbMligSD3'
}

export async function requireUser(req, { adminOnly = false } = {}) {
  const { adminAuth } = getAdminServices()
  const header = req.headers.authorization || ''
  if (!header.startsWith('Bearer ')) {
    const error = new Error('Authentication required. Please sign in again.')
    error.statusCode = 401
    throw error
  }
  let decoded
  try {
    decoded = await adminAuth.verifyIdToken(header.slice(7))
  } catch {
    const error = new Error('Your login session is invalid or expired. Please sign in again.')
    error.statusCode = 401
    throw error
  }
  if (adminOnly && decoded.uid !== getAdminUid()) {
    const error = new Error('Administrator access required.')
    error.statusCode = 403
    throw error
  }
  return decoded
}

export function sendError(res, error) {
  console.error('API_ERROR', error)
  const status = Number(error?.statusCode) || 500
  const message = error?.message || 'The server could not complete this request.'
  if (!res.headersSent) res.status(status).json({ error: message })
}
