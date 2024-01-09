import '@/styles/globals.css';

import Nav from './_components/navbar/nav';
import Toast from './_components/toast/toast';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

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
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        <Toaster position="bottom-center" />
        {children}
        <Toast />
      </body>
    </html>
  );
}
