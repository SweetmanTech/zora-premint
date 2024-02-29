'use client';

import LogoutButton from '../LogoutButton';
import LeaderboardProvider from '@/providers/LeaderboardProvider';
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
