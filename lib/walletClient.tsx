import { WalletClient, createWalletClient, custom } from 'viem';
import { base } from 'viem/chains';

export const baseWalletClient = createWalletClient({
  chain: base,
  transport: custom(window.ethereum!),
}) as WalletClient;
