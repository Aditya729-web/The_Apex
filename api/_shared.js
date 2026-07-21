import { createClient } from '@supabase/supabase-js'

export function adminClient() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SECRET_KEY
  if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SECRET_KEY')
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

export function publicClient() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_PUBLISHABLE_KEY
  if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY')
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

export function sendJson(res, status, body) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-store')
  return res.status(status).json(body)
}

export async function requireAdmin(req) {
  const header = req.headers.authorization || ''
  const token = header.replace(/^Bearer\s+/i, '')
  if (!token) {
    const error = new Error('Authentication required')
    error.statusCode = 401
    throw error
  }

  const client = adminClient()
  const { data: { user }, error } = await client.auth.getUser(token)
  if (error || !user) {
    const authError = new Error('Invalid or expired session')
    authError.statusCode = 401
    throw authError
  }

  const fixedAdminUid = process.env.ADMIN_UID
  if (!fixedAdminUid) {
    const configError = new Error('ADMIN_UID is missing in Vercel environment variables')
    configError.statusCode = 500
    throw configError
  }
  if (user.id !== fixedAdminUid) {
    const accessError = new Error('Administrator access required')
    accessError.statusCode = 403
    throw accessError
  }

  const { data: profile, error: profileError } = await client
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  if (profileError) throw profileError
  if (profile?.role !== 'admin') {
    const profileAccessError = new Error('Administrator profile is not configured')
    profileAccessError.statusCode = 403
    throw profileAccessError
  }

  return { client, user }
}
