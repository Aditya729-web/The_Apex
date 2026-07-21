import { createClient } from '@supabase/supabase-js'
import { firstEnv, requireEnv } from './env.js'

export function getSupabaseConfig() {
  const url = requireEnv('Supabase URL', 'SUPABASE_URL', 'VITE_SUPABASE_URL')
  const secretKey = requireEnv(
    'Supabase server secret',
    'SUPABASE_SECRET_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
    'SUPABASE_SECRET'
  )
  const publishableKey = firstEnv(
    'SUPABASE_PUBLISHABLE_KEY',
    'SUPABASE_ANON_KEY',
    'VITE_SUPABASE_PUBLISHABLE_KEY',
    'VITE_SUPABASE_ANON_KEY'
  )
  if (!publishableKey) {
    const error = new Error('Supabase publishable key is missing. Add SUPABASE_PUBLISHABLE_KEY or VITE_SUPABASE_PUBLISHABLE_KEY in Vercel.')
    error.statusCode = 500
    throw error
  }
  return {
    url,
    secretKey,
    publishableKey,
    bucket: firstEnv('SUPABASE_BUCKET', 'VITE_SUPABASE_BUCKET') || 'apex-files'
  }
}

export function getSupabaseAdmin() {
  const config = getSupabaseConfig()
  const client = createClient(config.url, config.secretKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  })
  return { ...config, client }
}
