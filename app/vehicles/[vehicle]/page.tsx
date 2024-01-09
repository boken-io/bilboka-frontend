import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import CheckIfAuthenticated from '../../../components/check-auth';
import { Get, Resource } from '../../../lib/callout/callout';

import { Vehicle } from './model';
import Info from './info';
import Chart from './chart';

export default async function Page({
  params
}: {
  params: { vehicle: string };
}) {
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
    </main>
  );
}
