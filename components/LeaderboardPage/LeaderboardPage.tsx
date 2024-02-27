'use client';

import { CardContent, Card } from '@/components/Card/Card';
import LogoutButton from '../LogoutButton';
import LeaderboardProvider, { useLeaderboardProvider } from '@/providers/LeaderboardProvider';
import Leaderboard from '../Leaderboard';
import LeaderboardCard from './LeaderboardCard';
import WarpcastButton from '../WarpcastButton';

const LeaderboardPage = ({ creator }: any) => (
  <LeaderboardProvider creator={creator}>
    <LogoutButton />
    <WarpcastButton creator={creator} />
    <LeaderboardCard />
  </LeaderboardProvider>
);

export default LeaderboardPage;
