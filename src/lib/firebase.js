import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const required = ['VITE_FIREBASE_API_KEY','VITE_FIREBASE_AUTH_DOMAIN','VITE_FIREBASE_PROJECT_ID','VITE_FIREBASE_APP_ID'];
const missing = required.filter(k => !import.meta.env[k]);
export const clientConfigError = missing.length ? `Missing browser variables: ${missing.join(', ')}` : '';
const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'missing',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'missing',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'missing',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'missing'
});
export const auth = getAuth(app);
export const db = getFirestore(app);
export const ADMIN_UID = import.meta.env.VITE_ADMIN_UID || 'Y7hWLggcPsY36p8mfmBqbMligSD3';
