# The Apex Chemistry Portal — Production Deployment

A React/Vite portal with Firebase Authentication, Cloud Firestore, Firebase Admin server functions, private Supabase Storage, and Vercel deployment.

## Fixed in this release

- Student creation uses Firebase Admin securely from `/api/admin/create-student`.
- Student login correctly converts a generated Student ID to its internal Firebase email.
- PDF/file data uploads directly from the browser to a signed Supabase upload URL, avoiding Vercel's request-body limit.
- Supabase environment aliases are supported (`SUPABASE_SECRET_KEY` or `SUPABASE_SERVICE_ROLE_KEY`).
- Upload failures now display the actual server/Supabase error instead of only “Request failed”.
- Notes remain private and are available only to the selected batch.

## 1. Firebase setup

Enable **Email/Password** in Firebase Authentication.

Create a Firebase service-account key from Firebase Console → Project settings → Service accounts → Generate new private key. Add the values from that JSON to Vercel. Do not upload the JSON file to GitHub.

Deploy the included rules:

```bash
firebase deploy --only firestore:rules
```

The administrator Firebase Authentication account must have this UID:

```text
Y7hWLggcPsY36p8mfmBqbMligSD3
```

## 2. Supabase setup

Create a **private** Storage bucket named exactly:

```text
apex-files
```

You may run `supabase-bucket.sql` in the Supabase SQL editor. Rotate any secret that was previously shared, then use only the replacement secret in Vercel.

## 3. Vercel environment variables

Copy every variable from `.env.example` into Vercel → Project → Settings → Environment Variables. Apply them to Production, Preview and Development.

Important details:

- `FIREBASE_PRIVATE_KEY` must include the complete key and escaped `\n` line breaks.
- Use a Supabase **publishable/anon** key for `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Use a Supabase **secret/service-role** key only for `SUPABASE_SECRET_KEY`.
- Never prefix a secret key with `VITE_`.

After adding variables, redeploy without build cache.

## 4. Vercel settings

- Framework preset: Vite
- Install command: `npm ci --no-audit --no-fund`
- Build command: `npm run build`
- Output directory: `dist`

## 5. Local verification

```bash
npm ci --no-audit --no-fund
npm run build
npm run dev
```

Production build was verified successfully before packaging.

## Student login flow

The administrator creates a student and receives a Student ID such as `APEX123456789` plus a generated password. The student selects **Student Login**, enters that Student ID exactly, and uses the generated password. The internal Firebase email is generated automatically and is never required from the student.
