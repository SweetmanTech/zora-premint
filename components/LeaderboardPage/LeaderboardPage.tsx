import { CardContent, Card } from '@/components/Card/Card';
import LogoutButton from '../LogoutButton';
import LeaderboardRow from './LeaderboardRow';
import { useEffect, useState } from 'react';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import getLeaderboard from '@/lib/getLeaderboard';
import { formatEther } from 'viem';

const LeaderboardPage = () => {
  const { connectedWallet } = useConnectedWallet();
  const [results, setResults] = useState([] as any);

  useEffect(() => {
    const init = async () => {
      const response = await fetch(`/api/getRewardsByCreator?creator=${connectedWallet}`);
      const data = await response.json();
      console.log('SWEETS RESPONSE', data);
      const filtered = getLeaderboard(data.response);
      console.log('SWEETS filtered', filtered);

      setResults(filtered);
    };

    if (!connectedWallet) return;
    init();
  }, [connectedWallet]);

  return (
    <Card className="w-full max-w-4xl">
      <CardContent className="p-0">
        <LogoutButton />
        <div className="overflow-auto">
          <table className="min-w-full w-full">
            <thead>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                  Rank
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {results.map((item: any, index: number) => {
                console.log('SWEETS item', item);
                return (
                  <LeaderboardRow
                    rank={index + 1}
                    name={item.from}
                    text={`${formatEther(item.totalCreatorReward)} ETH`}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardPage;
