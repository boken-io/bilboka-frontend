import { Metric, Text } from '@tremor/react';
import { Vehicles } from '@/lib/vehicles/model';
import { Get, Resource } from '@/lib/vehicles/callout';
import { User } from 'next-auth';
import VehiclePreview from './vehicles-components/vehicle-preview/vehicle-preview';
import BilskiltPage from './vehicles-components/bilskilt/bilskilt';

export default async function Vehicles({ user }: { user?: User }) {
  const vehicles = (await Get(Resource.Vehicles, user)) as Vehicles;

  return (
    <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <a
          key={vehicle.tegnkombinasjon}
          href={`/vehicles/${vehicle.id}`}
          className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-900"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <BilskiltPage>{vehicle.tegnkombinasjon}</BilskiltPage>
              <Metric>{vehicle.name}</Metric>
            </div>
            <div className="grow justify-self-end">
              <VehiclePreview vehicle={vehicle} />
            </div>
            <div className="justify-self-start">
              <Metric>{vehicle.tankVolume || 0}</Metric>
              <Text>{vehicle.odometerUnit}</Text>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
