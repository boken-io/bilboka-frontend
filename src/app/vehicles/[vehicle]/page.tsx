import CheckIfAuthenticated from '@/lib/auth/check-auth';
import { Get, Resource } from '@/lib/vehicles/callout';

import { Vehicle, Entries } from '@/lib/vehicles/model';
import Info from '@/components/vehicles/cards/info';
import Chart from '@/components/vehicles/cards/chart';
import BilskiltPage from '@/components/vehicles/vehicles-components/bilskilt/bilskilt';
import RegisterFuelButton from '@/components/vehicles/vehicles-components/register-fuel/register-fuel-button';
import OdometerStats from '@/components/vehicles/cards/odometer-stats';

export default async function Page({
  params
}: {
  params: { vehicle: string };
}) {
  const user = await CheckIfAuthenticated();

  const vehicle = (await Get(
    Resource.Vehicle,
    user,
    params.vehicle
  )) as Vehicle;

  const entries = (await Get(Resource.Entries, user, vehicle.id)) as Entries;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-3 gap-4">
        <BilskiltPage size={1} vehicle={vehicle} />
        <Info vehicle={vehicle}></Info>
        <div className="col-span-2">
          <Chart></Chart>
        </div>
        <div className="col-span-3">
          <OdometerStats entries={entries} />
        </div>
      </div>
    </main>
  );
}
