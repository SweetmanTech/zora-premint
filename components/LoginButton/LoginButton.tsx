'use client';

import { usePrivy } from '@privy-io/react-auth';
import Button from '../Button';

const LoginButton = () => {
  const { ready, authenticated, login } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);

  return (
    <Button disabled={disableLogin} onClick={login} className="bg-black px-11 py-3">
      Log in
    </Button>
  );
};

export default LoginButton;
