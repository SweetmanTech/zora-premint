import { FrameMetadataType } from '@coinbase/onchainkit';

export const NEXT_PUBLIC_URL = 'https://zizzamia.xyz';
export const VERCEL_URL = process.env.NEXT_PUBLIC_FRAME_URL || 'http://localhost:3000';
export const DEFAULT_FRAME = {
  buttons: [
    {
      label: '7 day',
    },
    {
      label: '14 day',
    },
    {
      label: '30 day',
    },
  ],
  image: {
    src: `https://my-first-frame-xi.vercel.app/api/og`,
  },
  postUrl: `${VERCEL_URL}/api/frame`,
} as FrameMetadataType;
