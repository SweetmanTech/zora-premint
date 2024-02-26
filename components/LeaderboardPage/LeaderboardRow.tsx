import Avatar from '../Avatar';

const LeaderboardRow = ({ rank, name, text }: any) => (
  <tr className="bg-gray-50 dark:bg-gray-950">
    <td className="px-4 py-4 text-sm font-medium text-gray-900">#{rank}</td>
    <td className="px-4 py-4 flex items-center gap-3">
      <Avatar />
      {name}
    </td>
    <td className="px-4 py-4 text-sm text-gray-500">{text}</td>
  </tr>
);

export default LeaderboardRow;
