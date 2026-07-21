-- Optional: run in Supabase SQL Editor instead of creating the bucket in the dashboard.
insert into storage.buckets (id, name, public)
values ('apex-files', 'apex-files', false)
on conflict (id) do update set public = false;
