import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import CheckIfAuthenticated from '../../_components/check-auth';
import { FetchVehicle, Vehicle } from '../fetch';

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
        <Card key={vehicle.tegnkombinasjon}>
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
        </Card>
      </Grid>
    </main>
  );
}
