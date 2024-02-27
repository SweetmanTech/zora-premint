'use client';

import { CardContent, Card } from '@/components/Card/Card';
import LogoutButton from '../LogoutButton';
import LeaderboardProvider, { useLeaderboardProvider } from '@/providers/LeaderboardProvider';
import Leaderboard from '../Leaderboard';
import LeaderboardCard from './LeaderboardCard';

const LeaderboardPage = ({ creator }: any) => (
  <LeaderboardProvider creator={creator}>
    <LogoutButton />
    <LeaderboardCard />
  </LeaderboardProvider>
);

export default LeaderboardPage;
