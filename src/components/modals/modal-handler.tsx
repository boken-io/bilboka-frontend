'use client';

import LoginModal from '@/components/auth/auth-modal';
import { useSearchParams } from 'next/navigation';

export default function ModalHandler() {
  const searchParams = useSearchParams();

  function show(name: string): Boolean {
    return !!searchParams.get(name);
  }

  return (
    <>
      {show('login') && <LoginModal mode="login" />}
      {show('register') && <LoginModal mode="register" />}
    </>
  );
}
