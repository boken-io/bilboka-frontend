'use client';

import corbadoTranslations from '@/config/corbado-translations';
import { Login, SignUp } from '@corbado/react';
import { CorbadoProvider } from '@corbado/react';
import { usePathname } from 'next/navigation';
import { Tabs, Tab } from '@nextui-org/react';
import React, { Key } from 'react';
import { signIn } from 'next-auth/react';
import AuthSocial from './auth-social';
import { useTheme } from 'next-themes';

import './auth-theme.css';
import { LoginIcon, RegisterIcon, SocialIcon } from '../icons/icons';

export type Modes = 'login' | 'register';

export default function AuthOptions(props: { mode: Modes }) {
  const path = usePathname();
  const { theme } = useTheme();
  const [selected, setSelected] = React.useState(props.mode);

  function closeModal() {
    signIn('corbado', {
      callbackUrl: path,
      cbo_short_session: localStorage.getItem('cbo_short_session')
    });
  }

  function title(type: string): React.ReactNode {
    let icon;
    switch (type) {
      case 'Logg inn':
        icon = <LoginIcon />;
      case 'Registrer':
        icon = <RegisterIcon />;
      case 'Sosial':
        icon = <SocialIcon />;
      default:
        break;
    }
    return (
      <div className="flex items-center space-x-2">
        {icon}
        <span>{type}</span>
      </div>
    );
  }

  return (
    <div className="justify-center">
      <CorbadoProvider
        projectId={process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID}
        darkMode={theme === 'dark' ? 'on' : 'off'}
        customTranslations={corbadoTranslations}
        theme="custom"
      >
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          selectedKey={selected}
          onSelectionChange={setSelected as (key: Key) => void}
          fullWidth={true}
          classNames={{
            tabList:
              'gap-6 w-full relative rounded-none p-0 border-b border-divider justify-center',
            cursor: 'w-full bg-[#4ca782]',
            tab: 'max-w-fit px-0 h-12',
            tabContent: 'group-data-[selected=true]:text-[#4ca782]'
          }}
        >
          {/* ------------------------------------------------------------------------- */
          /*                                     tab                                    */
          /* -------------------------------------------------------------------------- */}
          <Tab key="login" title={title('Logg inn')}>
            {/* ----------------------------- tab content ----------------------------- */}
            <div className="min-h-72 grid place-content-center">
              <Login onLoggedIn={closeModal} />
            </div>
          </Tab>
          {/* ------------------------------------------------------------------------- */
          /*                                     tab                                    */
          /* -------------------------------------------------------------------------- */}
          <Tab key="register" title={title('Registrer')}>
            {/* ----------------------------- tab content ----------------------------- */}
            <div className="min-h-72 grid place-content-center">
              <SignUp onSignedUp={closeModal} />
            </div>
          </Tab>
          {/* ------------------------------------------------------------------------- */
          /*                                     tab                                    */
          /* -------------------------------------------------------------------------- */}
          <Tab key="social" title={title('Sosial')}>
            {/* ----------------------------- tab content ----------------------------- */}
            <div className="min-h-72 grid place-content-center">
              <span className="text-center text-3xl self-center pb-10">
                Logg inn
              </span>
              <span className="self-end">
                <AuthSocial />
              </span>
            </div>
          </Tab>
        </Tabs>
      </CorbadoProvider>
    </div>
  );
}
