export type Vehicles = Vehicle[];

export interface Vehicle {
  id: string;
  name: string;
  tegnkombinasjon: string;
  odometerUnit: string;
  fuelType: string;
  tankVolume: number;
}

export async function FetchVehicles() {
  try {
    const res = await fetch(`${process.env.BILBOKEN_API_URL}/vehicles/sample`);
    return await res.json();
  } catch (err) {
    return err;
  }
}
