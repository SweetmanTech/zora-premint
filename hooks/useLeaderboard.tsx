import getLeaderboard from '@/lib/getLeaderboard';
import getNames from '@/lib/getNames';
import getSortedLeaderboard from '@/lib/getSortedLeaderboard';
import getSoundData from '@/lib/getSoundData';
import getTransferEvents from '@/lib/getTransferEvents';
import getZoraData from '@/lib/getZoraData';
import mergeLeaderboardData from '@/lib/mergeLeaderboardData';
import parseLogEntries from '@/lib/parseLogEntries';
import { useEffect, useState } from 'react';

const useLeaderboard = (creator: string) => {
  const [leaderboard, setLeaderboard] = useState([] as any);

  useEffect(() => {
    const init = async () => {
      const zoraData = await getZoraData(creator);
      const soundData = await getSoundData(creator);
      const zoraFiltered = getLeaderboard(zoraData.response);
      setLeaderboard(zoraFiltered);

      console.log('sweets zoraFiltered', zoraFiltered);
      console.log('sweets soundData', soundData);
      const final = mergeLeaderboardData(zoraFiltered, soundData);
      console.log('SWEETS final', final);
      const sorted = getSortedLeaderboard(final);
      console.log('SWEETS sorted', sorted);
      setLeaderboard(sorted.splice(0, 22));

      try {
        const named = await getNames(sorted.splice(0, 22));
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
