import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import { Vehicles } from './[vehicle]/model';
import { Get, Resource } from '@/lib/callout/callout';
import CheckIfAuthenticated from '@/lib/auth/check-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  await CheckIfAuthenticated();

  const vehicles = (await Get(Resource.Vehicles)) as Vehicles;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {vehicles.map((vehicle) => (
          <a
            key={vehicle.tegnkombinasjon}
            href={`/vehicles/${vehicle.id}`}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 "
          >
            <Title>{vehicle.tegnkombinasjon}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{vehicle.name}</Metric>
            </Flex>
            <Flex
              justifyContent="end"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{vehicle.tankVolume}</Metric>
              <Text>{vehicle.odometerUnit}</Text>
            </Flex>
          </a>
        ))}
      </Grid>
    </main>
  );
}
