import { optimismPublicClient } from './publicClient';
import { encodeEventTopics, erc721Abi } from 'viem';
import { ethGetLogsBatch } from './ethGetLogsBatch';

const getTransferEvents = async (editions: any[]) => {
  console.log('SWEETS EDITION', editions);
  const topics = encodeEventTopics({
    abi: erc721Abi,
    eventName: 'Transfer',
  });
  console.log('SWEETS TOPIC', topics);

  const latestBlockNumber = await optimismPublicClient.getBlockNumber();
  const latestBlock = Number(latestBlockNumber);
  console.log('Latest block:', latestBlock);

  let fromBlock = 0;
  const chunkSize = 1000000; // Adjust chunk size if necessary
  let batchRequests = [];
  let id = 1;
  for (let block = fromBlock; block <= latestBlock; block += chunkSize + 1) {
    const toBlock = Math.min(block + chunkSize, latestBlock);
    // Prepare batch request objects for each chunk
    batchRequests.push({
      id,
      jsonrpc: '2.0',
      method: 'eth_getLogs',
      params: [
        {
          address: editions, // Assuming editions is an array of contract addresses
          fromBlock: `0x${block.toString(16)}`,
          toBlock: `0x${toBlock.toString(16)}`,
          topics: topics,
        },
      ],
    });
    id += 1;
  }
  console.log('sweets batchRequests:', batchRequests);

  // Use ethGetLogsBatch to fetch logs for all prepared requests in parallel
  const batchResults = await ethGetLogsBatch(batchRequests);

  const filteredResults = batchResults.filter((result: any) => result !== undefined);

  // Assuming ethGetLogsBatch returns an array of results corresponding to each request
  let allLogs = filteredResults.flat(); // Flatten the results if necessary

  console.log('sweets Total logs fetched:', allLogs.length);
  return allLogs;
};

export default getTransferEvents;
