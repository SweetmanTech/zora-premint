'use client';

import PrivyProvider from './PrivyProvider';
import RainbowkitProvider from './RainbowkitProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RainbowkitProvider>
      <PrivyProvider>{children}</PrivyProvider>
    </RainbowkitProvider>
  );
};

export default Providers;
