'use client';
import '@corbado/webcomponent/pkg/auth_cui.css';

import { useEffect, useState } from 'react';

export default function CorbadoLogin() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // This will run only on client-side
    import('@corbado/webcomponent');
  }, []);

  return (
    <corbado-auth
      project-id={process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID}
      conditional="yes"
    >
      <input
        name="username"
        id="corbado-username"
        data-input="username"
        required
        autoComplete="webauthn"
      />
    </corbado-auth>
  );
}
