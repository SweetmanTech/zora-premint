'use client';

import { PrivyProvider as Provider } from '@privy-io/react-auth';

const PrivyProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={{
        loginMethods: ['wallet', 'email'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </Provider>
  );
};

export default PrivyProvider;
