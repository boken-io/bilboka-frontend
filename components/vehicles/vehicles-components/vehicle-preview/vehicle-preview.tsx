import Image from 'next/image';
import { Vehicle } from '@/lib/vehicles/model';
import './vehicle-preview.css';

export default function VehiclePreview({ vehicle }: { vehicle: Vehicle }) {
  let images = new Map<string, string>([['KT65881', 'volvo/xc70']]);

  function getImage(tegnkombinasjon: string): string {
    return images.get(tegnkombinasjon) || 'generic';
  }
  return (
    <>
      <Image
        src={`/vehicles/${getImage(vehicle.tegnkombinasjon)}.webp`}
        className="dark:brightness-75"
        width="100"
        height="100"
        alt="Vehicle"
      />
      <div className="headlights z-10 absolute" />
    </>
  );
}
