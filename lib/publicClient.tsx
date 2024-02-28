import { createPublicClient, http } from 'viem';
import { mainnet, optimism } from 'viem/chains';

export const ethPublicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export const optimismPublicClient = createPublicClient({
  chain: optimism,
  transport: http(),
});
