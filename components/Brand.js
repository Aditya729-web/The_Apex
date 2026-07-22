import Link from 'next/link';

export function FlaskIcon({ size = 38, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 8h16v6l-4 4v11l13 21c2.4 4-0.5 8-5.2 8H20.2c-4.7 0-7.6-4-5.2-8l13-21V18l-4-4V8Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M20 47h24L34 31h-4L20 47Z" fill="currentColor" opacity=".95" />
      <circle cx="27" cy="45" r="2.2" fill="#071b31" />
      <circle cx="37" cy="41" r="2.2" fill="#071b31" />
    </svg>
  );
}

export default function Brand({ compact = false, href = '/' }) {
  return (
    <Link href={href} className={`brand ${compact ? 'brand-compact' : ''}`}>
      <span className="brand-mark"><FlaskIcon size={compact ? 31 : 40} /></span>
      <span className="brand-copy">
        <strong>THE APEX</strong>
        <b>CHEMISTRY</b>
        {!compact && <small>LEARN • PRACTICE • EXCEL</small>}
      </span>
    </Link>
  );
}
