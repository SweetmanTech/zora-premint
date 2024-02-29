import LeaderboardRow from './LeaderboardRow';
import { formatEther } from 'viem';

const LeaderboardBody = ({ leaderboard }: any) => (
  <tbody
    className="divide-y divide-gray-200 dark:divide-gray-800"
    tw="divide-y divide-gray-200 dark:divide-gray-800 flex flex-col"
  >
    {leaderboard.map((item: any, index: number) => (
      <LeaderboardRow
        key={item.buyer}
        rank={index + 1}
        name={item.buyer}
        image={item?.pfp}
        text={`$${item.totalCreatorRewardUsd}`}
      />
    ))}
  </tbody>
);

export default LeaderboardBody;
