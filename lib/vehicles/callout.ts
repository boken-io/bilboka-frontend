import { notFound } from 'next/navigation';
import crypto, { KeyObject } from 'crypto';
import { User } from 'next-auth';

export { Get, Resource };

enum Resource {
  Vehicles = 'vehicles',
  Entries = 'entries',
  Datapoints = 'datapoints'
}

async function Get(
  resource: Resource,
  user?: User,
  vehicleId?: string
): Promise<any> {
  const response = await doCallout(resource, vehicleId, user);
  return await response.json();
}

async function doCallout(resource: Resource, vehicleId?: string, user?: User) {
  const response = await fetch(GetUrl(resource, vehicleId), {
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'x-api-key': getToken(user)
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
    case Resource.Entries:
      if (!vehicleId) {
        throw new Error('Vehicle ID is missing');
      }
      return `vehicles/${vehicleId}/entries/${UseSample()}`;
    default:
      throw new Error('Invalid resource');
  }
}
function getToken(user?: User) {
  const public_key = Buffer.from(
    process.env.API_PUBLIC_KEY ?? '',
    'base64'
  ).toString('ascii');
  const email = user?.email ?? '';

  const encrypted = crypto.publicEncrypt(
    {
      key: public_key,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
    },
    Buffer.from(email)
  );
  return encrypted.toString('base64');
}
