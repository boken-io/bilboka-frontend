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
        {siteConfig.resolutions.map((item, index) => (
          <link
            key={index}
            rel="apple-touch-startup-image"
            media={`screen and (device-width: ${item.width}px) and (device-height: ${item.height}px) and (-webkit-device-pixel-ratio: ${item.ratio}) and (orientation: ${item.orientation})`}
            href={`/media/${item.width * item.ratio}/${
              item.height * item.ratio
            }/apple-icon`}
          />
        ))}
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
