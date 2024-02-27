import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';
import { DEFAULT_FRAME } from '@/lib/consts';

const frameMetadata = getFrameMetadata(DEFAULT_FRAME);

export const metadata: Metadata = {
  title: 'datamuse.xyz',
  description: 'data muse',
  openGraph: {
    title: 'data muse',
    description: 'data muse',
    images: [`https://my-first-frame-xi.vercel.app/api/og`],
  },
  other: {
    ...frameMetadata,
  },
};

const Page = () => (
  <>
    <LandingPage />
  </>
);

export default Page;
