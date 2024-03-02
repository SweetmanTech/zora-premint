import getEthPrice from '@/lib/getEthPrice';
import getLeaderboard from '@/lib/getLeaderboard';
import getNames from '@/lib/getNames';
import getSortedLeaderboard from '@/lib/getSortedLeaderboard';
import getSoundData from '@/lib/getSoundData';
import getZoraData from '@/lib/getZoraData';
import mergeLeaderboardData from '@/lib/mergeLeaderboardData';
import { useEffect, useState } from 'react';

const useLeaderboard = (creator: string) => {
  const [leaderboard, setLeaderboard] = useState([] as any);

  useEffect(() => {
    const init = async () => {
      try {
        const { USD } = await getEthPrice();
        const [zoraData, soundData] = await Promise.all([
          getZoraData(creator),
          getSoundData(creator, USD),
        ]);
        const zoraFiltered = getLeaderboard(zoraData.response, USD);
        const merged = mergeLeaderboardData(zoraFiltered, soundData);
        const sorted = getSortedLeaderboard(merged);
        const named = await getNames(sorted.splice(0, 100));
        setLeaderboard(named);
      } catch (error) {
        console.error(error);
      }
    };

    if (!creator) return;
    init();
  }, [creator]);

  return { leaderboard };
};

export default useLeaderboard;
