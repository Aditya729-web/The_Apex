import AdminDashboard from '@/components/AdminDashboard';
import { getCurrentProfile } from '@/lib/auth';

export default async function AdminPage() {
  const { profile } = await getCurrentProfile();
  return <AdminDashboard initialProfile={profile} />;
}
