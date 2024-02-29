import { optimismPublicClient, basePublicClient } from './publicClient';
import { encodeEventTopics, erc721Abi } from 'viem';
import { ethGetLogsBatch } from './ethGetLogsBatch';
const mapChainIdToClient = (chainId: number) => {
  switch (chainId) {
    case 10:
      return optimismPublicClient;
    case 8453:
      return basePublicClient;
    default:
      throw new Error(`Unsupported chainId: ${chainId}`);
  }
};
const mapChainIdToEndpoint = (chainId: number) => {
  switch (chainId) {
    case 10:
      return 'https://opt-mainnet.g.alchemy.com/v2/mBeLxutFN16DEheyiUtcoKdis0Jxn68H';
    case 8453:
      return 'https://base-mainnet.g.alchemy.com/v2/3m9vR6Vx1Yo0NurSa-6r65hGwGWzXvEa';
    default:
      throw new Error(`Unsupported chainId: ${chainId}`);
  }
};
const getTransferEvents = async (editions: any[], chainId: number) => {
  const topics = encodeEventTopics({
    abi: erc721Abi,
    eventName: 'Transfer',
  });
  const publicClient = mapChainIdToClient(chainId || 10);
  const latestBlockNumber = await publicClient.getBlockNumber();
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
  const endpoint = mapChainIdToEndpoint(chainId);
  const batchResults = await ethGetLogsBatch(batchRequests, endpoint);
  const filteredResults = batchResults.filter((result: any) => result !== undefined);
  let allLogs = filteredResults.flat();

  return allLogs;
};

export default getTransferEvents;
