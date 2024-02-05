import { ImageResponse } from 'next/og';
import { Logo } from '@/components/icons/icons';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
  padding: 5
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(to right top, #041329, #002d46, #00484c, #006036, #527209)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Logo fill="white" size={size.height - size.padding} />
      </div>
    ),
    {
      ...size
    }
  );
}
