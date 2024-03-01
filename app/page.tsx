import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import LandingPage from '@/components/LandingPage';
import { DEFAULT_FRAME, VERCEL_URL } from '@/lib/consts';

const frameMetadata = { ...getFrameMetadata(DEFAULT_FRAME), 'of:accepts:xmtp': '2024-02-01' };

export const metadata: Metadata = {
  title: 'datamuse.xyz',
  description: 'data muse',
  openGraph: {
    title: 'data muse',
    description: 'data muse',
    images: [`https://${VERCEL_URL}/api/og`],
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
