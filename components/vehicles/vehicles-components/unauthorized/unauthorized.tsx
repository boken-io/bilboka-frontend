import Image from 'next/image';
import NeonPage from './neon';
import './unauthorized.css';

export default function UnauthorizedPage({ error }: { error: string }) {
  return (
    <div className="background w-full h-full fixed">
      <Image
        src="/garage/garage.jpg"
        layout="fill"
        priority={true}
        quality={80}
        alt={'garage wall'}
      />
      <div className="frame-top" />
      <div className="frame">
        <div className="shutter" />
      </div>
    </div>
  );
}
