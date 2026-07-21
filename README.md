# The Apex Chemistry — Production Portal

A clean React + Vite portal for Vercel using Firebase Authentication, Firestore, Firebase Admin and private Supabase Storage.

## Features
- Admin and student login
- Secure server-side student creation and deletion
- Student ID login with generated internal Firebase email
- Batch management
- Twelve-month fee ledger
- Admin and automated fee reminders
- Private PDF notes uploaded directly to Supabase signed URLs
- Student-specific notes, alerts and doubts
- Doubt image upload and teacher replies
- Credential copy/share
- Responsive dashboard
- Node.js 24 Vercel Functions

## 1. Firebase
Enable Email/Password Authentication. Create the admin account manually and ensure its UID equals `ADMIN_UID`.

Deploy Firestore rules:
```bash
npx firebase-tools deploy --only firestore
```

Create a Firebase service account in Project settings > Service accounts and copy its project ID, client email and private key to Vercel.

## 2. Supabase
Run `supabase-bucket.sql`. Keep the bucket private. Rotate any secret previously exposed and use the new secret only as a server environment variable.

## 3. Vercel variables
Copy every variable from `.env.example` into Project Settings > Environment Variables. Apply browser (`VITE_`) variables and server variables to Production, Preview and Development as needed.

For `FIREBASE_PRIVATE_KEY`, paste the complete JSON `private_key`. Vercel accepts the multiline value. The code also supports escaped `\\n` line breaks.

## 4. Deploy
```bash
npm ci
npm run build
```
Push to GitHub and import the repository into Vercel. Framework: Vite; output: `dist`.

## 5. Verification
After deployment open `/api/health`. A correct setup returns:
```json
{"ok":true,"services":["firebase-admin","supabase"]}
```
The endpoint never exposes credentials.

## Notes
- Vercel Cron calls `/api/cron/monthly-fees` at 02:00 UTC on the 5th day of each month.
- Vercel automatically sends `Authorization: Bearer <CRON_SECRET>` when `CRON_SECRET` is configured.
- PDF content does not pass through a Vercel Function; only a short-lived upload token does.
- The included application accepts PDFs and doubt images up to 20 MB.
