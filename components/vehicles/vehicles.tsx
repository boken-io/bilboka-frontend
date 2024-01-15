import { Metric, Text } from '@tremor/react';
import { Vehicles } from '@/lib/vehicles/model';
import Image from 'next/image';
import { Get, Resource } from '@/lib/vehicles/callout';

export default async function Vehicles() {
  const vehicles = (await Get(Resource.Vehicles)) as Vehicles;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <a
          key={vehicle.tegnkombinasjon}
          href={`/vehicles/${vehicle.id}`}
          className="block max-w-sm p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-900"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Text>{vehicle.tegnkombinasjon}</Text>
              <Metric>{vehicle.name}</Metric>
            </div>
            <div className="grow justify-self-end">
              <div>
                {/* make headlights go on in dark mode */}
                <Image
                  src={`/vehicles/volvo/${vehicle.id}.webp`}
                  width="100"
                  height="100"
                  alt="Vehicle"
                />
              </div>
            </div>
            <div className="justify-self-start">
              <Metric>{vehicle.tankVolume}</Metric>
              <Text>{vehicle.odometerUnit}</Text>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
