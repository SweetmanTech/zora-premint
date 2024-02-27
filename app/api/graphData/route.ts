import { NextRequest, NextResponse } from 'next/server';
import getAllIndexedData from '@/lib/getIndexedData';
async function getCreatorRewards(req: NextRequest): Promise<NextResponse> {
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
  return getCreatorRewards(req);
}
