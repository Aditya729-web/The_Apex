# The Apex Portal — Functional Testing Build

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Upload this folder to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`

## Default administrator
- Email: `admin@theapex.com`
- Password: `Apex@2026`

The portal begins with zero registered users and zero institutional data. The administrator can register users, assign passwords, activate/suspend accounts, edit/delete users, and manage courses, announcements, assignments, and material links.

## Important
This testing build uses browser localStorage. Data is separate per browser/device and passwords are not suitable for production storage. Before real use, replace the login and local database functions with Firebase Authentication, Firestore, Firebase Storage, and server-enforced admin custom claims.
