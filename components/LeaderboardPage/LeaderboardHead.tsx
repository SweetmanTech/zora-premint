const LeaderboardHead = () => (
  <thead tw="text-2xl">
    <tr
      className="divide-y divide-gray-200 dark:divide-gray-800"
      tw="divide-y divide-gray-200 dark:divide-gray-800 flex justify-between w-full"
    >
      <th
        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12"
        tw="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider w-12"
      >
        Rank
      </th>
      <th
        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        tw="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
      >
        Wallet
      </th>
      <th
        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        tw="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
      >
        Total Value
      </th>
    </tr>
  </thead>
);

export default LeaderboardHead;
