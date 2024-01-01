import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import { FetchVehicles, Vehicles } from './fetch';
import CheckIfAuthenticated from '../_components/check-auth';

export default async function Page() {
  await CheckIfAuthenticated();

  const vehicles = (await FetchVehicles()) as Vehicles;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {vehicles.map((item) => (
          <Card key={item.tegnkombinasjon}>
            <Title>{item.tegnkombinasjon}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.name}</Metric>
            </Flex>
            <Flex
              justifyContent="end"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.tankVolume}</Metric>
              <Text>{item.odometerUnit}</Text>
            </Flex>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              {/* <button onClick={redirect('/vehicles/' + item.id)}></button> */}
            </Flex>
          </Card>
        ))}
      </Grid>
    </main>
  );
}
