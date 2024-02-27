const getLeaderboard = (results: any) => {
  const summary = {} as any;

  results.forEach((result: any) => {
    const buyerAddress = result.buyer;
    const reward = BigInt(result.creatorReward);
    const editions = 1;

    if (summary[buyerAddress]) {
      summary[buyerAddress].totalCreatorReward += reward;
      summary[buyerAddress].editions += 1;
    } else {
      summary[buyerAddress] = {
        buyer: buyerAddress,
        totalCreatorReward: reward,
        editions,
      };
    }
  });

  return Object.values(summary)
    .map((item: any) => ({
      buyer: item.buyer,
      totalCreatorReward: item.totalCreatorReward.toString(),
      editions: item.editions,
    }))
    .sort((a: any, b: any) => {
      const rewardA = BigInt(a.totalCreatorReward);
      const rewardB = BigInt(b.totalCreatorReward);
      if (rewardA > rewardB) return -1;
      if (rewardA < rewardB) return 1;
      return 0;
    });
};

export default getLeaderboard;
