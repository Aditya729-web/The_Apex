import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyAsZwilzqFBeTLXULpYgffU4EOUIFLZL-0",
  authDomain: "theapexchemistry.firebaseapp.com",
  projectId: "theapexchemistry",
  storageBucket: "theapexchemistry.firebasestorage.app",
  messagingSenderId: "735310900629",
  appId: "1:735310900629:web:ead0b2f84d0420072f9a9c"
}

export const app = getApps().find(a => a.name === '[DEFAULT]') || initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
