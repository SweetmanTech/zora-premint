'use client';

import PremintButton from '@/components/PremintButton';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useWalletClient } from 'wagmi';

const Buttons = () => {
  const { data: walletClient } = useWalletClient();
  console.log('SWEETS result', walletClient);
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <ConnectButton />
      {walletClient && <PremintButton />}
    </div>
  );
};

export default Buttons;
