import { CardContent, Card } from '@/components/Card/Card';
import Button from '../Button';
import LogoutButton from '../LogoutButton';
import Avatar from '../Avatar';

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
            <tr className="bg-gray-50 dark:bg-gray-950">
              <td className="px-4 py-4 text-sm font-medium text-gray-900">#1</td>
              <td className="px-4 py-4 flex items-center gap-3">
                <Avatar />
                Jane Cooper
              </td>
              <td className="px-4 py-4 text-sm text-gray-500">33 editions</td>
            </tr>
            <tr className="dark:bg-gray-900">
              <td className="px-4 py-4 text-sm font-medium text-gray-900">#2</td>
              <td className="px-4 py-4 flex items-center gap-3">
                <Avatar />
                Cody Fisher
              </td>
              <td className="px-4 py-4 text-sm text-gray-500">22 editions</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-950">
              <td className="px-4 py-4 text-sm font-medium text-gray-900">#3</td>
              <td className="px-4 py-4 flex items-center gap-3">
                <Avatar />
                Gordon Meyer
              </td>
              <td className="px-4 py-4 text-sm text-gray-500">15 editions</td>
            </tr>
            <tr className="dark:bg-gray-900">
              <td className="px-4 py-4 text-sm font-medium text-gray-900">#4</td>
              <td className="px-4 py-4 flex items-center gap-3">
                <Avatar />
                Jordan
              </td>
              <td className="px-4 py-4 text-sm text-gray-500">12 editions</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-950">
              <td className="px-4 py-4 text-sm font-medium text-gray-900">#5</td>
              <td className="px-4 py-4 flex items-center gap-3">
                <Avatar />
                Josh
              </td>
              <td className="px-4 py-4 text-sm text-gray-500">10 editions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

export default LeaderboardPage;
