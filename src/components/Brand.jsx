import { FlaskConical } from 'lucide-react'

export function Brand({ compact = false }) {
  return <div className={`brand ${compact ? 'compact' : ''}`}>
    <span className="brand-icon"><FlaskConical size={compact ? 24 : 31}/></span>
    <span><b>CHEMISTRY</b><strong>TUITION</strong></span>
  </div>
}
