'use client';

import PremintButton from '@/components/PremintButton';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useWalletClient } from 'wagmi';

const Buttons = () => {
  const { data: walletClient } = useWalletClient();
  console.log('SWEETS result', walletClient);
  return <div>{walletClient ? <PremintButton /> : <ConnectButton />}</div>;
};

export default Buttons;
