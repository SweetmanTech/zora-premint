'use client';

import { CardContent, Card } from '@/components/Card/Card';
import LogoutButton from '../LogoutButton';
import LeaderboardHead from './LeaderboardHead';
import LeaderboardBody from './LeaderboardBody';
import LeaderboardProvider from '@/providers/LeaderboardProvider';

const LeaderboardPage = ({ creator }: any) => (
  <LeaderboardProvider creator={creator}>
    <Card className="w-full max-w-4xl">
      <CardContent className="p-0">
        <LogoutButton />
        <div className="overflow-auto">
          <table className="min-w-full w-full">
            <LeaderboardHead />
            <LeaderboardBody />
          </table>
        </div>
      </CardContent>
    </Card>
  </LeaderboardProvider>
);

export default LeaderboardPage;
