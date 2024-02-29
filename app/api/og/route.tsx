import LandingPageHeader from '@/components/LandingPage/LandingPageHeader';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;

  const { ImageResponse } = await import('@vercel/og');
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: 'black',
          background: 'white',
          backgroundImage:
            'url("https://nftstorage.link/ipfs/bafybeiboye2kdtyziefq35p44z3sikceuehlvqn772k3h63sn6riwbbbku")', // Add your background image URL here
          backgroundSize: 'cover', // Ensure the background covers the div
          backgroundPosition: 'center', // Center the background image
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
        }}
        tw="flex gap-3"
      >
        <LandingPageHeader />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
