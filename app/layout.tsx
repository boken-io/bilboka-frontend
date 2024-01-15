import '@/styles/globals.css';

import Toast from '@/components/toast/toast';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/themes/theme-provider';
import clsx from 'clsx';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '../components/navbar/nav';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'h-full bg-slate-50 dark:bg-[#0d1117] min-h-screen font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <main>
            <Suspense>
              <Navbar />
            </Suspense>
            <Toaster position="bottom-center" />
            {children}
            <Toast />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
