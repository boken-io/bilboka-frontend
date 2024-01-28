import { Metric, Text } from '@tremor/react';
import { Entries } from '@/lib/vehicles/model';
import { Get, Resource } from '@/lib/vehicles/callout';
import { User } from 'next-auth';

export default async function Entries({
  vehicleId,
  user
}: {
  vehicleId: string;
  user: User;
}) {
  const entries = (await Get(Resource.Entries, user, vehicleId)) as Entries;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="block max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-900"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Text>{entry.dateTime}</Text>
              <Metric>{entry.costNOK}</Metric>
            </div>
            <div className="justify-self-start">
              <Metric>{entry.amount}</Metric>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
