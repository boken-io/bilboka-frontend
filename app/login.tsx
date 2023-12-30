'use client';

import { Heading } from '@chakra-ui/react';
import { Card, Title, Text } from '@tremor/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const imageStyle = {
  // TODO: add hover effect
};

export default function LoginOptions() {
  return (
    <Card className="grid gap-6 justify-items-center">
      <h2 className="text-2xl">Logg inn</h2>
      <div className="grid grid-flow-col auto-cols-max gap-4 justify-center">
        <Image
          className="rounded-full cursor-pointer"
          onClick={() => signIn('apple')}
          src="/apple.webp"
          height={64}
          width={64}
          alt="Apple Login"
          style={imageStyle}
        />
        <Image
          className="rounded-full cursor-pointer"
          onClick={() => signIn('facebook')}
          src="/facebook.webp"
          height={64}
          width={64}
          alt="Facebook Login"
          style={imageStyle}
        />
        <Image
          className="rounded-full cursor-pointer"
          onClick={() => signIn('google')}
          src="/google.webp"
          height={64}
          width={64}
          alt="Google Login"
          style={imageStyle}
        />
        <Image
          className="rounded-full cursor-pointer"
          onClick={() => signIn('github')}
          src="/github.webp"
          height={64}
          width={64}
          alt="GitHub Login"
          style={imageStyle}
        />
      </div>
    </Card>
  );
}
