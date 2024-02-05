'use client';

import { Card } from '@tremor/react';
import { FormEvent } from 'react';

export default function Page() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-5xl">
      <Card className="px-12">
        <h1 className="flow text-5xl font-extrabold mb-5">
          Delete Your Account
        </h1>
        <p>
          We understand that circumstances may lead you to consider deleting
          your account, and we want to make this process as straightforward as
          possible. Please follow the instructions below to initiate the account
          deletion request:
        </p>

        <br />
        <h3 className="text-3xl mb-4">Steps to Delete Your Account</h3>
        <ul
          role="list"
          className="marker:text-gray-600 list-decimal ps-5 space-y-2 text-sm"
        >
          <li>
            Go to the{' '}
            <a className="underline" href="/contact" target="_blank">
              contact page
            </a>
          </li>
          <li>Provide Necessary Information</li>
          <li>You will receive further information via email</li>
        </ul>

        <br />
        <p>Thank you for choosing Boken.io!</p>

        <p>Sincerely, The Boken.io Team</p>
      </Card>
    </main>
  );
}
