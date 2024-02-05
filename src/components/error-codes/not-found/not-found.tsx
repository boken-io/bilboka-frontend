'use client';

import './not-found.css';
import { redirect, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="error min-h-screen min-w-screen">
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <h1>
          Error <span className="errorcode">404</span>
        </h1>
        <p className="output">
          <span className="errorcode">.{pathname}</span> not a valid command.
        </p>
        <p className="output">
          Please try to{' '}
          <a className="link" onClick={() => router.back()}>
            go back
          </a>{' '}
          or{' '}
          <a className="link" onClick={() => redirect('/')}>
            return to the homepage
          </a>
          .
        </p>
        <p className="output">Good luck.</p>
      </div>
    </div>
  );
}
