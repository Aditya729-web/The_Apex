THE APEX PORTAL — STATIC VERCEL DEPLOYMENT

This package is already compiled. It intentionally contains no package.json,
no package-lock.json, and no npm dependencies. Vercel should serve it as a
static website and must not run npm install.

DEPLOYMENT
1. Delete the previous Vercel project or clear its Build & Development settings.
2. Create a new GitHub repository and upload the CONTENTS of this folder.
3. Import that repository into Vercel.
4. Framework Preset: Other
5. Build Command: leave EMPTY
6. Output Directory: leave EMPTY
7. Install Command: leave EMPTY
8. Root Directory: ./
9. Deploy.

If Vercel shows an old npm command, open Project Settings > Build & Development
Settings and remove the overridden Install Command and Build Command, then
redeploy without build cache.

ADMIN LOGIN
Email: admin@theapex.com
Password: Apex@2026

This demo stores portal data in the browser localStorage. It begins with zero
users and zero portal data.
