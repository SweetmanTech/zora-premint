import { getPayerFromTransaction } from './eth_getTransactionByHash';

export const getLogs = async (
  contractAddress: String,
  topics: Array<String>,
  latestBlock: number | string | bigint,
  fromBlock: number | string | bigint,
  endpoint: string | any,
  chainId: number | string | bigint,
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
    const dataWithChainId = data.result.map((log: any) => {
      return {
        ...log,
        chainId,
      };
    });
    let requests: Promise<any> | any = [];
    for (let i = 0; i < dataWithChainId.length; i++) {
      const log = dataWithChainId[i];
      requests.push(getPayerFromTransaction(log.transactionHash, endpoint));
    }
    const payerAddresses = await Promise.all(requests);
    for (let i = 0; i < dataWithChainId.length; i++) {
      dataWithChainId[i].buyer = payerAddresses[i];
    }
    return dataWithChainId;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error fetching logs:', err);
    return [];
  }
};
