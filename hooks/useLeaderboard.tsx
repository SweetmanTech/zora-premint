import getLeaderboard from '@/lib/getLeaderboard';
import getNames from '@/lib/getNames';
import { useEffect, useState } from 'react';

const useLeaderboard = (creator: string) => {
  const [leaderboard, setLeaderboard] = useState([] as any);

  useEffect(() => {
    const init = async () => {
      const response = await fetch(`/api/graphData?creator=${creator}`);
      const data = await response.json();
      const filtered = getLeaderboard(data.response);
      setLeaderboard(filtered);
      try {
        const named = await getNames(filtered);
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
