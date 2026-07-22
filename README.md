# The Apex Chemistry

A deploy-ready **Next.js + Supabase** institute portal with two authenticated roles:

- **Admin:** dashboard, earnings graph, students, batch creation, fees, private notes, doubts, help requests, tests, marks, and automatic ranks.
- **Student:** batch calendar, monthly fee history, two-minute payment QR, private notes, tests and ranks, doubts with image upload, credentials, and help requests.

The project contains **no demo students, batches, fees, notes, doubts, or tests**. All counters and tables remain empty until the authenticated administrator creates information.

## 1. Requirements

- Node.js **24.x**
- A Supabase project
- A Vercel account

## 2. Create the Supabase database

1. Open your Supabase project.
2. Go to **SQL Editor**.
3. Open `supabase/schema.sql` from this project.
4. Paste the entire file and click **Run**.

The script creates:

- `profiles`
- `batches` including the required `class_level` column
- `fee_records`
- `notes`
- `doubts`
- `tests`
- `test_scores`
- `notifications`
- `help_requests`
- Private Storage buckets named `notes` and `doubts`
- Row Level Security policies
- Automatic test-ranking trigger
- Admin notifications for new doubts and help requests

It also runs `notify pgrst, 'reload schema';` to refresh the Supabase schema cache.

## 3. Configure environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CRON_SECRET=use-a-long-random-secret
```

Keep `SUPABASE_SERVICE_ROLE_KEY` private. Never add it to a variable beginning with `NEXT_PUBLIC_`.

## 4. Create the only admin account

After the SQL schema is installed and `.env.local` is filled, run:

```bash
npm install --no-audit --no-fund
npm run create-admin -- admin@example.com "StrongPasswordHere" "Admin Name"
```

The command creates a Supabase Auth user and a matching `profiles` row with the `admin` role. Do not create a student manually in Supabase Auth; students must be created from the Admin → Students panel so their Student ID, secure password, profile, and current fee record are generated together.

## 5. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## 6. Deploy to Vercel

1. Upload this folder to GitHub or import it directly into Vercel.
2. Add every variable from `.env.example` in **Vercel → Project Settings → Environment Variables**.
3. Change `NEXT_PUBLIC_SITE_URL` to the final production URL.
4. Deploy.

This project intentionally does **not** include `package-lock.json`, so Vercel uses the configured command:

```bash
npm install --no-audit --no-fund
```

The project sets `node: 24.x` in `package.json` and uses `npm run build` in `vercel.json`.

## 7. Monthly fee reminder on the 5th

`vercel.json` schedules:

```json
{
  "path": "/api/cron/monthly-fee-reminders",
  "schedule": "30 3 5 * *"
}
```

This is **03:30 UTC on the 5th**, which is **09:00 AM India Standard Time**.

On each run, the endpoint:

1. Creates the current month’s unpaid fee record when missing.
2. Creates an in-app fee reminder for each unpaid student.
3. Avoids duplicate automatic in-app reminders for the same month.
4. Sends a WhatsApp template message when the optional Meta WhatsApp variables are configured.

Add `CRON_SECRET` to Vercel. The route checks the `Authorization: Bearer <CRON_SECRET>` header.

## 8. Optional automatic WhatsApp reminders

The portal works without WhatsApp credentials: in-app notifications and manual sharing still work.

For automatic WhatsApp delivery, add:

```env
WHATSAPP_GRAPH_VERSION=v23.0
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_TEMPLATE_NAME=monthly_fee_reminder
WHATSAPP_TEMPLATE_LANGUAGE=en_US
```

Create an approved WhatsApp template with three body parameters in this order:

1. Student name
2. Month and year
3. Fee amount

Example wording:

```text
Hello {{1}}, your fee for {{2}} is pending. Amount: ₹{{3}}. Please log in to The Apex Chemistry portal and send the payment screenshot for confirmation.
```

## 9. Payment QR

The uploaded QR is stored at:

```text
public/assets/payment-qr.jpg
```

The student payment modal:

- Shows the exact unpaid amount beneath the QR.
- Starts a two-minute countdown.
- Hides the QR when the timer reaches zero.
- Tells the student to send the payment screenshot to The Apex Chemistry.
- Does not automatically mark the fee paid; only the admin can confirm it.

To replace the QR later, overwrite that file using the same filename.

## 10. Security design

- Student passwords are stored only by Supabase Auth and are never stored in `profiles`.
- The temporary password is returned once after account creation for sharing.
- Student IDs use the format `APEX1001`, `APEX1002`, and so on.
- Each student signs in using Student ID + password; the internal Auth email is never shown.
- Admin-only creation uses the server-side Supabase service-role key.
- Private notes are restricted to the selected batch.
- Doubt images are restricted to the submitting student and admins.
- Row Level Security protects every application table.

## 11. Main files

```text
app/page.js                              Public institute website
app/login/                               Student/Admin login
components/AdminDashboard.js             Complete admin portal
components/StudentDashboard.js           Complete student portal
app/api/admin/students/route.js           Secure student account creation
app/api/admin/reminders/route.js          Manual reminders
app/api/cron/monthly-fee-reminders/       Scheduled monthly reminders
supabase/schema.sql                       Full database, triggers and RLS
scripts/create-admin.mjs                  One-time admin creator
public/assets/payment-qr.jpg              Uploaded UPI QR
public/assets/teacher.jpg                 Teacher image cropped from upload
```
