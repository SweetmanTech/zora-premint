const mergeLeaderboardData = (zoraData: any[], soundData: any[]) => {
  const combinedObj = {} as any;
  const addToCombined = (entry: any) => {
    const { buyer, totalCreatorReward, editions } = entry;
    if (combinedObj[buyer]) {
      combinedObj[buyer].totalCreatorReward = (
        BigInt(combinedObj[buyer].totalCreatorReward) + BigInt(totalCreatorReward)
      ).toString();
      combinedObj[buyer].editions += editions;
    } else {
      combinedObj[buyer] = {
        buyer,
        totalCreatorReward,
        editions,
      };
    }
  };
  zoraData.forEach(addToCombined);
  soundData.forEach(addToCombined);
  const combinedArray = Object.values(combinedObj);
  return combinedArray;
};

export default mergeLeaderboardData;
