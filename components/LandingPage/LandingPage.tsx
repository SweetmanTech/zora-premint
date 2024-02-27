'use client';

import LandingPageContent from './LandingPageContent';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useConnectedWallet from '@/hooks/useConnectedWallet';

const LandingPage = () => {
  const router = useRouter();
  const { connectedWallet } = useConnectedWallet();

  useEffect(() => {
    if (!connectedWallet) return;
    router.push(`/creator/${connectedWallet}`);
  }, [connectedWallet]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-1000 sm:py-24 lg:py-36 dark:bg-gray-100">
      <LandingPageContent />
    </div>
  );
};

export default LandingPage;
