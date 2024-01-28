import Image from 'next/image';
import NeonPage from './neon';
import './unauthorized.css';
import wall_outside from '@/public/garage/wall_outside.jpg';

export default function UnauthorizedPage({ error }: { error: string }) {
  return (
    <div className="background w-full h-full fixed">
      <Image
        className="scale-110"
        src={wall_outside}
        layout="fill"
        priority={true}
        quality={80}
        alt={'garage wall'}
        style={{ filter: 'brightness(0.8)' }}
      />
      <div className="frame-top" />
      <div className="frame">
        <div className="shutter" />
        <NeonPage error={error} />
      </div>
    </div>
  );
}
