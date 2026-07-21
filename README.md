# The Apex Chemistry Portal

A Vercel-ready React/Vite portal using:

- Firebase Authentication for admin and student login
- Cloud Firestore for students, batches, fees, notifications, doubts and file metadata
- Supabase private Storage for large notes and doubt images
- Vercel Functions for secure student creation and signed file access
- Vercel Cron for automatic monthly fee reminders on the 5th in Asia/Kolkata

## Included features

### Administrator

- Dashboard showing total earnings, outstanding amount, students and batches
- Student creation with automatically generated Student ID and password
- Search/filter students by batch
- Per-student annual fee ledger with Paid, Due and Upcoming months
- Manual fee reminders and fee-status updates
- Batch settings with timing, days, fee and total student count
- Batch-filtered fee records
- Private large-file note uploads to Supabase by batch
- Direct notifications to one student or an entire batch
- Doubt inbox with question image, description and answer workflow
- Automatic notification badge for new doubts

### Student

- Separate Student ID login
- Home dashboard and class calendar
- Batch timing, days and monthly fee
- Full annual fee tracker
- Payment gateway placeholder marked under maintenance
- Batch-specific private notes
- Real-time in-app notification panel
- Doubt submission using an image and description
- Answer history from the administrator

## Important security step

A Supabase secret key was previously shared in chat. Rotate/revoke that key in Supabase before deployment. Never place a Supabase secret key in frontend code or a `VITE_` environment variable.

## 1. Supabase setup

1. Open Supabase → Storage.
2. Create a **private** bucket named `apex-files`.
3. Open Project Settings → API.
4. Copy the Project URL and publishable key.
5. Create a **new** secret key after revoking the exposed one.

No public Storage policy is required because uploads and downloads use short-lived signed URLs created by trusted Vercel Functions.

## 2. Firebase setup

### Authentication

Enable Email/Password in Firebase Authentication.

The only admin UID accepted by the app and rules is:

```text
Y7hWLggcPsY36p8mfmBqbMligSD3
```

### Firestore rules

Publish the included `firestore.rules` file:

```bash
firebase deploy --only firestore:rules
```

### Firebase Admin service account

Firebase Console → Project Settings → Service accounts → Generate new private key.

Use values from the downloaded JSON only as Vercel environment variables. Do not commit the JSON file.

## 3. Vercel environment variables

Copy `.env.example` values into Vercel → Project Settings → Environment Variables.

### Browser-safe variables

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
VITE_SUPABASE_BUCKET=apex-files
```

### Server-only variables

```text
SUPABASE_URL
SUPABASE_SECRET_KEY
SUPABASE_BUCKET=apex-files
FIREBASE_PROJECT_ID=theapexchemistry
FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY
ADMIN_UID=Y7hWLggcPsY36p8mfmBqbMligSD3
CRON_SECRET
```

`FIREBASE_PRIVATE_KEY` must retain its `\n` line breaks. Vercel accepts the full value surrounded by quotes.

Generate a long random `CRON_SECRET`, for example with a password manager.

## 4. Deploy to Vercel

Use:

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
Node.js: 22.x
```

The repository root must contain `package.json`, `src`, `api`, `public` and `vercel.json`.

After adding environment variables, redeploy without using the previous build cache.

## Automatic reminders

Vercel calls `/api/cron/monthly-fee-reminders` daily at 00:15 UTC. The function checks the current date in `Asia/Kolkata` and performs work only on the 5th. It:

- creates the current month's Due fee record when missing
- checks previous unpaid fee records
- writes a fee reminder into each active student's Firestore notification panel
- uses an idempotency document to prevent duplicate monthly runs

## Firebase Cloud Messaging

The current project uses Firestore for real-time in-app notifications. This works in the portal without requesting browser notification permission.

Firebase Cloud Messaging can be added later for operating-system/browser push notifications. That requires a Firebase Web Push VAPID public key, a service worker and device-token registration. Sending must still happen from a trusted server environment.

## Local development

Create `.env.local` using `.env.example`, then run:

```bash
npm install
npm run dev
```

Vite alone does not emulate Vercel API routes locally. For full API testing, use the Vercel CLI:

```bash
vercel dev
```
