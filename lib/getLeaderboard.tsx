import { formatEther } from 'viem';

const getLeaderboard = (results: any, ethPrice?: any) => {
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

  return Object.values(summary).map((item: any) => {
    const ethValue = formatEther(item.totalCreatorReward.toString());
    const usdValue = (ethPrice * parseFloat(ethValue)).toFixed(2);
    return {
      buyer: item.buyer,
      totalCreatorReward: item.totalCreatorReward.toString(),
      totalCreatorRewardUsd: usdValue,
      editions: item.editions,
    };
  });
};

export default getLeaderboard;
