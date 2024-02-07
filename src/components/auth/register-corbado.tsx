'use client';

import { SignUp } from '@corbado/react';
import { CorbadoProvider } from '@corbado/react';
import { useRouter, usePathname } from 'next/navigation';

export default function CorbadoRegister() {
  const router = useRouter();
  const path = usePathname();

  function goToLogin() {
    router.push(path + '?login=true');
  }

  function goBack() {
    router.back();
  }

  return (
    <CorbadoProvider
      projectId={process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID}
      darkMode="off"
      endpoint=""
    >
      <SignUp onSignedUp={goBack()} navigateToLogin={goToLogin()} />
    </CorbadoProvider>
  );
}
