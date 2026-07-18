# The Apex Portal Demo

A Vercel-ready React + Vite demo with hardcoded role-based authentication.

## Demo credentials

### Student
- Email: `student@theapex.com`
- Password: `Student@2026`

### Admin
- Email: `admin@theapex.com`
- Password: `Apex@2026`

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Upload this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Important

This demo uses hardcoded frontend credentials and is only for UI testing. Do not use it as production authentication. Replace the login check with Firebase Authentication and Firestore role validation before handling real users or sensitive records.
