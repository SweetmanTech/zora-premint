import { useLeaderboardProvider } from '@/providers/LeaderboardProvider';
import { Card, CardContent } from '../Card/Card';
import Leaderboard from '../Leaderboard';

const LeaderboardCard = () => {
  const { leaderboard } = useLeaderboardProvider() as any;

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <Leaderboard leaderboard={leaderboard} />
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
