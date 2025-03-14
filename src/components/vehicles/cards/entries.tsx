import type { Entries } from '@/lib/vehicles/model';
import { Get, Resource } from '@/lib/vehicles/callout';
import { User } from 'next-auth';
import { Card, AreaChart, Title, Metric, Text } from '@tremor/react';
import moment from 'moment';

type EntryChart = {
  'Week Number': String;
  NOK: number;
  Odometer: number;
  Drivstoff: number;
};

export default async function Entries({
  vehicleId,
  user
}: {
  vehicleId: string;
  user?: User;
}) {
  const entries = (await Get(Resource.Entries, user, vehicleId)) as Entries;

  let data: EntryChart[] = entries.map((entry) => ({
    'Week Number': `${moment(entry.dateTime).year()}-${moment(
      entry.dateTime
    ).week()}`,
    NOK: entry.costNOK,
    Odometer: entry.odometer,
    Drivstoff: entry.amount
  }));

  return (
    <Card>
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['NOK', 'Odometer', 'Drivstoff']}
        index="Week Number"
        colors={['indigo', 'fuchsia', 'pink']}
        yAxisWidth={60}
      />
    </Card>
  );
}
