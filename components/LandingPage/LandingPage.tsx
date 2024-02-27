'use client';

import LandingPageContent from './LandingPageContent';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useConnectedWallet from '@/hooks/useConnectedWallet';
import { usePrivy } from '@privy-io/react-auth';

const LandingPage = () => {
  const router = useRouter();
  const { authenticated, ready } = usePrivy();
  const { connectedWallet } = useConnectedWallet();

  useEffect(() => {
    if (!connectedWallet || !authenticated || !ready) return;
    router.push(`/creator/${connectedWallet}`);
  }, [connectedWallet]);

  return (
    <div
      className="flex font-helvetica flex-col items-center justify-center min-h-screen py-12 sm:py-24 lg:py-36 bg-blend-color-burn"
      style={{
        backgroundImage: 'url("/images/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <LandingPageContent />
    </div>
  );
};

export default LandingPage;
