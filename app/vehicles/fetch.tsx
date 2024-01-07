import { Vehicles, Vehicle } from './[vehicle]/model';
import toast from 'react-hot-toast';

export async function FetchVehicles(): Promise<Vehicles> {
  try {
    const res = await fetch(`${process.env.BILBOKEN_API_URL}/vehicles/sample`);
    return (await res.json()) as Vehicles;
  } catch (err: any) {
    toast.error(err);
    return [];
  }
}

export async function FetchVehicle(vehicleId: string) {
  try {
    const res = await fetch(
      `${process.env.BILBOKEN_API_URL}/vehicles/${vehicleId}/sample`
    );
    return await res.json();
  } catch (err: any) {
    toast.error(err);
    return [];
  }
}
