'use client';
import { useRouter } from 'next/navigation';

export default function Buttons({ user }: { user: any }) {
  const router = useRouter();

  return (
    <>
      {!user && (
        <button
          className="place-self-center bg-white  hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full shrink flex-none w-36"
          style={{ mixBlendMode: 'difference' }}
          onClick={() => router.push('?login=true')}
        >
          Logg inn
        </button>
      )}
    </>
  );
}
