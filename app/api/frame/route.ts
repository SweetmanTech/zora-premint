import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL, VERCEL_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let text: string | undefined = '';

  let buttonIndex = 1;
  try {
    const body: FrameRequest = await req.json();

    const { untrustedData } = body;
    buttonIndex = untrustedData.buttonIndex;
  } catch (error) {
    console.error('Error parsing JSON from request', error);
  }

  const buttons = [
    {
      label: '7 day',
    },
    {
      label: '14 day',
    },
    {
      label: '30 day',
    },
  ];

  const days = [7, 14, 30];
  const frame = {
    buttons,
    image: {
      src: `${VERCEL_URL}/api/og?days=${days[buttonIndex - 1]}`,
    },
    postUrl: `${VERCEL_URL}/api/frame`,
  } as any;

  return new NextResponse(getFrameHtmlResponse(frame));
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
