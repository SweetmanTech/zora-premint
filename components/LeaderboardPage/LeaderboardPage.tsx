import { CardContent, Card } from '@/components/Card/Card';
import LogoutButton from '../LogoutButton';
import LeaderboardRow from './LeaderboardRow';

const LeaderboardPage = () => (
  <Card className="w-full max-w-4xl">
    <CardContent className="p-0">
      <LogoutButton />
      <div className="overflow-auto">
        <table className="min-w-full w-full">
          <thead>
            <tr className="border-t border-gray-200 dark:border-gray-800">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                Rank
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <LeaderboardRow rank={1} name="Jane Cooper" text="33 editions" />
            <LeaderboardRow rank={2} name="Cody Fisher" text="22 editions" />
            <LeaderboardRow rank={3} name="Gordon Meyer" text="15 editions" />
            <LeaderboardRow rank={4} name="Jordan" text="12 editions" />
            <LeaderboardRow rank={5} name="Josh" text="10 editions" />
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

export default LeaderboardPage;
