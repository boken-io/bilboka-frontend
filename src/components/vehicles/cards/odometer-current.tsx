import { Entries } from '@/lib/vehicles/model';
import { Get, Resource } from '@/lib/vehicles/callout';
import { User } from 'next-auth';
import { Card, AreaChart, Title, Metric, Text } from '@tremor/react';
import moment from 'moment';

type EntryChart = {
  formattedDate: String;
  Kilometerstand: number;
};

export default async function CurrentOdometer({
  entries
}: {
  entries: Entries;
}) {
  let entryMap = new Map<string, EntryChart>();
  entries.forEach((entry) => {
    const { dateTime, odometer } = entry;
    let formattedDate = moment(dateTime).format('mm YYYY');

    entryMap.set(formattedDate, {
      formattedDate: formattedDate,
      Kilometerstand: odometer
    });
  });

  return (
    <Card>
      <Title>Kilometerstand</Title>
      <Text>Økning på kilomeeterstand over tid</Text>
      <AreaChart
        className="mt-4 h-80"
        data={Array.from(entryMap.values())}
        categories={['Kilometerstand']}
        index="formattedDate"
        colors={['indigo']}
        yAxisWidth={60}
      />
    </Card>
    // valueFormatter={(number: number) =>
    //   `$ ${Intl.NumberFormat('no').format(number).toString()}`
    // }
  );
}
