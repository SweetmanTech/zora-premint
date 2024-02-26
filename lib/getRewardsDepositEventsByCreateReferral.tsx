import { zora } from 'viem/chains';
import { Hex, keccak256, toHex } from 'viem';
import { decodeAbiParameters, parseAbiParameters } from 'viem';
import getCleanedEthereumAddress from './getCleanedEthereumAddress';
import { getLogs } from './eth_getLogs';

const PROTOCOL_REWARDS_ADDRESS = '0x7777777F279eba3d3Ad8F4E708545291A6fDBA8B';

const padTopicAddress = (address: string | any) => `0x${address.slice(2).padStart(64, '0')}`;

export const getRewardsDepositEventsByCreator = async (creator: string | number | null) => {
  const eventSignature =
    'RewardsDeposit(address,address,address,address,address,address,uint256,uint256,uint256,uint256,uint256)';
  const topics = [keccak256(toHex(eventSignature)), padTopicAddress(creator)];
  const latestBlock = 'latest';
  const fromBlock = '0x0';
  const rpcUrls = [
    {
      chain: 'optimism',
      rpc: 'https://optimism.rpc.hypersync.xyz',
    },
    {
      chain: 'zora',
      rpc: 'https://zora.rpc.hypersync.xyz',
    },
    {
      chain: 'ethereum',
      rpc: 'https://eth.rpc.hypersync.xyz',
    },
    {
      chain: 'base',
      rpc: 'https://base.rpc.hypersync.xyz',
    },
  ];
  const requests = rpcUrls.map((rpcUrl) => {
    return getLogs(PROTOCOL_REWARDS_ADDRESS, topics, latestBlock, fromBlock, rpcUrl.rpc);
  });
  const responses = await Promise.all(requests);

  const results = responses.filter((response) => response.result);
  const batchedLogs = results.map((response) => response.result).flat();
  const parsedLogs = batchedLogs.map((log: any, index) => {
    try {
      const decodedData = decodeAbiParameters(
        parseAbiParameters('address,address, address,uint256,uint256,uint256,uint256,uint256'),
        log?.data,
      );
      return {
        creator: getCleanedEthereumAddress(log.topics[1].toLowerCase()),
        createReferral: getCleanedEthereumAddress(log.topics[2].toLowerCase()),
        mintReferral: getCleanedEthereumAddress(log.topics[3].toLowerCase()),
        firstMinter: getCleanedEthereumAddress(decodedData[0]),
        zora: decodedData[1],
        from: decodedData[2],
        creatorReward: decodedData[3].toString(),
        createReferralReward: decodedData[4].toString(),
        mintReferralReward: decodedData[5].toString(),
        firstMinterReward: decodedData[6].toString(),
        zoraReward: decodedData[7].toString(),
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error parsing log at index ${index}:`, log);
      throw error;
    }
  });

  return parsedLogs.reverse();
};
