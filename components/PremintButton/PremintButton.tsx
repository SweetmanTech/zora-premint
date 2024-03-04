'use client';

import createForFree from '@/lib/createForFree';
import Button from '../Button';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import { useWalletClient } from 'wagmi';
import { WalletClient } from 'viem';

const PremintButton = () => {
  const { connectedWallet } = useConnectedWallet();
  const { data: walletClient } = useWalletClient();

  const handleClick = async () => {
    const response = await createForFree({
      creatorAccount: connectedWallet as any,
      walletClient: walletClient as WalletClient,
    });
    console.log('SWEETS PREMINT', response);
  };

  return (
    <Button onClick={handleClick} className="bg-black font-helvetica p-5">
      HELLO WORLD
    </Button>
  );
};

export default PremintButton;
