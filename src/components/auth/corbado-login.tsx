'use client';

import { SignUp, Login } from '@corbado/react';
import { CorbadoProvider } from '@corbado/react';

export default function CorbadoLogin() {
  return (
    <CorbadoProvider
      projectId={process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID}
      darkMode="off"
    >
      <SignUp onSignedUp={() => {}} />
      <Login onLoggedIn={() => {}} />
      {/* TODO:
       - Fix dynamic dark mode
       - translations 
       - Set provider at layout level
       */}
    </CorbadoProvider>
  );
}
