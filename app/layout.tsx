import '@/styles/globals.css';

import Toast from '@/components/toast/toast';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/themes/theme-provider';
import clsx from 'clsx';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import Nav from '../components/navbar/nav';
import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfdfe' },
    { media: '(prefers-color-scheme: dark)', color: '#040507' }
  ]
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },

  description: siteConfig.description,
  icons: {
    icon: '/icon?<generated>',
    shortcut: '/icon?<generated>',
    apple: '/apple-icon?<generated>'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
      </head>
      <body
        className={clsx(
          'h-full bg-slate-50 dark:bg-[#0d1117] min-h-screen font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <main>
            <Suspense>
              <Nav />
            </Suspense>
            <Toaster position="bottom-center" />
            {children}
            {/* <Toast /> */}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
