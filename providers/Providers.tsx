'use client';

import RainbowkitProvider from './RainbowkitProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <RainbowkitProvider>{children}</RainbowkitProvider>;
};

export default Providers;
