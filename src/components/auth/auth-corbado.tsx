'use client';

import corbadoTranslations from '@/config/corbado-translations';
import { Login, SignUp } from '@corbado/react';
import { CorbadoProvider } from '@corbado/react';
import { useRouter, usePathname } from 'next/navigation';
import { Tabs, Tab, Card, CardBody, CardHeader } from '@nextui-org/react';
import React from 'react';

export type Modes = 'login' | 'register';

export default function CorbadoLogin(props: { mode: Modes }) {
  const router = useRouter();
  const path = usePathname();

  const [selected, setSelected] = React.useState(props.mode);

  function closeModal() {
    router.push(path);
  }

  return (
    <CorbadoProvider
      projectId={process.env.NEXT_PUBLIC_CORBADO_PROJECT_ID}
      darkMode="off"
      customTranslations={corbadoTranslations}
    >
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key="login" title="Logg inn">
          <Login onLoggedIn={() => closeModal()} />
        </Tab>
        <Tab key="register" title="Registrer">
          <SignUp onLoggedIn={() => closeModal()} />
        </Tab>
      </Tabs>
    </CorbadoProvider>
  );
}
