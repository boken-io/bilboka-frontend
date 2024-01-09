import { Vehicles } from '../../app/vehicles/[vehicle]/model';

function UseSample(): string {
  return process.env.USE_SAMPLE ? '/sample/' : '';
}

export enum Resource {
  Vehicles = 'vehicles',
  Entries = 'entries',
  Datapoints = 'datapoints'
}

function GetDomain(): string {
  const apiUrl = process.env.BILBOKEN_API_URL ?? '';
  if (!apiUrl) {
    throw new Error('API URL is empty or null');
  }
  return apiUrl;
}

export async function Get(
  resource: Resource,
  vehicleId?: string
): Promise<any> {
  const data = await doCallout(resource, vehicleId);
  return data as Vehicles;
}

function GetUrl(resource: Resource, vehicleId?: string): string {
  if (resource !== Resource.Vehicles && !vehicleId) {
    throw new Error('Vehicle ID is missing');
  }

  if (resource === Resource.Vehicles && !vehicleId) {
    return `vehicles${UseSample()}`;
  }

  switch (resource) {
    case Resource.Vehicles:
      return `vehicles/${vehicleId}${UseSample()}`;
    case (Resource.Entries, Resource.Datapoints):
      return `vehicles/${vehicleId}/${resource}${UseSample()}`;
    default:
      throw new Error('Invalid resource');
  }
}
async function doCallout(resource: Resource, vehicleId?: string) {
  const response = await fetch(
    `${GetDomain()}/${GetUrl(resource, vehicleId)}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      }
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
