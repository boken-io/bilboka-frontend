'use client';

import Ground from './ground';
import SunAndMoon from './sun-and-moon';
import { useTheme } from 'next-themes';

export default function CarSlideshow() {
  const { theme } = useTheme();
  let isDark = theme === 'dark';
  let isLight = theme === 'light';

  return (
    <div className="min-h-screen min-w-screen">
      <SunAndMoon />
      <Ground />
    </div>
  );
}
