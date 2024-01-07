import { Vehicles, Vehicle } from './[vehicle]/model';

export async function FetchVehicles(): Promise<Vehicles> {
  try {
    const res = await fetch(
      `${process.env.BILBOKEN_API_URL}/vehicles${
        process.env.USE_SAMPLE ? '/sample' : ''
      }`
    );
    return (await res.json()) as Vehicles;
  } catch (err: any) {
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
    return [];
  }
}

export async function FetchEntries(vehicleId: string) {
  try {
    const res = await fetch(
      `${process.env.BILBOKEN_API_URL}/vehicles/${vehicleId}/entries/sample`
    );
    return await res.json();
  } catch (err: any) {
    return [];
  }
}
