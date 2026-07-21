import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

function privateKey() {
  return (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n')
}

const app = getApps()[0] || initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: privateKey()
  })
})

export const adminAuth = getAuth(app)
export const adminDb = getFirestore(app)
export const ADMIN_UID = process.env.ADMIN_UID || 'Y7hWLggcPsY36p8mfmBqbMligSD3'

export async function requireUser(req, { adminOnly = false } = {}) {
  const header = req.headers.authorization || ''
  if (!header.startsWith('Bearer ')) throw new Error('UNAUTHENTICATED')
  const decoded = await adminAuth.verifyIdToken(header.slice(7))
  if (adminOnly && decoded.uid !== ADMIN_UID) throw new Error('FORBIDDEN')
  return decoded
}

export function sendError(res, error) {
  const message = error?.message || 'Request failed.'
  const code = message === 'UNAUTHENTICATED' ? 401 : message === 'FORBIDDEN' ? 403 : 400
  res.status(code).json({ error: message === 'UNAUTHENTICATED' ? 'Authentication required.' : message === 'FORBIDDEN' ? 'Administrator access required.' : message })
}
