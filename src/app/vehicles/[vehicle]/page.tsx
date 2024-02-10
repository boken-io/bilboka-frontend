import CheckIfAuthenticated from '@/lib/auth/check-auth';
import { Get, Resource } from '@/lib/vehicles/callout';

import { Vehicle } from '@/lib/vehicles/model';
import Info from '@/components/vehicles/cards/info';
import Chart from '@/components/vehicles/cards/chart';
import Entries from '@/components/vehicles/cards/entries';
import BilskiltPage from '@/components/vehicles/vehicles-components/bilskilt/bilskilt';
import RegisterFuelButton from '@/components/vehicles/vehicles-components/register-fuel/register-fuel-button';
import Odometer from '@/components/vehicles/cards/odometer';

export default async function Page({
  params,
  searchParams
}: {
  params: { vehicle: string };
  searchParams: { modal: string };
}) {
  const user = await CheckIfAuthenticated();

  const vehicle = (await Get(
    Resource.Vehicle,
    user,
    params.vehicle
  )) as Vehicle;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-3 gap-4">
        <BilskiltPage size={1} vehicle={vehicle} />
        <Info vehicle={vehicle}></Info>
        <div className="col-span-2">
          <Chart></Chart>
        </div>
        <div className="col-span-3">
          <Odometer vehicleId={params.vehicle} user={user} />
        </div>
      </div>
    </main>
  );
}
