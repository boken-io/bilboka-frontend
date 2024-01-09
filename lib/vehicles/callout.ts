import { Vehicles } from './model';
import { notFound } from 'next/navigation';

export { Get, Resource };

enum Resource {
  Vehicles = 'vehicles',
  Entries = 'entries',
  Datapoints = 'datapoints'
}

async function Get(resource: Resource, vehicleId?: string): Promise<any> {
  const response = await doCallout(resource, vehicleId);
  return (await response.json()) as Vehicles;
}

async function doCallout(resource: Resource, vehicleId?: string) {
  const response = await fetch(GetUrl(resource, vehicleId), {
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  });

  if (!response.ok) {
    if (response.status === 404) {
      return notFound();
    }
    return Promise.reject(`HTTP error! status: ${response.status}`);
  }

  return response;
}

function GetUrl(
  resource: Resource,
  vehicleId: string | undefined
): import('undici-types').RequestInfo {
  return `${GetDomain()}/${GetPath(resource, vehicleId)}`;
}

function GetDomain(): string {
  const apiUrl = process.env.BILBOKEN_API_URL ?? '';
  if (!apiUrl) {
    throw new Error('API URL is empty or null');
  }
  return apiUrl;
}

function UseSample(): string {
  return process.env.USE_SAMPLE == 'true' ? 'sample' : '';
}

function GetPath(resource: Resource, vehicleId?: string): string {
  switch (resource) {
    case Resource.Vehicles:
      return vehicleId
        ? `vehicles/${vehicleId}/${UseSample()}`
        : `vehicles/${UseSample()}`;
    case (Resource.Entries, Resource.Datapoints):
      if (!vehicleId) {
        throw new Error('Vehicle ID is missing');
      }
      return `vehicles/${vehicleId}/${resource}/${UseSample()}`;
    default:
      throw new Error('Invalid resource');
  }
}
