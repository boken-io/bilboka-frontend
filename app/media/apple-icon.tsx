import { ImageResponse } from 'next/og';
import { Logo } from '@/components/icons/icons';

export const runtime = 'edge';

export const size = {
  width: 512,
  height: 512,
  padding: 200
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
            'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Logo
          fill="white"
          height={size.height - size.padding}
          width={size.width - size.padding}
        />
      </div>
    ),
    {
      ...size
    }
  );
}
