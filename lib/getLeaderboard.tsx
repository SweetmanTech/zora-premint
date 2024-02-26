const getLeaderboard = (results: any) => {
  const summary = {} as any;

  results.forEach((result: any) => {
    const buyerAddress = result.buyer;
    const reward = BigInt(result.creatorReward);

    if (summary[buyerAddress]) {
      summary[buyerAddress].totalCreatorReward += reward;
    } else {
      summary[buyerAddress] = {
        buyer: buyerAddress,
        totalCreatorReward: reward,
      };
    }
  });

  return Object.values(summary)
    .map((item: any) => ({
      buyer: item.buyer,
      totalCreatorReward: item.totalCreatorReward.toString(),
    }))
    .sort((a: any, b: any) => {
      const rewardA = BigInt(a.totalCreatorReward);
      const rewardB = BigInt(b.totalCreatorReward);
      if (rewardA > rewardB) return -1; // a before b
      if (rewardA < rewardB) return 1; // b before a
      return 0; // unchanged
    });
};

export default getLeaderboard;
