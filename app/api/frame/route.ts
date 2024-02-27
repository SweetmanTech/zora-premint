import { VERCEL_URL } from '@/lib/consts';
import getButtons from '@/lib/getButtons';
import getCreatorId from '@/lib/getCreatorId';
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

const getResponse = async (req: NextRequest): Promise<NextResponse> => {
  let buttonIndex = 1;
  let creatorId
  try {
    const body: FrameRequest = await req.json();
    const { untrustedData } = body;
    const {url, inputText} = untrustedData
    creatorId = await getCreatorId(inputText, url)
    buttonIndex = untrustedData.buttonIndex;
  } catch (error) {
    console.error('Error parsing JSON from request', error);
  }
  const buttons = getButtons();
  const frame = {
    buttons,
    image: {
      src: `${VERCEL_URL}/api/leaderboard?creator=${creatorId}`,
    },
    input:{
      text: 'Search a different creator',
    },
    postUrl: `${VERCEL_URL}/api/frame`,
  } as any;

  return new NextResponse(getFrameHtmlResponse(frame));
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
