'use client';

import PrivyProvider from './PrivyProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <PrivyProvider>{children}</PrivyProvider>;
};

export default Providers;
