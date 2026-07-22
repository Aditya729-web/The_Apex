import { updateSession } from '@/lib/supabase/proxy';

export async function proxy(request) {
  return updateSession(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};
