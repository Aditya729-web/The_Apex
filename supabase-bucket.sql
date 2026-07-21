-- Run in Supabase SQL Editor. The application uses server-generated signed URLs,
-- so the private bucket needs no public object policies.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('apex-files', 'apex-files', false, 20971520, array['application/pdf','image/jpeg','image/png','image/webp'])
on conflict (id) do update set public=false, file_size_limit=20971520;
