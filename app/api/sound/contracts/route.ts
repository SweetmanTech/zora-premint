import { NextRequest, NextResponse } from 'next/server';
import getIndexedSoundContracts from '@/lib/getIndexedSoundContracts';

async function getCreatorContracts(req: NextRequest): Promise<NextResponse> {
  const creator = req.nextUrl.searchParams.get('creator');
  if (!creator) {
    return new NextResponse('Missing Creator', {
      status: 422,
    });
  }
  const res = await getIndexedSoundContracts(creator);

  return new NextResponse(JSON.stringify(res), {
    headers: {
      'content-type': 'application/json',
    },
  });
}
export async function GET(req: NextRequest): Promise<NextResponse> {
  return getCreatorContracts(req);
}
