import { auth } from '@/app/auth';
import { RedirectType, redirect } from 'next/navigation';

export default async function CheckIfAuthenticated() {
  const session = await auth();
  if (!session) {
    return redirect('/');
  }

  return session.user;
}
