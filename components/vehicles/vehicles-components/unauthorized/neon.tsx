import Image from 'next/image';
import './neon.css';

export default function NeonPage() {
  return (
    <div className="neon w-fit h-fit">
      <Image
        src="/garage/garage.jpg"
        layout="fill"
        priority={true}
        quality={80}
        alt={'garage wall'}
      />
      <div className="logo">
        <b>
          d<span>ri</span>bb<span>b</span>le
        </b>
      </div>
    </div>
  );
}
