import { redirect } from 'next/navigation';
import { getCurrentProfile } from '@/lib/auth';

export const metadata = { title: 'Admin Dashboard' };

export default async function AdminLayout({ children }) {
  const { user, profile } = await getCurrentProfile();
  if (!user) redirect('/login?mode=admin');
  if (profile?.role !== 'admin') redirect('/student');
  return children;
}
