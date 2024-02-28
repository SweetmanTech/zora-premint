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
      console.log('SWEETS totalCreatorReward', reward);
    }
  });

  return Object.values(summary).map((item: any) => ({
    buyer: item.buyer,
    totalCreatorReward: item.totalCreatorReward.toString(),
    editions: item.editions,
  }));
};

export default getLeaderboard;
