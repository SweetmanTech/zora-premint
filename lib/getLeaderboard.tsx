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
    console.log('SWEETS item.totalCreatorReward', item.totalCreatorReward);
    console.log('SWEETS type', typeof item.totalCreatorReward);
    console.log('SWEETS type ethPrice', typeof ethPrice);
    const ethValue = formatEther(item.totalCreatorReward.toString());
    const usdValue = (ethPrice * parseFloat(ethValue)).toFixed(2);
    console.log('SWEETS ethPrice * item.totalCreatorReward');
    return {
      buyer: item.buyer,
      totalCreatorReward: item.totalCreatorReward.toString(),
      totalCreatorRewardUsd: usdValue,
      editions: item.editions,
    };
  });
};

export default getLeaderboard;
