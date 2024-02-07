'use client';

import { Login } from '@corbado/react';
import { CorbadoProvider } from '@corbado/react';
import { useRouter, usePathname } from 'next/navigation';

export default function CorbadoLogin() {
  const router = useRouter();
  const path = usePathname();

  function goToRegister() {
    router.push(path + '?login=true');
  }

  function goBack() {
    router.back();
  }

  return (
    <CorbadoProvider
      projectId={process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID}
      darkMode="off"
    >
      <Login onLoggedIn={goBack()} navigateToSignUp={goToRegister()} />
    </CorbadoProvider>
  );
}
