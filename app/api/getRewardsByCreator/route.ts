import { NextRequest, NextResponse } from 'next/server';
import { getRewardsDepositEventsByCreator } from '../../../lib/getRewardsDepositEventsByCreateReferral';
async function getRewardsByCreator(req: NextRequest): Promise<NextResponse> {
  const creator = req.nextUrl.searchParams.get('creator');
  const response = await getRewardsDepositEventsByCreator(creator);
  const res = {
    records: response.length,
    response,
  };
  return new NextResponse(JSON.stringify(res), {
    headers: {
      'content-type': 'application/json',
    },
  });
}
export async function GET(req: NextRequest): Promise<NextResponse> {
  return getRewardsByCreator(req);
}
