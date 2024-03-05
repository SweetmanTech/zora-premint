import { FRAME_INPUT_PLACEHOLDER, VERCEL_URL } from '@/lib/consts';
import getButtons from '@/lib/getButtons';
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const getResponse = async (req: NextRequest): Promise<NextResponse> => {
  let buttonIndex = 1;
  let creatorId
  try {
    const body: FrameRequest = await req.json();
    const { untrustedData } = body;
    buttonIndex = untrustedData.buttonIndex;
  } catch (error) {
    console.error('Error parsing JSON from request', error);
  }
  const buttons = getButtons();
  const frame = {
    buttons,
    image: {
      src: `${VERCEL_URL}/api/leaderboard?creator=${creatorId}`,
      aspectRatio: '1:1',
    },
    input:{
      text: FRAME_INPUT_PLACEHOLDER,
    },
    postUrl: `${VERCEL_URL}/api/frame`,
  } as any;

  return new NextResponse(getFrameHtmlResponse(frame));
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
