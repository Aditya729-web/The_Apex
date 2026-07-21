import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { firstEnv, requireEnv } from './env.js'

function normalizePrivateKey(value) {
  return String(value || '')
    .trim()
    .replace(/^['"]|['"]$/g, '')
    .replace(/\\n/g, '\n')
}

function getAdminApp() {
  if (getApps().length) return getApps()[0]
  const projectId = requireEnv('Firebase project ID', 'FIREBASE_PROJECT_ID', 'GCLOUD_PROJECT')
  const clientEmail = requireEnv('Firebase client email', 'FIREBASE_CLIENT_EMAIL')
  const privateKey = normalizePrivateKey(requireEnv('Firebase private key', 'FIREBASE_PRIVATE_KEY'))
  return initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) })
}

const app = getAdminApp()
export const adminAuth = getAuth(app)
export const adminDb = getFirestore(app)
export const ADMIN_UID = firstEnv('ADMIN_UID', 'VITE_ADMIN_UID') || 'Y7hWLggcPsY36p8mfmBqbMligSD3'

export async function requireUser(req, { adminOnly = false } = {}) {
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
  if (adminOnly && decoded.uid !== ADMIN_UID) {
    const error = new Error('Administrator access required.')
    error.statusCode = 403
    throw error
  }
  return decoded
}

export function sendError(res, error) {
  console.error(error)
  const status = Number(error?.statusCode) || 400
  const message = error?.message || 'Request failed.'
  res.status(status).json({ error: message })
}
