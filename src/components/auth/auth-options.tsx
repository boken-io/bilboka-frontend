'use client';

import corbadoTranslations from '@/config/corbado-translations';
import { Login, SignUp } from '@corbado/react';
import { CorbadoProvider } from '@corbado/react';
import { useRouter, usePathname } from 'next/navigation';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import React, { Key } from 'react';
import { signIn } from 'next-auth/react';
import AuthSocial from './auth-social';
import { useTheme } from 'next-themes';

import './auth-theme.css';

export type Modes = 'login' | 'register';

export default function AuthOptions(props: { mode: Modes }) {
  const router = useRouter();
  const path = usePathname();
  const { theme, setTheme } = useTheme();

  const [selected, setSelected] = React.useState(props.mode);

  function closeModal() {
    signIn('corbado', {
      callbackUrl: path,
      cbo_short_session: localStorage.getItem('cbo_short_session')
    });
  }

  return (
    <div className="grid justify-center">
      <CorbadoProvider
        projectId={process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID}
        darkMode={theme === 'dark' ? 'on' : 'off'}
        customTranslations={corbadoTranslations}
        theme="custom"
      >
        <Tabs
          aria-label="Options"
          className="justify-center mt-4"
          selectedKey={selected}
          onSelectionChange={setSelected as (key: Key) => void}
        >
          <Tab key="login" title="Logg inn">
            <Login onLoggedIn={closeModal} />
          </Tab>
          <Tab key="register" title="Registrer">
            <SignUp onSignedUp={closeModal} />
          </Tab>
          <Tab key="social" title="Sosial">
            <Card>
              <CardBody>
                <AuthSocial />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </CorbadoProvider>
    </div>
  );
}
