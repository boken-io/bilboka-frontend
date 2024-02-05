import Image from 'next/image';
import './neon.css';
import wall_inside from '@/public/garage/wall_inside.jpg';

export default function NeonPage({ error }: { error: string }) {
  return (
    <div className="w-fit h-fit">
      <Image
        className="image"
        src={wall_inside}
        priority={true}
        quality={80}
        sizes="100vw"
        fill={true}
        alt={'garage wall'}
        style={{ objectPosition: 'bottom', objectFit: 'contain' }}
      />
      <div className="logo grid justify-items-center content-center min-h-screen">
        <b className="neon">
          <span className="text-9xl">{error}</span>
          <p className="text-7xl">
            Car is out <span className="disabled">/ in</span>
          </p>
        </b>
      </div>
    </div>
  );
}
