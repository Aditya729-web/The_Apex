# Deployment Checklist

- [ ] Run `supabase/schema.sql` completely.
- [ ] Confirm `batches.class_level` exists in Supabase Table Editor.
- [ ] Confirm private Storage buckets `notes` and `doubts` exist.
- [ ] Add all required Vercel environment variables.
- [ ] Run `npm run create-admin -- ...` once.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production Vercel URL.
- [ ] Deploy with Node 24.x.
- [ ] Log in as admin and create the first batch.
- [ ] Create the first student from the Students panel.
- [ ] Share the generated credentials immediately.
- [ ] Test a student login.
- [ ] Test notes upload/download.
- [ ] Test a doubt with an image and admin response.
- [ ] Test marks upload and automatic rank.
- [ ] Test the payment QR expiry after two minutes.
- [ ] Test `/api/cron/monthly-fee-reminders` with the cron authorization header.
