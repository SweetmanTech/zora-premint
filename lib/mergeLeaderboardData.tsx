const mergeLeaderboardData = (zoraData: any[], soundData: any[]) => {
  const combinedObj = {} as any;

  // Function to add or update the combined object
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

  // Process each array
  zoraData.forEach(addToCombined);
  soundData.forEach(addToCombined);

  // Convert the combined object back into an array
  const combinedArray = Object.values(combinedObj);

  return combinedArray;
};

export default mergeLeaderboardData;
