import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const ADMIN_UID = import.meta.env.VITE_ADMIN_UID || '30b55389-8fb1-4112-905b-654e1505bf71'
export const supabaseReady = Boolean(url && key)

export const supabase = supabaseReady
  ? createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        flowType: 'pkce',
      },
    })
  : null

export function requireSupabase() {
  if (!supabase) {
    throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY')
  }
  return supabase
}

export function isAdminUser(user) {
  return Boolean(user?.id && user.id === ADMIN_UID)
}
