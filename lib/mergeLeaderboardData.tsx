const mergeLeaderboardData = (filtered: any, parsed: any) => {
  const combined = { ...filtered, ...parsed };

  // Merge the objects, summing totalCreatorReward and editions for duplicate buyers
  Object.keys(combined).forEach((buyer) => {
    // Check if this buyer exists in both filtered and parsed
    if (filtered[buyer] && parsed[buyer]) {
      combined[buyer] = {
        buyer,
        totalCreatorReward: (
          BigInt(filtered[buyer].totalCreatorReward) + BigInt(parsed[buyer].totalCreatorReward)
        ).toString(),
        editions: filtered[buyer].editions + parsed[buyer].editions,
      };
    } else if (parsed[buyer]) {
      // If the buyer only exists in parsed, use its data
      combined[buyer] = parsed[buyer];
    } else if (filtered[buyer]) {
      // If the buyer only exists in filtered, use its data
      combined[buyer] = filtered[buyer];
    }
  });

  // Convert the combined object back into an array
  const combinedArray = Object.values(combined);

  return combinedArray;
};

export default mergeLeaderboardData;
