import { createClient } from '@supabase/supabase-js'
import { firstEnv, requireEnv } from './env.js'

export const BUCKET = firstEnv('SUPABASE_BUCKET', 'VITE_SUPABASE_BUCKET') || 'apex-files'
export const SUPABASE_URL = requireEnv('Supabase URL', 'SUPABASE_URL', 'VITE_SUPABASE_URL')
export const SUPABASE_SECRET_KEY = requireEnv(
  'Supabase server secret',
  'SUPABASE_SECRET_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'SUPABASE_SECRET'
)
export const SUPABASE_PUBLISHABLE_KEY = firstEnv(
  'SUPABASE_PUBLISHABLE_KEY',
  'SUPABASE_ANON_KEY',
  'VITE_SUPABASE_PUBLISHABLE_KEY',
  'VITE_SUPABASE_ANON_KEY'
)

export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
})
