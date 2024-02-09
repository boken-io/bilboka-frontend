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
import QuickBar from '@/components/quick-bar/quick-bar';
import ModalHandler from '@/components/modals/modal-handler';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.name
    // startUpImage: [],
  },

  description: siteConfig.description,
  icons: {
    icon: '/media/icon',
    shortcut: '/media/icon',
    apple: '/media/apple-icon'
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
        {['portrait', 'landscape'].map((orientation) =>
          siteConfig.resolutions.map((device, index) => (
            <link
              key={index}
              rel="apple-touch-startup-image"
              media={`screen and (device-width: ${device.width}px) and (device-height: ${device.height}px) and (-webkit-device-pixel-ratio: ${device.ratio}) and (orientation: ${orientation})`}
              href={`/media/${device.width * device.ratio}/${
                device.height * device.ratio
              }/apple-icon`}
            />
          ))
        )}
      </head>
      <body
        className={clsx(
          'h-full bg-slate-50 dark:bg-[#0d1117] min-h-screen font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <main>
            {/* TODO: add suspense on children for loading UI */}
            <Suspense>
              <Nav />
              <ModalHandler />
            </Suspense>
            <Toaster position="bottom-center" />
            {children}
            <QuickBar />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
