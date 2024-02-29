import ArtistTitle from '@/components/ArtistTitle';
import FrameFooter from '@/components/FrameFooter';
import Leaderboard from '@/components/Leaderboard';
import getEthPrice from '@/lib/getEthPrice';
import getAllIndexedData from '@/lib/getIndexedData';
import getLeaderboard from '@/lib/getLeaderboard';
import { ethPublicClient } from '@/lib/publicClient';
import { NextRequest } from 'next/server';
import { normalize } from 'viem/ens';

export const runtime = 'edge';

const regularFont = fetch(new URL('/public/assets/HelveticaNeueMedium.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);
const boldFont = fetch(new URL('/public/assets/HelveticaNeueBold.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;
  let creator = queryParams.get('creator');
  const { USD } = await getEthPrice();
  const dataSet = await getAllIndexedData(creator);
  const filtered = getLeaderboard(dataSet.response, USD);
  try {
    creator = await ethPublicClient.getEnsName({
      address: normalize(creator as string) as any,
    });
  } catch (err) {
    console.error(err);
  }

  const [regularFontData, boldFontData] = await Promise.all([regularFont, boldFont]);

  const { ImageResponse } = await import('@vercel/og');
  const imageWidth = 1200; // Example width in pixels
  const imageHeight = 1200; // Example height in pixels

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          backgroundImage:
            'url("https://nftstorage.link/ipfs/bafybeiboye2kdtyziefq35p44z3sikceuehlvqn772k3h63sn6riwbbbku")',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          fontFamily: '"HelveticaBold"',
          height: '100%',
        }}
        tw="flex flex-col px-3"
      >
        <ArtistTitle creator={creator} />
        <Leaderboard leaderboard={filtered.slice(0, 5)} />
        <FrameFooter />
      </div>
    ),
    {
      width: imageWidth,
      height: imageHeight,
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
