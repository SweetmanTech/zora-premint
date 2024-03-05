'use client';

import createForFree from '@/lib/createForFree';
import Button from '../Button';
import { useWalletClient, useAccount } from 'wagmi';
import { WalletClient } from 'viem';

const PremintButton = () => {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const handleClick = async () => {
    const response = await createForFree({
      creatorAccount: address as any,
      walletClient: walletClient as WalletClient,
    });
    console.log('SWEETS PREMINT', response);
  };

  return (
    <Button
      onClick={handleClick}
      className="bg-baseblue font-helvetica px-[100px] py-5 flex flex-col gap-3 rounded-2xl"
    >
      <p className="text-xl">Create Gas Free on Base</p>
      <p className="text-xs">with Zora Protocol</p>
    </Button>
  );
};

export default PremintButton;
