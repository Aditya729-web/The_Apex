-- Run in Supabase SQL Editor. Server-side service-role access bypasses RLS.
insert into storage.buckets (id, name, public)
values ('notes', 'notes', false)
on conflict (id) do update set public = false;
