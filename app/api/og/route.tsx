import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;
  const days = queryParams.get('days') || 30;

  console.log('SWEETS body', days);

  const { ImageResponse } = await import('@vercel/og');

  // Use the Fetch API instead of Axios
  const response = await fetch(`https://cached.quickindexer.xyz/leaderboard?days=${days}`);
  const data = await response.json();
  console.log('SWEETS response', data.recordsCount);

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
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
        }}
      >
        <img
          alt="zorb"
          height={50}
          width={50}
          src="https://nftstorage.link/ipfs/bafybeifbkoma4zfff5locnoxhgwpx2eehezcbctws32qsf3nsexmgtfboy"
        />
        Number of Creators earning on Zora: {data.recordsCount}{' '}
        <img
          alt="zorb"
          height={50}
          width={50}
          src="https://nftstorage.link/ipfs/bafybeifbkoma4zfff5locnoxhgwpx2eehezcbctws32qsf3nsexmgtfboy"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
