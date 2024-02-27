const getIndexedData = async (creator: string) => {
  const graphQLQuery = {
    query: `query($creator: String!) {
                    ProtocolRewards_RewardsDeposit(limit:10000, where: {creator: {_eq:$creator}}) {
                        id
                        creator
                        createReferral
                        mintReferral
                        firstMinter
                        zora
                        creatorReward
                        createReferralReward
                        firstMinterReward
                        mintReferralReward
                        zoraReward
                        timestamp
                        chainId
                        buyer
                    }
                }`,
    variables: {
      creator,
    },
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(graphQLQuery),
  };
  const results = [];
  const response = await fetch('https://indexer.bigdevenergy.link/1abdb8c/v1/graphql', options);

  const data = await response.json();
  console.log(data);
  const rewards: Array<any> = data?.data?.ProtocolRewards_RewardsDeposit;
  results.push(...rewards);
  return results;
};

const getAllIndexedData = async (creator: string) => {
  const now = new Date();
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  // const initialTimestamp = now.getTime() - millisecondsInADay * days;
  const results = await getIndexedData(creator);
  // let hasMoreResults = results.length > 0;
  // while (hasMoreResults) {
  //   const lastTimestamp = results[results.length - 1].timestamp;
  //   // eslint-disable-next-line no-await-in-loop
  //   const newResults = await getIndexedData(lastTimestamp);
  //   hasMoreResults = newResults.length > 0;
  //   results.push(...newResults);
  // }

  return results;
};

export default getAllIndexedData;
