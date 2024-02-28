const getSortedLeaderboard = (leaderboard: any[]) =>
  leaderboard.sort((a: any, b: any) => {
    // Convert totalCreatorReward to numbers for comparison
    const rewardA = BigInt(a.totalCreatorReward);
    const rewardB = BigInt(b.totalCreatorReward);

    // Primary sort by totalCreatorReward in descending order
    if (rewardA > rewardB) return -1;
    if (rewardA < rewardB) return 1;

    // Secondary sort by editions in descending order
    if (a.editions > b.editions) return -1;
    if (a.editions < b.editions) return 1;

    // Tertiary sort by buyer, in case you want a consistent order for items with the same reward and editions
    return a.buyer.localeCompare(b.buyer);
  });

export default getSortedLeaderboard;
