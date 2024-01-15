'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function LoginPage() {
  const imageStyle = {
    // TODO: add hover effect
  };

  const disabled = {
    cursor: 'not-allowed',
    opacity: '0.3'
  };

  return (
    <div className="mt-5">
      <div className="grid grid-flow-col auto-cols-max gap-4 justify-center content-center">
        <Image
          className="rounded-full cursor-pointer"
          onClick={() => signIn('apple')}
          src="/auth/apple.webp"
          height={64}
          width={64}
          alt="Apple Login"
          style={disabled}
        />
        <Image
          className="rounded-full cursor-pointer"
          onClick={() => signIn('facebook')}
          src="/auth/facebook.webp"
          height={64}
          width={64}
          alt="Facebook Login"
          style={imageStyle}
        />
        <Image
          className="rounded-full cursor-pointer"
          onClick={() => signIn('google')}
          src="/auth/google.webp"
          height={64}
          width={64}
          alt="Google Login"
          style={disabled}
        />
        <Image
          className="rounded-full cursor-pointer"
          onClick={() => signIn('github')}
          src="/auth/github.webp"
          height={64}
          width={64}
          alt="GitHub Login"
          style={imageStyle}
        />
      </div>
    </div>
  );
}
