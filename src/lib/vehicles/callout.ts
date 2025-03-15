import { notFound } from 'next/navigation';
import crypto, { KeyObject } from 'crypto';
import { User } from 'next-auth';
import { Unauthorized } from './unauthorized-exception';

export { Get, Resource };

enum Resource {
  Vehicles,
  Vehicle,
  Entries,
  Datapoints
}

async function Get(
  resource: Resource,
  user?: User,
  vehicleId?: string
): Promise<any> {
  const response = await doCallout(resource, vehicleId, user); // TODO fix order of params
  return await response.json();
}

async function doCallout(resource: Resource, vehicleId?: string, user?: User) {
  const response = await fetch(GetUrl(resource, vehicleId) as string, {
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
    if (response.status === 401) {
      if (resource == Resource.Vehicles) {
        return response;
      } else {
        throw new Error(`vehicle #${vehicleId}`);
      }
    }
    // TODO add switch
    return Promise.reject(`HTTP error! status: ${response.status}`);
  }

  return response;
}

function GetUrl(resource: Resource, vehicleId: string | undefined): string {
  return `${GetDomain()}/${GetPath(resource, vehicleId)}/${UseSample()}`;
}

function GetDomain(): string {
  return process.env.BILBOKEN_API_URL ?? throwError('API URL is empty or null');
}

function UseSample(): string {
  return process.env.USE_SAMPLE == 'true' ? 'sample' : '';
}

function GetPath(resource: Resource, vehicleId?: string): string {
  if (resource !== Resource.Vehicles && !vehicleId) {
    throw new Error('Vehicle ID is missing');
  }

  switch (resource) {
    case Resource.Vehicles:
      return `vehicles`;
    case Resource.Vehicle:
      return `vehicles/${vehicleId}`;
    case Resource.Entries:
      return `vehicles/${vehicleId}/entries`;
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

function throwError(errorMessage: string): string {
  throw new Error(errorMessage);
}
