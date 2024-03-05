import { NextRequest } from 'next/server';

export const runtime = 'edge';

const regularFont = fetch(new URL('/public/assets/HelveticaNeueMedium.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);
const boldFont = fetch(new URL('/public/assets/HelveticaNeueBold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export async function GET(req: NextRequest) {
  const [regularFontData, boldFontData] = await Promise.all([regularFont, boldFont]);

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
            'url("https://nftstorage.link/ipfs/bafybeiboye2kdtyziefq35p44z3sikceuehlvqn772k3h63sn6riwbbbku")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          fontFamily: '"HelveticaBold"',
        }}
        tw="flex gap-3"
      ></div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Helvetica',
          data: regularFontData,
          weight: 400,
        },
        {
          name: 'HelveticaBold',
          data: boldFontData,
          weight: 700,
        },
      ],
    },
  );
}
