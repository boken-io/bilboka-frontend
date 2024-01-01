import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import CheckIfAuthenticated from '../../_components/check-auth';
import { FetchVehicle, Vehicle } from '../fetch';
import Info from './info';
import Chart from './chart';

export default async function Page({
  params
}: {
  params: { vehicleId: string };
}) {
  await CheckIfAuthenticated();

  const vehicle = (await FetchVehicle('2')) as Vehicle;

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
