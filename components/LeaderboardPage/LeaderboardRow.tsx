import Avatar from '../Avatar';

const LeaderboardRow = ({ rank, name, text, image }: any) => (
  <tr
    className="bg-gray-50 dark:bg-gray-950"
    tw="bg-gray-50 dark:bg-gray-950 flex justify-between text-2xl"
  >
    <td
      className="px-4 py-4 text-sm font-medium text-gray-900"
      tw="px-4 py-4 font-medium text-gray-900"
    >
      #{rank}
    </td>
    <td className="px-4 py-4 flex items-center gap-3" tw="px-4 py-4 flex items-center gap-3">
      <Avatar src={image} />
      <div tw="px-4">{name}</div>
    </td>
    <td className="px-4 py-4 text-sm text-gray-500" tw="px-4 py-4 text-gray-500">
      {text}
    </td>
  </tr>
);

export default LeaderboardRow;
