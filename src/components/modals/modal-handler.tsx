'use client';

import AuthModal from '@/components/auth/auth-modal';
import { useSearchParams } from 'next/navigation';

export default function ModalHandler() {
  const searchParams = useSearchParams();

  function show(name: string): Boolean {
    return !!searchParams.get(name);
  }

  return (
    <>
      {show('login') && <AuthModal mode="login" />}
      {show('register') && <AuthModal mode="register" />}
    </>
  );
}
