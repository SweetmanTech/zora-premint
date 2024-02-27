import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { DEFAULT_FRAME, VERCEL_URL } from '@/lib/consts';
import LeaderboardPage from '@/components/LeaderboardPage/LeaderboardPage';
import { FrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata(DEFAULT_FRAME);

export const metadata: Metadata = {
  title: 'datamuse.xyz',
  description: 'data muse',
  openGraph: {
    title: 'data muse',
    description: 'data muse',
  },
};

const Page = ({ params }: { params: { creatorId: string } }) => (
  <>
    <FrameMetadata
      buttons={[
        {
          label: 'check another address',
        },
        {
          label: 'editions 🔄',
        },
      ]}
      image={{
        src: `${VERCEL_URL}/api/leaderboard?creator=${params.creatorId}`,
      }}
      input={{
        text: 'Search a different creator',
      }}
      postUrl={`${VERCEL_URL}/api/frame`}
    />
    <LeaderboardPage creator={params.creatorId} />
  </>
);

export default Page;
