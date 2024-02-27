import Leaderboard from '@/components/Leaderboard';
import { VERCEL_URL } from '@/lib/consts';
import getAllIndexedData from '@/lib/getIndexedData';
import getLeaderboard from '@/lib/getLeaderboard';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;
  const creator = queryParams.get('creator');
  const dataSet = await getAllIndexedData(creator);
  const filtered = getLeaderboard(dataSet.response);

  const { ImageResponse } = await import('@vercel/og');
  return new ImageResponse(<Leaderboard leaderboard={filtered.slice(0, 5)} />);
}
