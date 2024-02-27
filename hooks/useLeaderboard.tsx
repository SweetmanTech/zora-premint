import getLeaderboard from '@/lib/getLeaderboard';
import { useEffect, useState } from 'react';

const useLeaderboard = (creator: string) => {
  const [leaderboard, setLeaderboard] = useState([] as any);

  useEffect(() => {
    const init = async () => {
      const response = await fetch(`/api/getRewardsByCreator?creator=${creator}`);
      const data = await response.json();
      const filtered = getLeaderboard(data.response);
      setLeaderboard(filtered);
    };

    if (!creator) return;
    init();
  }, [creator]);

  return { leaderboard };
};

export default useLeaderboard;
