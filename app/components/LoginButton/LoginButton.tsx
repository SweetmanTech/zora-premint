'use client';

import { usePrivy } from '@privy-io/react-auth';

const LoginButton = () => {
  const { ready, authenticated, login } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);

  return (
    <button disabled={disableLogin} onClick={login}>
      Log in
    </button>
  );
};

export default LoginButton;
