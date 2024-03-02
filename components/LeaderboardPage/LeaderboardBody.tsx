import { getIpfsLink } from '@/lib/getIPFS';
import LeaderboardRow from './LeaderboardRow';

const LeaderboardBody = ({ leaderboard, isFrame = false }: any) => (
  <tbody
    className="divide-y divide-gray-200 dark:divide-gray-800"
    tw="divide-y divide-gray-200 dark:divide-gray-800 flex flex-col"
  >
    {leaderboard.map((item: any, index: number) => (
      <LeaderboardRow
        isFrame={isFrame}
        key={item.buyer}
        rank={index + 1}
        name={item.profileName || item.buyer}
        image={item?.profileImage?.length > 0 ? getIpfsLink(item.profileImage) : undefined}
        text={item.editions}
      />
    ))}
  </tbody>
);

export default LeaderboardBody;
