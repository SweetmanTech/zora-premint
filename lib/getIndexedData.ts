const getIndexedData = async (creator: string | null) => {
  const graphQLQuery = {
    query: `query($creator: String!) {
                    ProtocolRewards_RewardsDeposit(limit:100000, order_by:{buyer:asc} where: {creator: {_eq:$creator}}) {
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
  const response = await fetch(`${process.env.GRAPHQL_API}`, options);

  const data = await response.json();
  const rewards: Array<any> = data?.data?.ProtocolRewards_RewardsDeposit;
  results.push(...rewards);
  return results;
};

const getAllIndexedData = async (creator: string | null) => {
  const results = await getIndexedData(creator);
  return {
    recordsCount: results.length,
    response: results,
  };
};

export default getAllIndexedData;
