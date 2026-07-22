import { Suspense } from 'react';
import LoginClient from './LoginClient';

export const metadata = { title: 'Login' };

export default function LoginPage() {
  return <Suspense fallback={<div className="full-loader">Loading secure login…</div>}><LoginClient /></Suspense>;
}
