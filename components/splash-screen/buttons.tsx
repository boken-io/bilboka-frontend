'use client';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function Buttons({ user }: { user: any }) {
  const router = useRouter();

  return (
    <>
      {!user && (
        <button
          className="place-self-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full shrink flex-none w-36"
          style={{ mixBlendMode: 'difference', color: '#fff' }}
          onClick={() => router.push('?login=true')}
        >
          Logg inn
        </button>
      )}

      {user &&
        siteConfig.homeNavItems.map((item, index) => (
          <button
            key={index}
            className="place-self-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full shrink flex-none w-36"
            style={{ mixBlendMode: 'difference', color: '#fff' }}
            onClick={() => {
              router.push(item.href);
            }}
          >
            {item.label}
          </button>
        ))}
    </>
  );
}
