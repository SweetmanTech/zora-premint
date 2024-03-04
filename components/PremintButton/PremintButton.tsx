'use client';

import createForFree from '@/lib/createForFree';
import Button from '../Button';
import { basePublicClient } from '@/lib/publicClient';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import { baseWalletClient } from '@/lib/walletClient';
import { useWalletClient } from 'wagmi';

const PremintButton = () => {
  const { connectedWallet } = useConnectedWallet();
  const { data: walletClient } = useWalletClient();

  const handleClick = async () => {
    console.log('SWEETS PREMINT');
    const response = await createForFree({
      publicClient: basePublicClient,
      creatorAccount: connectedWallet as any,
      walletClient: walletClient,
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
