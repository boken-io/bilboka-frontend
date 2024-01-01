import { auth } from '../auth';
import { RedirectType, redirect } from 'next/navigation';

export default async function CheckIfAuthenticated() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
}
