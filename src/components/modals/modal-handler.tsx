'use client';

import LoginModal from '@/components/auth/login-modal';
import { useSearchParams } from 'next/navigation';

export default function ModalHandler() {
  const searchParams = useSearchParams();

  function show(name: string): Boolean {
    return !!searchParams.get(name);
  }

  return (
    <>
      {show('login') && <LoginModal />}
      {show('register') && <LoginModal />}
    </>
  );
}
