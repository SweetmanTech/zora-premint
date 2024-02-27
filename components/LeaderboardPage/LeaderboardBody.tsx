import getLeaderboard from '@/lib/getLeaderboard';
import { useEffect, useState } from 'react';
import LeaderboardRow from './LeaderboardRow';
import { formatEther } from 'viem';
import { useLeaderboardProvider } from '@/providers/LeaderboardProvider';

const LeaderboardBody = () => {
  const { leaderboard } = useLeaderboardProvider() as any;

  return (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
      {leaderboard.map((item: any, index: number) => (
        <LeaderboardRow
          rank={index + 1}
          name={item.buyer}
          text={`${formatEther(item.totalCreatorReward)} ETH`}
        />
      ))}
    </tbody>
  );
};

export default LeaderboardBody;
