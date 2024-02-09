'use client';
import { LoginIcon, RegisterIcon } from '@/components/icons/icons';
import { useRouter } from 'next/navigation';

export default function Buttons({ user }: { user: any }) {
  const router = useRouter();

  // if (user) return '';

  return (
    <div className="grid grid-cols-3 mx-4 gap-4 place-self-center">
      <button
        className="bg-white hover:bg-gray-200 text-black font-bold rounded-full py-2 px-4 grid grid-cols-1 justify-items-center"
        style={{ mixBlendMode: 'difference' }}
        onClick={() => router.push('?login=true', { scroll: false })}
      >
        <span>🔐</span>
        Logg inn
      </button>
      <button
        className="bg-white hover:bg-gray-200 text-black font-bold rounded-full py-2 px-4 grid grid-cols-1 justify-items-center"
        style={{ mixBlendMode: 'difference' }}
        onClick={() => router.push('?register=true', { scroll: false })}
      >
        <span>✍️</span>
        Registrer
      </button>
      <button
        className="bg-white hover:bg-gray-200 text-black font-bold rounded-full py-2 px-4 grid grid-cols-1 justify-items-center"
        style={{ mixBlendMode: 'difference' }}
        onClick={() => router.push('?sample=true', { scroll: false })}
      >
        <span>🛞</span>
        Prøvekjør
      </button>
    </div>
  );
}
