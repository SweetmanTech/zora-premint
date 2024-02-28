import { FrameMetadataType } from '@coinbase/onchainkit';
export const FARCASTER_ID_REGISTRY = '0x00000000fc6c5f01fc30151999387bb99a9f489b';
export const VERCEL_URL = process.env.NEXT_PUBLIC_FRAME_URL || 'http://localhost:3000';
export const SOUND_SUPER_MINTER_V2 = '0x000000000001A36777f9930aAEFf623771b13e70';
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
