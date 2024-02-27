import { DEFAULT_CREATOR_ADDRESS, VERCEL_URL } from '@/lib/consts';
import getButtons from '@/lib/getButtons';
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { normalize } from 'viem/ens'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let text: string | undefined = '';
  let buttonIndex = 1;
  let creatorId = DEFAULT_CREATOR_ADDRESS
  try {
    const body: FrameRequest = await req.json();
    const { untrustedData } = body;
    const {url, inputText} = untrustedData
    if (inputText) {
      if (inputText.includes(".eth")) {
        const publicClient = createPublicClient({ 
          chain: mainnet,
          transport: http()
        })
        creatorId = await publicClient.getEnsAddress({
          name: normalize(inputText),
        }) as any
      } else if (inputText.includes("0x")) {
        creatorId=inputText
      }
    }
    if (creatorId === DEFAULT_CREATOR_ADDRESS) {
      const parts = url.split("creator/");
      creatorId = parts[1];
    }
   
    console.log("SWEETS BODY", untrustedData)

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
