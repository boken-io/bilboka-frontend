import { Card } from '@tremor/react';
import { auth } from '../api/auth/[...nextauth]/route';
import FetchVehicles from './fetch';

export default async function Page() {
  const url = process.env.AUTH_URL;
  const session = await auth();

  const vehicles = await FetchVehicles();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-5xl">
      <Card className="px-12">
        <h1 className="flow text-5xl font-extrabold mb-5">Biler</h1>

        {JSON.stringify(vehicles, null, 2)}
      </Card>
    </main>
  );
}
