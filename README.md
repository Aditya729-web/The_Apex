# The Apex Chemistry Portal

Firebase-connected student and admin portal built with React + Vite.

## Features
- Separate Student ID login and Administrator email login
- Admin-created student accounts with automatically generated ID/password
- Searchable batch assignment and batch settings
- Batch timing, days and monthly fees visible to assigned students
- Student filtering by batch
- Monthly fee reminders and notification panel
- Interactive fee records with paid/due tracking
- Admin-only small-file notes upload by batch using Cloud Firestore
- Student class calendar highlights scheduled batch days
- Payment button currently shows under-maintenance status
- Apex Chemistry branding and Coffee To Code footer link
- Empty Firestore collections show proper zero-data states

## Initial Firebase setup
1. In Firebase Authentication, enable **Email/Password**.
2. Create the single administrator account in Authentication.
3. Copy its UID.
4. In Firestore, create collection `admins`, then document `<ADMIN_UID>` with:
   ```json
   { "name": "Apex Administrator", "role": "admin" }
   ```
5. Publish `firestore.rules` in Firestore Rules.
6. No Firebase Storage setup is required.
7. Uploaded note files are stored as Firestore binary data and are limited to 750 KB each.

Do not create a second document in `admins`; the application is designed for one administrator.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
- Framework: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22.x

Upload the extracted project files to the repository root. Do not upload the ZIP itself.

## Important security note
Firebase web configuration values are public identifiers by design. Access protection comes from Authentication, Firestore Security Rules. Never store administrator passwords in source code.

## Firestore note-file limitation
Cloud Firestore documents cannot exceed 1 MiB. To leave room for metadata, this project limits each note file to 750 KB. For larger PDFs or videos, use a dedicated file-storage service later.
