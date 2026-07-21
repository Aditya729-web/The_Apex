# The Apex Chemistry Portal v2

Production-ready React + Vite portal for Vercel, Firebase Authentication/Firestore, Firebase Admin and private Supabase PDF storage.

## 1. Install and verify

```bash
npm ci
npm run build
```

Node.js 24 is configured in `package.json` and `vercel.json`.

## 2. Firebase setup

1. Enable **Email/Password** in Firebase Authentication.
2. Create the administrator in Firebase Authentication.
3. Ensure its UID is `Y7hWLggcPsY36p8mfmBqbMligSD3`, or replace that UID in:
   - `VITE_ADMIN_UID`
   - `ADMIN_UID`
   - `firestore.rules`
4. Create Firestore and publish `firestore.rules`.
5. Create a service-account key from Firebase Project Settings → Service accounts.

## 3. Supabase setup

Run `supabase-bucket.sql`. Keep the bucket private.

## 4. Vercel environment variables

Copy every applicable entry from `.env.example` to Vercel → Project → Settings → Environment Variables. Select Production, Preview and Development.

Required browser variables:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_ADMIN_UID`

Required server variables:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `ADMIN_UID`
- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_BUCKET`
- `CRON_SECRET`

For `FIREBASE_PRIVATE_KEY`, paste the complete key including BEGIN/END lines. Vercel supports multiline values.

## 5. Deploy

Push the folder contents—not the outer folder—to GitHub, import the repository in Vercel, add the variables, and deploy. After changing a `VITE_` variable, redeploy because Vite embeds browser variables at build time.

## Health check

Open `/api/health` after deployment. It reports whether Firebase Admin and Supabase are configured without exposing secrets.

## Branding

The uploaded chemistry tuition artwork is included as the login artwork, favicon, PWA icon and application icon.

## Linux/Vercel filename fix
The shared UI component is intentionally named `src/components/ui.jsx` and all imports use the exact lowercase path. This avoids case-sensitive Rollup failures on Vercel Linux.
