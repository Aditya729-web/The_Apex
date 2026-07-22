import { redirect } from 'next/navigation';
import { getCurrentProfile } from '@/lib/auth';

export const metadata = { title: 'Student Dashboard' };

export default async function StudentLayout({ children }) {
  const { user, profile } = await getCurrentProfile();
  if (!user) redirect('/login?mode=student');
  if (profile?.role !== 'student') redirect('/admin');
  return children;
}
