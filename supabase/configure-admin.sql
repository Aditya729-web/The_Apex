-- Run this after creating the administrator in Supabase Authentication.
-- This project permits only this exact user to act as administrator.

update public.profiles
set role = 'admin',
    full_name = coalesce(nullif(full_name, ''), 'Administrator')
where id = '30b55389-8fb1-4112-905b-654e1505bf71';

-- Verification
select id, email, full_name, role
from public.profiles
where id = '30b55389-8fb1-4112-905b-654e1505bf71';
