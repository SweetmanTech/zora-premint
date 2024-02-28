import { optimismPublicClient } from './publicClient';
import { encodeEventTopics, erc721Abi } from 'viem';
import { ethGetLogsBatch } from './ethGetLogsBatch';

const getTransferEvents = async (editions: any[]) => {
  const topics = encodeEventTopics({
    abi: erc721Abi,
    eventName: 'Transfer',
  });
  const latestBlockNumber = await optimismPublicClient.getBlockNumber();
  const latestBlock = Number(latestBlockNumber);
  const chunkSize = 1000000;
  const batchRequests = [];
  let id = 1;
  let fromBlock = 0;
  for (let block = fromBlock; block <= latestBlock; block += chunkSize + 1) {
    const toBlock = Math.min(block + chunkSize, latestBlock);
    batchRequests.push({
      id,
      jsonrpc: '2.0',
      method: 'eth_getLogs',
      params: [
        {
          address: editions,
          fromBlock: `0x${block.toString(16)}`,
          toBlock: `0x${toBlock.toString(16)}`,
          topics: topics,
        },
      ],
    });
    id += 1;
  }
  const batchResults = await ethGetLogsBatch(batchRequests);
  const filteredResults = batchResults.filter((result: any) => result !== undefined);
  let allLogs = filteredResults.flat();

  return allLogs;
};

export default getTransferEvents;
