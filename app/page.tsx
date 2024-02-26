import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { VERCEL_URL } from './config';
import LandingPage from '../components/LandingPage';

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
