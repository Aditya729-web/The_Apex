import { createClient } from '@supabase/supabase-js';

const [email, password, ...nameParts] = process.argv.slice(2);
const fullName = nameParts.join(' ') || 'Administrator';

if (!email || !password) {
  console.error('Usage: npm run create-admin -- admin@example.com "StrongPassword" "Admin Name"');
  process.exit(1);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error('Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY first.');
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

const { data, error } = await supabase.auth.admin.createUser({
  email,
  password,
  email_confirm: true,
  user_metadata: { full_name: fullName, role: 'admin' }
});

if (error) {
  console.error(error.message);
  process.exit(1);
}

const { error: profileError } = await supabase.from('profiles').upsert({
  id: data.user.id,
  role: 'admin',
  full_name: fullName,
  email,
  monthly_fee: 0
});

if (profileError) {
  await supabase.auth.admin.deleteUser(data.user.id);
  console.error(profileError.message);
  process.exit(1);
}

console.log(`Admin created successfully: ${email}`);
