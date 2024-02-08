import React from 'react';
import { auth } from '@/app/auth';
import Buttons from './buttons';

export default async function BlendMode() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="fixed w-full h-full">
      <video
        className="object-cover absolute w-full h-full"
        autoPlay
        playsInline
        loop
        muted
        style={{
          filter: 'grayscale(100%) contrast(140%) brightness(90%)'
        }}
      >
        <source src="/video/city.webm" type="video/webm" />
        <source src="/video/city.mp4" type="video/mp4" />
      </video>

      {/* name */}
      <br />
      <br />
      <br />
      <div className="grid gap-4 content-center min-h-screen bg-gradient-to-t from-slate-400 dark:from-slate-800 to-70% select-none">
        <h1
          className="font-bold text-white  text-center text-7xl lg:text-9xl xl:text-9xl 2xl:text-9xl"
          style={{ mixBlendMode: 'difference' }}
        >
          Bilboken
        </h1>
        <Buttons user={user} />
      </div>
    </div>
  );
}
