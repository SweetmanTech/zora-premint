export const getLogs = async (
  contractAddress: String,
  topics: Array<String>,
  latestBlock: number | string | bigint,
  fromBlock: number | string | bigint,
  endpoint: string | any,
) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 0,
        jsonrpc: '2.0',
        method: 'eth_getLogs',
        params: [
          {
            fromBlock,
            toBlock: latestBlock,
            address: contractAddress,
            topics,
          },
        ],
      }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error fetching logs:', err);
    return [];
  }
};
