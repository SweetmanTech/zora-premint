export const runtime = 'edge';

export async function GET() {
  const { ImageResponse } = await import('@vercel/og');

  // Use the Fetch API instead of Axios
  const response = await fetch('https://cached.quickindexer.xyz/leaderboard?days=30');
  const data = await response.json(); // Assuming the response is JSON
  console.log('SWEETS response', data.recordsCount);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex', // Set display to flex
          flexDirection: 'row', // Ensure content is aligned vertically
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
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
