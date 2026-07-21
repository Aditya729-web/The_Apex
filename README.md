# The Apex Chemistry — Supabase + Vercel

Production portal using React, Vite, Supabase Authentication, PostgreSQL/RLS, private Supabase Storage, and Vercel API routes.

## 1. Supabase setup

Run these files in Supabase SQL Editor in order:

1. `supabase/schema.sql`
2. `supabase/configure-admin.sql`

The configured admin UID is:

`30b55389-8fb1-4112-905b-654e1505bf71`

## 2. Vercel environment variables

Add every variable from `.env.example` in **Vercel → Project Settings → Environment Variables**.

Use a newly rotated `SUPABASE_SECRET_KEY`. Never expose it as a `VITE_` variable.

## 3. Deploy

- Framework preset: Vite
- Node.js: 24.x
- Install command: `npm ci --no-audit --no-fund`
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` configures these values.
