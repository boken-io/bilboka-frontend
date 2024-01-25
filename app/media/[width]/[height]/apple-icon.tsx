import { ImageResponse } from 'next/og';
import { Logo } from '@/components/icons/icons';

export const runtime = 'edge';
export const contentType = 'image/png';

export default function Splash({
  params
}: {
  params: { height: number; width: number };
}) {
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
        <Logo fill="white" size={params.width * 0.4} />
      </div>
    ),
    {
      ...{
        width: params.width,
        height: params.height
      }
    }
  );
}
