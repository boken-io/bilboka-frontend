import CheckIfAuthenticated from '@/lib/auth/check-auth';
import Vehicles from '@/components/vehicles/vehicles';

export default async function Page() {
  await CheckIfAuthenticated();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Vehicles></Vehicles>
    </main>
  );
}
