'use client';

import { Card } from '@tremor/react';
import { FormEvent } from 'react';

export default function Page() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card>
        <p>
          Welcome to Boken.io! We understand that circumstances may lead you to
          consider deleting your account, and we want to make this process as
          straightforward as possible. Please follow the instructions below to
          initiate the account deletion request:
        </p>

        <br />
        <h3 className="text-xl">Steps to Delete Your Account</h3>
        <p>
          1. Go to{' '}
          <a href="https://bil.boken.io/contact" target="_blank">
            https://bil.boken.io/contact
          </a>
        </p>
        <p>2. Provide Necessary Information</p>

        <br />
        <p>Thank you for choosing Boken.io!</p>

        <p>Sincerely, The Boken.io Team</p>
      </Card>
    </main>
  );
}
