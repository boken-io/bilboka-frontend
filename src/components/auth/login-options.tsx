'use client';

import { Card } from '@tremor/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const imageStyle = {
  // TODO: add hover effect
};
const disabled = {
  cursor: 'not-allowed',
  opacity: '0.3'
};

export default function LoginOptions() {
  const pathname = usePathname();

  function login(provider: string) {
    signIn(provider, { callbackUrl: pathname });
  }

  return (
    <div className="grid grid-flow-col auto-cols-max gap-4 justify-center">
      <Image
        className="rounded-full cursor-pointer"
        onClick={() => login('apple')}
        src="/auth/apple.webp"
        height={64}
        width={64}
        alt="Apple Login"
        style={disabled}
      />
      <Image
        className="rounded-full cursor-pointer"
        onClick={() => login('facebook')}
        src="/auth/facebook.webp"
        height={64}
        width={64}
        alt="Facebook Login"
        style={imageStyle}
      />
      <Image
        className="rounded-full cursor-pointer"
        onClick={() => login('google')}
        src="/auth/google.webp"
        height={64}
        width={64}
        alt="Google Login"
        style={disabled}
      />
      <Image
        className="rounded-full cursor-pointer"
        onClick={() => login('github')}
        src="/auth/github.webp"
        height={64}
        width={64}
        alt="GitHub Login"
        style={imageStyle}
      />
    </div>
  );
}
