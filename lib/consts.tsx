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

export const LEADERBOARD = [
  {
    buyer: '0xcfbf34d385ea2d5eb947063b67ea226dcda3dc38',
    totalCreatorReward: '7326000000000000',
  },
  {
    buyer: '0xf70da97812cb96acdf810712aa562db8dfa3dbef',
    totalCreatorReward: '3330000000000000',
  },
  {
    buyer: '0x5d2b7f517ea0c3a68e58c32f97b2b2c080ea3d6f',
    totalCreatorReward: '2331000000000000',
  },
  {
    buyer: '0x81f91aca8c05b3eefebc00171139afefac17c9a6',
    totalCreatorReward: '1665000000000000',
  },
  {
    buyer: '0xcb7504c4cb986e80ab4983b44263381f21273482',
    totalCreatorReward: '1665000000000000',
  },
];
