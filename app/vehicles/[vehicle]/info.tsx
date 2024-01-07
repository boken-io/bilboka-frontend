import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import CheckIfAuthenticated from '../../../components/check-auth';
import { FetchVehicle, Vehicle } from '../fetch';

export default function Info({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card key={vehicle.tegnkombinasjon}>
      <Title>{vehicle.tegnkombinasjon}</Title>
      <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
        <Metric>{vehicle.name}</Metric>
      </Flex>
      <Flex justifyContent="end" alignItems="baseline" className="space-x-2">
        <Metric>{vehicle.tankVolume}</Metric>
        <Text>{vehicle.odometerUnit}</Text>
      </Flex>
    </Card>
  );
}
