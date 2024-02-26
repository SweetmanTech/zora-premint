import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { VERCEL_URL } from './config';

console.log('SWEETS VERCEL_URL', VERCEL_URL);
const frameMetadata = getFrameMetadata({
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
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`https://my-first-frame-xi.vercel.app/api/og`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  console.log('SWEETS VERCEL_URL', VERCEL_URL);

  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
