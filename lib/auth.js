import { createClient } from '@/lib/supabase/server';

export async function getCurrentProfile() {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { user: null, profile: null, supabase };
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  return { user, profile, supabase };
}

export async function requireAdmin() {
  const context = await getCurrentProfile();
  if (!context.user || context.profile?.role !== 'admin') {
    return null;
  }
  return context;
}
