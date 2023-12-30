'use client';

import { Title, Text, Card, Grid } from '@tremor/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function LoginOptions() {
  return (
    <Card>
      <Title>Log in</Title>
      <Grid numItems={3} className="gap-6">
        <Card
          key="apple"
          className="cursor-pointer"
          onClick={() => signIn('apple')}
        >
          <Image
            className="rounded-full"
            src="/apple.webp"
            height={64}
            width={64}
            alt="Apple Login"
          />
        </Card>
        <Card
          key="facebook"
          className="cursor-pointer"
          onClick={() => signIn('facebook')}
        >
          <Image
            className="rounded-full"
            src="/facebook.webp"
            height={64}
            width={64}
            alt="Facebook Login"
          />
        </Card>
        <Card
          key="github"
          className="cursor-pointer"
          onClick={() => signIn('github')}
        >
          <Image
            className="rounded-full"
            src="/github.webp"
            height={64}
            width={64}
            alt="GitHub Login"
          />
        </Card>
      </Grid>
    </Card>
  );
}
