import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import CheckIfAuthenticated from '../../_components/check-auth';
import { FetchVehicle, Vehicle } from '../fetch';
import Info from './info';

export default async function Page({
  params
}: {
  params: { vehicleId: string };
}) {
  await CheckIfAuthenticated();

  const vehicle = (await FetchVehicle('2')) as Vehicle;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        <Info vehicle={vehicle}></Info>
      </Grid>
    </main>
  );
}
