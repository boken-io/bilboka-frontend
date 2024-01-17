'use client';

import Ground from './ground';
import SunAndMoon from './sun-and-moon';

export default function SplashScreen() {
  return (
    <div className="min-h-screen min-w-screen">
      <SunAndMoon />
      <Ground />
    </div>
  );
}
