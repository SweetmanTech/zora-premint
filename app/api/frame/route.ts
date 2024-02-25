import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL, VERCEL_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  console.log("SWEETS REQUEST RECEIVED", req)

  let text: string | undefined = '';

  let buttonIndex;
  try {
    const body: FrameRequest = await req.json();
    console.log("SWEETS body ", body)

    const {untrustedData} = body
    buttonIndex = untrustedData.buttonIndex
    console.log("SWEETS untrustedData ", untrustedData)
    console.log("SWEETS buttonIndex ", buttonIndex)
  } catch (error) {
    console.error("Error parsing JSON from request", error);
  }

  const start = {
    buttons: [
      {
        label: 'Story time!',
      },
      {
        action: 'link',
        label: 'Link to Google',
        target: 'https://www.google.com',
      },
      {
        label: 'Redirect to pictures',
        action: 'post_redirect',
      },
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/park-3.png`,
      aspectRatio: '1:1',
    },
    input: {
      text: 'Tell me a boat story',
    },
    postUrl: `${VERCEL_URL}/api/frame`,
  } as any

  const second = {
    buttons: [
      
      {
        label: `Story: ${text} 🌲🌲`,
      },
      {
        label: `Start Over 🌲🌲`,
      },
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/park-1.png`,
    },
    postUrl: `${VERCEL_URL}/api/frame`,
  } as any

  return new NextResponse(
    getFrameHtmlResponse(buttonIndex === 1 ? second : start ),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
