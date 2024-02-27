import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { DEFAULT_FRAME, VERCEL_URL } from '@/lib/consts';
import LeaderboardPage from '@/components/LeaderboardPage/LeaderboardPage';

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

const Page = ({ params }: { params: { creatorId: string } }) => {
  console.log('SWEETS SLUG', params.creatorId);
  return (
    <>
      <LeaderboardPage creator={params.creatorId} />
    </>
  );
};

export default Page;
