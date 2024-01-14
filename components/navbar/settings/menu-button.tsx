'use client';

import { usePathname, useRouter } from 'next/navigation';
import { classNames } from '../navbar';

export default function SettingsButton() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      className="hover:bg-gray-100 flex w-full px-4 py-2 text-sm text-gray-700"
      onClick={() => router.push(pathname + '?settings=true')}
    >
      Innstillinger
    </button>
  );
}
