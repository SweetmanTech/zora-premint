'use client';

import { CardContent, Card } from '@/components/Card/Card';
import LogoutButton from '../LogoutButton';
import LeaderboardHead from './LeaderboardHead';
import LeaderboardBody from './LeaderboardBody';

const LeaderboardPage = ({ creator }: any) => (
  <Card className="w-full max-w-4xl">
    <CardContent className="p-0">
      <LogoutButton />
      <div className="overflow-auto">
        <table className="min-w-full w-full">
          <LeaderboardHead />
          <LeaderboardBody creator={creator} />
        </table>
      </div>
    </CardContent>
  </Card>
);

export default LeaderboardPage;
