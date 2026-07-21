import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Brand } from '../components/Brand'
import { Button, Input } from '../components/UI'
import { supabase, supabaseReady, isAdminUser } from '../lib/supabase'

export default function Login({ session, profile }) {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const [role, setRole] = useState(params.get('role') === 'admin' ? 'admin' : 'student')
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (session && profile) {
      navigate(profile.role === 'admin' ? '/admin' : '/student', { replace: true })
    }
  }, [session, profile, navigate])

  async function submit(event) {
    event.preventDefault()
    if (busy) return

    setBusy(true)
    setError('')

    try {
      if (!supabaseReady || !supabase) {
        throw new Error('Supabase browser variables are missing in Vercel.')
      }

      if (role === 'admin') {
        const email = identifier.trim().toLowerCase()
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (signInError) throw signInError
        if (!data.session || !data.user) throw new Error('Supabase did not return a valid session.')

        if (!isAdminUser(data.user)) {
          await supabase.auth.signOut()
          throw new Error('This account is not configured as the administrator.')
        }

        navigate('/admin', { replace: true })
        return
      }

      const response = await fetch('/api/student-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: identifier.trim().toUpperCase(),
          password,
        }),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'Student login failed.')
      if (!data.access_token || !data.refresh_token) {
        throw new Error('The login server returned an incomplete session.')
      }

      const { error: sessionError } = await supabase.auth.setSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      })

      if (sessionError) throw sessionError
      navigate('/student', { replace: true })
    } catch (loginError) {
      console.error('Login failed:', loginError)
      setError(loginError?.message || 'Login failed. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-brand">
        <Brand />
        <div>
          <span>Your Success, Our Passion</span>
          <h1>{role === 'admin' ? 'Administrator Console' : 'Student Learning Portal'}</h1>
          <p>Secure access to The Apex Chemistry dashboard.</p>
        </div>
      </div>

      <form onSubmit={submit} className="login-card">
        <div className="role-tabs">
          <button
            type="button"
            className={role === 'student' ? 'active' : ''}
            onClick={() => {
              setRole('student')
              setError('')
            }}
          >
            Student Login
          </button>
          <button
            type="button"
            className={role === 'admin' ? 'active' : ''}
            onClick={() => {
              setRole('admin')
              setError('')
            }}
          >
            Admin Login
          </button>
        </div>

        <h2>Welcome back</h2>
        <p>
          {role === 'student'
            ? 'Use the Student ID provided by your administrator.'
            : 'Use your administrator email and password.'}
        </p>

        <Input
          label={role === 'student' ? 'Student ID' : 'Admin Email'}
          type={role === 'student' ? 'text' : 'email'}
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
          autoComplete={role === 'student' ? 'username' : 'email'}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
        />

        {error && <div className="error-box">{error}</div>}

        <Button type="submit" disabled={busy}>
          {busy ? 'Signing in…' : 'Login'}
        </Button>
        <button type="button" className="text-link" onClick={() => navigate('/')}>
          Return to website
        </button>
      </form>
    </div>
  )
}
