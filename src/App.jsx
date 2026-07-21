import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase, supabaseReady, isAdminUser } from './lib/supabase'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Student from './pages/Student'

function Protected({ role, session, profile, children }) {
  if (!session) return <Navigate to="/login" replace />
  if (!profile) return <div className="center-screen">Loading portal…</div>
  if (profile.role !== role) {
    return <Navigate to={profile.role === 'admin' ? '/admin' : '/student'} replace />
  }
  return children
}

export default function App() {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    if (!supabaseReady) {
      setLoading(false)
      return undefined
    }

    const applySession = async (nextSession) => {
      if (!active) return
      setSession(nextSession || null)

      if (!nextSession?.user) {
        setProfile(null)
        setLoading(false)
        return
      }

      const user = nextSession.user

      // The fixed administrator UID is the source of truth for portal routing.
      if (isAdminUser(user)) {
        setProfile({
          id: user.id,
          email: user.email || '',
          full_name: user.user_metadata?.full_name || 'Administrator',
          role: 'admin',
        })
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('id,email,full_name,role')
          .eq('id', user.id)
          .maybeSingle()

        if (error) throw error

        setProfile(
          data || {
            id: user.id,
            email: user.email || '',
            full_name: user.user_metadata?.full_name || 'Student',
            role: 'student',
          },
        )
      } catch (error) {
        console.error('Unable to load profile:', error)
        setProfile({
          id: user.id,
          email: user.email || '',
          full_name: user.user_metadata?.full_name || 'Student',
          role: 'student',
        })
      } finally {
        if (active) setLoading(false)
      }
    }

    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (error) throw error
        return applySession(data.session)
      })
      .catch((error) => {
        console.error('Unable to restore session:', error)
        if (active) setLoading(false)
      })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      void applySession(nextSession)
    })

    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [])

  async function logout() {
    if (supabase) await supabase.auth.signOut()
    setSession(null)
    setProfile(null)
  }

  if (loading) return <div className="center-screen">Loading The Apex Chemistry…</div>

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login session={session} profile={profile} />} />
      <Route
        path="/admin"
        element={
          <Protected role="admin" session={session} profile={profile}>
            <Admin profile={profile} logout={logout} />
          </Protected>
        }
      />
      <Route
        path="/student"
        element={
          <Protected role="student" session={session} profile={profile}>
            <Student profile={profile} logout={logout} />
          </Protected>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
