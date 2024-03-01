import { FrameMetadataType } from '@coinbase/onchainkit';
export const FARCASTER_ID_REGISTRY = '0x00000000fc6c5f01fc30151999387bb99a9f489b';
export const VERCEL_URL = process.env.NEXT_PUBLIC_FRAME_URL || 'http://localhost:3001';
export const DEFAULT_FRAME = {
  buttons: [
    {
      action: 'link',
      label: 'datamuse.xyz',
      target: 'https://datamuse.xyz',
    },
  ],
  image: {
    src: `${VERCEL_URL}/api/og`,
  },
  postUrl: `${VERCEL_URL}/api/frame`,
} as FrameMetadataType;

export const SOUND_FACTORY = '0x0000000000aec84F5BFc2af15EAfb943bf4e3522';

export const AIRSTACK_API_URL = 'https://api.airstack.xyz/graphql';
