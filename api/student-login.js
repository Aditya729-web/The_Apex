import { adminClient, publicClient, sendJson } from './_shared.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed' })

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const studentId = String(body.studentId || '').trim().toUpperCase()
    const password = String(body.password || '')
    if (!studentId || !password) return sendJson(res, 400, { error: 'Student ID and password are required' })

    const admin = adminClient()
    const { data, error } = await admin
      .from('students')
      .select('auth_email')
      .eq('student_id', studentId)
      .maybeSingle()

    if (error || !data) return sendJson(res, 401, { error: 'Invalid Student ID or password' })

    const { data: login, error: loginError } = await publicClient().auth.signInWithPassword({
      email: data.auth_email,
      password,
    })
    if (loginError || !login.session) return sendJson(res, 401, { error: 'Invalid Student ID or password' })

    return sendJson(res, 200, {
      access_token: login.session.access_token,
      refresh_token: login.session.refresh_token,
    })
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Unable to sign in' })
  }
}
