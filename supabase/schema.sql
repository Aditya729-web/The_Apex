-- THE APEX CHEMISTRY - COMPLETE SUPABASE SCHEMA
-- Run this file once in Supabase > SQL Editor.
-- It creates no students, batches, fees, notes, doubts or tests.

create extension if not exists pgcrypto;

do $$ begin
  create type public.user_role as enum ('admin', 'student');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.fee_status as enum ('unpaid', 'paid', 'waived');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.doubt_status as enum ('pending', 'answered');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.help_status as enum ('open', 'resolved');
exception when duplicate_object then null;
end $$;

create sequence if not exists public.student_code_seq start with 1001 increment by 1;

create or replace function public.next_student_code()
returns text
language sql
security definer
set search_path = public
as $$
  select 'APEX' || lpad(nextval('public.student_code_seq')::text, 4, '0');
$$;

create table if not exists public.batches (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  class_level text not null,
  class_time text not null,
  days text[] not null default '{}',
  monthly_fee numeric(10,2) not null check (monthly_fee >= 0),
  is_active boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  constraint batches_days_valid check (
    days <@ array['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']::text[]
  )
);

-- This column is included explicitly to prevent the earlier schema-cache error.
alter table public.batches add column if not exists class_level text;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.user_role not null,
  student_code text unique,
  full_name text not null,
  email text not null,
  phone text,
  class_level text,
  batch_id uuid references public.batches(id) on delete set null,
  monthly_fee numeric(10,2) not null default 0 check (monthly_fee >= 0),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  constraint student_fields_required check (
    role = 'admin' or (student_code is not null and class_level is not null and phone is not null)
  )
);

create table if not exists public.fee_records (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  batch_id uuid references public.batches(id) on delete set null,
  fee_month date not null,
  amount numeric(10,2) not null check (amount >= 0),
  status public.fee_status not null default 'unpaid',
  paid_at timestamptz,
  payment_reference text,
  confirmed_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (student_id, fee_month)
);

create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  batch_id uuid not null references public.batches(id) on delete cascade,
  title text not null,
  file_path text not null,
  file_name text not null,
  file_size bigint not null default 0,
  mime_type text,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.doubts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  batch_id uuid references public.batches(id) on delete set null,
  description text not null,
  image_path text,
  status public.doubt_status not null default 'pending',
  response text,
  answered_by uuid references auth.users(id) on delete set null,
  answered_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.tests (
  id uuid primary key default gen_random_uuid(),
  batch_id uuid not null references public.batches(id) on delete cascade,
  title text not null,
  test_date date not null,
  max_marks numeric(10,2) not null check (max_marks > 0),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.test_scores (
  id uuid primary key default gen_random_uuid(),
  test_id uuid not null references public.tests(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  marks numeric(10,2) not null check (marks >= 0),
  rank integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (test_id, student_id)
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null references public.profiles(id) on delete cascade,
  type text not null default 'general',
  title text not null,
  body text not null,
  data jsonb not null default '{}'::jsonb,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.help_requests (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  subject text not null,
  message text not null,
  status public.help_status not null default 'open',
  admin_response text,
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create index if not exists profiles_batch_idx on public.profiles(batch_id);
create index if not exists profiles_role_idx on public.profiles(role);
create index if not exists fee_records_student_month_idx on public.fee_records(student_id, fee_month desc);
create index if not exists fee_records_batch_idx on public.fee_records(batch_id);
create index if not exists notes_batch_idx on public.notes(batch_id, created_at desc);
create index if not exists doubts_batch_idx on public.doubts(batch_id, created_at desc);
create index if not exists tests_batch_idx on public.tests(batch_id, test_date desc);
create index if not exists notifications_recipient_idx on public.notifications(recipient_id, created_at desc);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin' and is_active = true
  );
$$;

create or replace function public.my_batch_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select batch_id from public.profiles where id = auth.uid();
$$;

create or replace function public.recalculate_test_ranks()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.test_scores target
  set rank = ranked.position,
      updated_at = now()
  from (
    select id, rank() over (order by marks desc) as position
    from public.test_scores
    where test_id = new.test_id
  ) ranked
  where target.id = ranked.id;
  return new;
end;
$$;

drop trigger if exists trg_recalculate_test_ranks on public.test_scores;
create trigger trg_recalculate_test_ranks
after insert or update of marks on public.test_scores
for each row execute function public.recalculate_test_ranks();

create or replace function public.notify_admins_of_doubt()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  student_name text;
begin
  select full_name into student_name from public.profiles where id = new.student_id;
  insert into public.notifications (recipient_id, type, title, body, data)
  select id, 'doubt', 'New student doubt',
         coalesce(student_name, 'A student') || ' submitted a new doubt.',
         jsonb_build_object('doubt_id', new.id, 'batch_id', new.batch_id)
  from public.profiles
  where role = 'admin' and is_active = true;
  return new;
end;
$$;

drop trigger if exists trg_notify_admins_of_doubt on public.doubts;
create trigger trg_notify_admins_of_doubt
after insert on public.doubts
for each row execute function public.notify_admins_of_doubt();

create or replace function public.notify_admins_of_help_request()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  student_name text;
begin
  select full_name into student_name from public.profiles where id = new.student_id;
  insert into public.notifications (recipient_id, type, title, body, data)
  select id, 'help', 'New help request',
         coalesce(student_name, 'A student') || ' requested help: ' || new.subject,
         jsonb_build_object('help_request_id', new.id)
  from public.profiles
  where role = 'admin' and is_active = true;
  return new;
end;
$$;

drop trigger if exists trg_notify_admins_of_help_request on public.help_requests;
create trigger trg_notify_admins_of_help_request
after insert on public.help_requests
for each row execute function public.notify_admins_of_help_request();

alter table public.profiles enable row level security;
alter table public.batches enable row level security;
alter table public.fee_records enable row level security;
alter table public.notes enable row level security;
alter table public.doubts enable row level security;
alter table public.tests enable row level security;
alter table public.test_scores enable row level security;
alter table public.notifications enable row level security;
alter table public.help_requests enable row level security;

-- PROFILES
DROP POLICY IF EXISTS "profiles_select" ON public.profiles;
CREATE POLICY "profiles_select" ON public.profiles FOR SELECT TO authenticated
USING (id = auth.uid() OR public.is_admin());
DROP POLICY IF EXISTS "profiles_admin_update" ON public.profiles;
CREATE POLICY "profiles_admin_update" ON public.profiles FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- BATCHES
DROP POLICY IF EXISTS "batches_select" ON public.batches;
CREATE POLICY "batches_select" ON public.batches FOR SELECT TO authenticated
USING (public.is_admin() OR id = public.my_batch_id());
DROP POLICY IF EXISTS "batches_admin_insert" ON public.batches;
CREATE POLICY "batches_admin_insert" ON public.batches FOR INSERT TO authenticated
WITH CHECK (public.is_admin() AND created_by = auth.uid());
DROP POLICY IF EXISTS "batches_admin_update" ON public.batches;
CREATE POLICY "batches_admin_update" ON public.batches FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS "batches_admin_delete" ON public.batches;
CREATE POLICY "batches_admin_delete" ON public.batches FOR DELETE TO authenticated
USING (public.is_admin());

-- FEES
DROP POLICY IF EXISTS "fees_select" ON public.fee_records;
CREATE POLICY "fees_select" ON public.fee_records FOR SELECT TO authenticated
USING (student_id = auth.uid() OR public.is_admin());
DROP POLICY IF EXISTS "fees_admin_insert" ON public.fee_records;
CREATE POLICY "fees_admin_insert" ON public.fee_records FOR INSERT TO authenticated
WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS "fees_admin_update" ON public.fee_records;
CREATE POLICY "fees_admin_update" ON public.fee_records FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS "fees_admin_delete" ON public.fee_records;
CREATE POLICY "fees_admin_delete" ON public.fee_records FOR DELETE TO authenticated
USING (public.is_admin());

-- NOTES
DROP POLICY IF EXISTS "notes_select" ON public.notes;
CREATE POLICY "notes_select" ON public.notes FOR SELECT TO authenticated
USING (public.is_admin() OR batch_id = public.my_batch_id());
DROP POLICY IF EXISTS "notes_admin_insert" ON public.notes;
CREATE POLICY "notes_admin_insert" ON public.notes FOR INSERT TO authenticated
WITH CHECK (public.is_admin() AND uploaded_by = auth.uid());
DROP POLICY IF EXISTS "notes_admin_update" ON public.notes;
CREATE POLICY "notes_admin_update" ON public.notes FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS "notes_admin_delete" ON public.notes;
CREATE POLICY "notes_admin_delete" ON public.notes FOR DELETE TO authenticated
USING (public.is_admin());

-- DOUBTS
DROP POLICY IF EXISTS "doubts_select" ON public.doubts;
CREATE POLICY "doubts_select" ON public.doubts FOR SELECT TO authenticated
USING (student_id = auth.uid() OR public.is_admin());
DROP POLICY IF EXISTS "doubts_student_insert" ON public.doubts;
CREATE POLICY "doubts_student_insert" ON public.doubts FOR INSERT TO authenticated
WITH CHECK (student_id = auth.uid() AND batch_id = public.my_batch_id());
DROP POLICY IF EXISTS "doubts_admin_update" ON public.doubts;
CREATE POLICY "doubts_admin_update" ON public.doubts FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- TESTS
DROP POLICY IF EXISTS "tests_select" ON public.tests;
CREATE POLICY "tests_select" ON public.tests FOR SELECT TO authenticated
USING (public.is_admin() OR batch_id = public.my_batch_id());
DROP POLICY IF EXISTS "tests_admin_insert" ON public.tests;
CREATE POLICY "tests_admin_insert" ON public.tests FOR INSERT TO authenticated
WITH CHECK (public.is_admin() AND created_by = auth.uid());
DROP POLICY IF EXISTS "tests_admin_update" ON public.tests;
CREATE POLICY "tests_admin_update" ON public.tests FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS "tests_admin_delete" ON public.tests;
CREATE POLICY "tests_admin_delete" ON public.tests FOR DELETE TO authenticated
USING (public.is_admin());

-- TEST SCORES
DROP POLICY IF EXISTS "scores_select" ON public.test_scores;
CREATE POLICY "scores_select" ON public.test_scores FOR SELECT TO authenticated
USING (student_id = auth.uid() OR public.is_admin());
DROP POLICY IF EXISTS "scores_admin_insert" ON public.test_scores;
CREATE POLICY "scores_admin_insert" ON public.test_scores FOR INSERT TO authenticated
WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS "scores_admin_update" ON public.test_scores;
CREATE POLICY "scores_admin_update" ON public.test_scores FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS "scores_admin_delete" ON public.test_scores;
CREATE POLICY "scores_admin_delete" ON public.test_scores FOR DELETE TO authenticated
USING (public.is_admin());

-- NOTIFICATIONS
DROP POLICY IF EXISTS "notifications_select" ON public.notifications;
CREATE POLICY "notifications_select" ON public.notifications FOR SELECT TO authenticated
USING (recipient_id = auth.uid());
DROP POLICY IF EXISTS "notifications_admin_insert" ON public.notifications;
CREATE POLICY "notifications_admin_insert" ON public.notifications FOR INSERT TO authenticated
WITH CHECK (public.is_admin());
DROP POLICY IF EXISTS "notifications_recipient_update" ON public.notifications;
CREATE POLICY "notifications_recipient_update" ON public.notifications FOR UPDATE TO authenticated
USING (recipient_id = auth.uid()) WITH CHECK (recipient_id = auth.uid());

-- HELP REQUESTS
DROP POLICY IF EXISTS "help_select" ON public.help_requests;
CREATE POLICY "help_select" ON public.help_requests FOR SELECT TO authenticated
USING (student_id = auth.uid() OR public.is_admin());
DROP POLICY IF EXISTS "help_student_insert" ON public.help_requests;
CREATE POLICY "help_student_insert" ON public.help_requests FOR INSERT TO authenticated
WITH CHECK (student_id = auth.uid());
DROP POLICY IF EXISTS "help_admin_update" ON public.help_requests;
CREATE POLICY "help_admin_update" ON public.help_requests FOR UPDATE TO authenticated
USING (public.is_admin()) WITH CHECK (public.is_admin());

-- PRIVATE STORAGE BUCKETS
insert into storage.buckets (id, name, public, file_size_limit)
values ('notes', 'notes', false, 52428800)
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit;

insert into storage.buckets (id, name, public, file_size_limit)
values ('doubts', 'doubts', false, 10485760)
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit;

DROP POLICY IF EXISTS "notes_objects_admin_all" ON storage.objects;
CREATE POLICY "notes_objects_admin_all" ON storage.objects FOR ALL TO authenticated
USING (bucket_id = 'notes' AND public.is_admin())
WITH CHECK (bucket_id = 'notes' AND public.is_admin());

DROP POLICY IF EXISTS "notes_objects_student_read" ON storage.objects;
CREATE POLICY "notes_objects_student_read" ON storage.objects FOR SELECT TO authenticated
USING (
  bucket_id = 'notes'
  AND (storage.foldername(name))[1] = public.my_batch_id()::text
);

DROP POLICY IF EXISTS "doubts_objects_admin_all" ON storage.objects;
CREATE POLICY "doubts_objects_admin_all" ON storage.objects FOR ALL TO authenticated
USING (bucket_id = 'doubts' AND public.is_admin())
WITH CHECK (bucket_id = 'doubts' AND public.is_admin());

DROP POLICY IF EXISTS "doubts_objects_student_insert" ON storage.objects;
CREATE POLICY "doubts_objects_student_insert" ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'doubts'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

DROP POLICY IF EXISTS "doubts_objects_student_read" ON storage.objects;
CREATE POLICY "doubts_objects_student_read" ON storage.objects FOR SELECT TO authenticated
USING (
  bucket_id = 'doubts'
  AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Refresh PostgREST schema cache so new columns are immediately visible.
notify pgrst, 'reload schema';

-- Enable live dashboard updates for notifications, doubts and fee changes.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'notifications'
  ) then
    execute 'alter publication supabase_realtime add table public.notifications';
  end if;
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'doubts'
  ) then
    execute 'alter publication supabase_realtime add table public.doubts';
  end if;
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'fee_records'
  ) then
    execute 'alter publication supabase_realtime add table public.fee_records';
  end if;
end $$;
