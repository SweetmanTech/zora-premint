const getIndexedData = async (creator: string | null) => {
  const graphQLQuery = {
    query: `query($creator: String!) {
                      SoundCreatorV2_Created(limit:100000, where: {owner: {_eq:$creator}}) {
                        id
                        edition
                        chainId
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
  const response = await fetch(`${process.env.SOUND_GRAPHQL_API}`, options);

  const data = await response.json();
  const rewards: Array<any> = data?.data?.SoundCreatorV2_Created;
  results.push(...rewards);
  return results;
};

const getIndexedSoundContracts = async (creator: string | null) => {
  const results = await getIndexedData(creator);
  return {
    recordsCount: results.length,
    response: results,
  };
};

export default getIndexedSoundContracts;
