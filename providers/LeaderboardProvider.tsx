import { createContext, useContext, useMemo } from 'react';
import useLeaderboard from '@/hooks/useLeaderboard';

const LeaderboardContext = createContext(null);

const LeaderboardProvider = ({ children, creator }: any) => {
  const leaderboard = useLeaderboard(creator);

  const value = useMemo(() => ({ ...leaderboard }), [leaderboard]);

  return <LeaderboardContext.Provider value={value as any}>{children}</LeaderboardContext.Provider>;
};

export const useLeaderboardProvider = () => {
  const context = useContext(LeaderboardContext);
  if (!context) {
    throw new Error('useLeaderboardProvider must be used within a LeaderboardProvider');
  }
  return context;
};

export default LeaderboardProvider;
