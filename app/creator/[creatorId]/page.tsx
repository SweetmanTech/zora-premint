import type { Metadata } from 'next';
import { VERCEL_URL } from '@/lib/consts';
import LeaderboardPage from '@/components/LeaderboardPage/LeaderboardPage';
import { FrameMetadata } from '@coinbase/onchainkit';
import getButtons from '@/lib/getButtons';

export const metadata: Metadata = {
  title: 'datamuse.xyz',
  description: 'data muse',
  openGraph: {
    title: 'data muse',
    description: 'data muse',
  },
};

const Page = ({ params }: { params: { creatorId: string } }) => (
  <div className="mx-3">
    <FrameMetadata
      buttons={getButtons()}
      image={{
        src: `${VERCEL_URL}/api/leaderboard?creator=${params.creatorId}`,
        aspectRatio: '1:1',
      }}
      input={{
        text: 'Search a different creator',
      }}
      postUrl={`${VERCEL_URL}/api/frame`}
    />
    <LeaderboardPage creator={params.creatorId} />
  </div>
);

export default Page;
