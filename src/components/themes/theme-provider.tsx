// app/providers.tsx
'use client';

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        themeColor={{ dark: '#030507', light: '#fdfdfe' }}
      >
        {/* TODO: fetch dynamically */}
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
