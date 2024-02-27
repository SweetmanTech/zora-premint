import Leaderboard from '@/components/Leaderboard';
import { VERCEL_URL } from '@/lib/consts';
import getLeaderboard from '@/lib/getLeaderboard';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const queryParams = req.nextUrl.searchParams;
  const creator = queryParams.get('creator');
  const response = await fetch(`${VERCEL_URL}/api/getRewardsByCreator?creator=${creator}`);
  const data = await response.json();
  const filtered = getLeaderboard(data.response);

  const { ImageResponse } = await import('@vercel/og');
  return new ImageResponse(<Leaderboard leaderboard={filtered.slice(0, 5)} />);
}
