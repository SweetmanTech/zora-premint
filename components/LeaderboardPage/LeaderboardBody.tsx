import getLeaderboard from '@/lib/getLeaderboard';
import { useEffect, useState } from 'react';
import LeaderboardRow from './LeaderboardRow';
import { formatEther } from 'viem';

const LeaderboardBody = ({ creator }: any) => {
  const [results, setResults] = useState([] as any);

  useEffect(() => {
    const init = async () => {
      const response = await fetch(`/api/getRewardsByCreator?creator=${creator}`);
      const data = await response.json();
      console.log('SWEETS data', data);
      const filtered = getLeaderboard(data.response);
      console.log('SWEETS filtered', filtered);

      setResults(filtered);
    };

    if (!creator) return;
    init();
  }, [creator]);

  return (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
      {results.map((item: any, index: number) => (
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
