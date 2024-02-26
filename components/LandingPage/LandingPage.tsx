'use client';

import { usePrivy } from '@privy-io/react-auth';
import LeaderboardPage from '../LeaderboardPage/LeaderboardPage';
import LandingPageContent from './LandingPageContent';

const LandingPage = () => {
  const { ready, authenticated } = usePrivy();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-1000 sm:py-24 lg:py-36 dark:bg-gray-100">
      {ready && authenticated ? <LeaderboardPage /> : <LandingPageContent />}
    </div>
  );
};

export default LandingPage;
