import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import LoginOptions from './login';

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <LoginOptions></LoginOptions>
    </main>
  );
}
