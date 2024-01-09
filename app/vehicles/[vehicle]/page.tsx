import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import CheckIfAuthenticated from '@/lib/auth/check-auth';
import { Get, Resource } from '@/lib/callout/callout';
import Link from 'next/link';
import { RegisterFuel } from '@/components/vehicles/register-fuel';

import { Vehicle } from './model';
import Info from './info';
import Chart from './chart';

export default async function Page({
  params,
  searchParams
}: {
  params: { vehicle: string };
  searchParams: { modal: string };
}) {
  const showModal = searchParams?.modal;
  await CheckIfAuthenticated();

  const vehicle = (await Get(Resource.Vehicles, params.vehicle)) as Vehicle;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-3 gap-4">
        <Info vehicle={vehicle}></Info>
        <div className="col-span-2">
          <Chart></Chart>
        </div>
      </div>

      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-4 right-4"
        href="?modal=true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </Link>

      {showModal && <RegisterFuel />}
    </main>
  );
}
