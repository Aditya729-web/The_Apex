import crypto from 'node:crypto'
import { requireAdmin, sendJson } from './_shared.js'

const allowedCourses = new Set(['JEE', 'NEET', 'Boards'])
const allowedClasses = new Set(['11', '12', 'Class 11', 'Class 12'])

function generatePassword() {
  return `Ap@${crypto.randomBytes(6).toString('base64url').slice(0, 8)}`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed' })

  try {
    const { client: admin } = await requireAdmin(req)
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const fullName = String(body.fullName || '').trim()
    const course = String(body.course || '').trim()
    const classLevel = String(body.classLevel || '').trim()

    if (fullName.length < 2) return sendJson(res, 400, { error: 'Enter a valid student name' })
    if (!allowedCourses.has(course)) return sendJson(res, 400, { error: 'Course must be JEE, NEET, or Boards' })
    if (!allowedClasses.has(classLevel)) return sendJson(res, 400, { error: 'Class must be 11 or 12' })

    const { data: studentId, error: idError } = await admin.rpc('next_student_id')
    if (idError) throw idError

    const password = generatePassword()
    const authEmail = `${String(studentId).toLowerCase()}@students.theapex.local`

    const { data: created, error: authError } = await admin.auth.admin.createUser({
      email: authEmail,
      password,
      email_confirm: true,
      user_metadata: { full_name: fullName, role: 'student' },
    })
    if (authError) throw authError

    const { error: insertError } = await admin.from('students').insert({
      user_id: created.user.id,
      student_id: studentId,
      auth_email: authEmail,
      full_name: fullName,
      course,
      class_level: classLevel,
      batch_id: body.batchId || null,
      phone: String(body.phone || '').trim() || null,
    })

    if (insertError) {
      await admin.auth.admin.deleteUser(created.user.id)
      throw insertError
    }

    return sendJson(res, 200, {
      fullName,
      course,
      studentId,
      password,
      siteUrl: process.env.SITE_URL || `https://${req.headers.host}`,
    })
  } catch (error) {
    return sendJson(res, error.statusCode || 500, {
      error: error.message || 'Unable to create student',
    })
  }
}
