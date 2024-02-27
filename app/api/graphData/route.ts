import { NextRequest, NextResponse } from 'next/server';
import { getRewardsDepositEventsByCreator } from '../../../lib/getRewardsDepositEventsByCreateReferral';
import getAllIndexedData from '@/lib/getIndexedData';
async function getRewardsByTimestamp(req: NextRequest): Promise<NextResponse> {
  const creator = req.nextUrl.searchParams.get('creator');
  if (!creator) {
    return new NextResponse('Missing Creator', {
      status: 422,
    });
  }
  const res = await getAllIndexedData(creator);

  return new NextResponse(JSON.stringify(res), {
    headers: {
      'content-type': 'application/json',
    },
  });
}
export async function GET(req: NextRequest): Promise<NextResponse> {
  return getRewardsByTimestamp(req);
}
