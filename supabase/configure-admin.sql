-- Run this after creating the administrator in Supabase Authentication.
-- It inserts the profile when missing and repairs it when already present.

insert into public.profiles (id, email, full_name, role)
select
  id,
  email,
  coalesce(nullif(raw_user_meta_data ->> 'full_name', ''), 'Administrator'),
  'admin'
from auth.users
where id = '30b55389-8fb1-4112-905b-654e1505bf71'
on conflict (id) do update
set
  email = excluded.email,
  full_name = coalesce(nullif(public.profiles.full_name, ''), excluded.full_name),
  role = 'admin';

select id, email, full_name, role
from public.profiles
where id = '30b55389-8fb1-4112-905b-654e1505bf71';
