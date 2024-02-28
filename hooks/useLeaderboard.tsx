import getLeaderboard from '@/lib/getLeaderboard';
import getNames from '@/lib/getNames';
import getSortedLeaderboard from '@/lib/getSortedLeaderboard';
import getTransferEvents from '@/lib/getTransferEvents';
import mergeLeaderboardData from '@/lib/mergeLeaderboardData';
import parseLogEntries from '@/lib/parseLogEntries';
import { useEffect, useState } from 'react';

const useLeaderboard = (creator: string) => {
  const [leaderboard, setLeaderboard] = useState([] as any);

  useEffect(() => {
    const init = async () => {
      const response = await fetch(`/api/graphData?creator=${creator}`);
      const soundResponse = await fetch(`/api/sound/contracts?creator=${creator}`);
      const data = await response.json();
      const soundData = await soundResponse.json();
      console.log('SWEETS SOUND DATA', soundData);
      const soundRawTransactions = await getTransferEvents([
        soundData.response[0].edition,
        soundData.response[1].edition,
        soundData.response[2].edition,
      ]);
      console.log('SWEETS soundTransactions', soundRawTransactions);

      const parsed = parseLogEntries(soundRawTransactions);

      console.log('SWEETS parsed soundTransactions', parsed);

      const filtered = getLeaderboard(data.response);
      setLeaderboard(filtered);
      const final = mergeLeaderboardData(filtered, parsed);
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
