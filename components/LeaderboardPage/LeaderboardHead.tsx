const LeaderboardHead = () => (
  <thead tw="text-2xl bg-gray-300 bg-opacity-80 rounded-lg mb-1 drop-shadow-2xl">
    <tr
      className="divide-y divide-gray-200 dark:divide-gray-800"
      tw="divide-y text-5xl divide-gray-200 dark:divide-gray-800 text-black flex justify-between w-full"
    >
      <th
        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12"
        tw="px-4 py-3 text-left font-medium tracking-wider w-12"
      >
        rank
      </th>
      <th
        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        tw="px-4 py-3 text-left font-medium tracking-wider"
      >
        user
      </th>
      <th
        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        tw="px-4 py-3 text-left font-medium tracking-wider"
      >
        value spent
      </th>
    </tr>
  </thead>
);

export default LeaderboardHead;
