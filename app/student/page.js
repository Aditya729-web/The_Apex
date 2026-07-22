import StudentDashboard from '@/components/StudentDashboard';
import { getCurrentProfile } from '@/lib/auth';

export default async function StudentPage() {
  const { profile } = await getCurrentProfile();
  return <StudentDashboard initialProfile={profile} />;
}
