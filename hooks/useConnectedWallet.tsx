import { useWallets } from '@privy-io/react-auth';

const useConnectedWallet = () => {
  const { wallets } = useWallets();
  const connectedWallet = wallets?.[0]?.address;

  return { connectedWallet };
};

export default useConnectedWallet;
