import '@/styles/globals.css';

import Nav from '@/components/navbar/nav';
import Toast from '@/components/toast/toast';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/themes/theme-provider';

export const metadata = {
  title: 'Bilboken',
  description: 'Administrer drivstoff-priser.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`h-full bg-slate-50 dark:bg-[#0d1117]`}>
        <ThemeProvider>
          <main>
            <Suspense>
              <Nav />
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
