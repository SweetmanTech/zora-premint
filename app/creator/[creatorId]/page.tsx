import { FRAME_INPUT_PLACEHOLDER, VERCEL_URL } from '@/lib/consts';
import LeaderboardPage from '@/components/LeaderboardPage/LeaderboardPage';
import { FrameMetadata } from '@coinbase/onchainkit';
import getButtons from '@/lib/getButtons';

const Page = ({ params }: { params: { creatorId: string } }) => (
  <div>
    <FrameMetadata
      ogTitle="data muse"
      ogDescription="data muse"
      buttons={getButtons()}
      image={{
        src: `${VERCEL_URL}/api/leaderboard?creator=${params.creatorId}`,
        aspectRatio: '1:1',
      }}
      input={{
        text: FRAME_INPUT_PLACEHOLDER,
      }}
      postUrl={`${VERCEL_URL}/api/frame`}
    />
    <meta property="of:accepts:xmtp" content="2024-02-01" />

    <LeaderboardPage creator={params.creatorId} />
  </div>
);

export default Page;
