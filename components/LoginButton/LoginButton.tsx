'use client';

import { usePrivy } from '@privy-io/react-auth';
import Button from '../Button';

const LoginButton = () => {
  const { ready, authenticated, login } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);

  return (
    <Button disabled={disableLogin} onClick={login}>
      Log in
    </Button>
  );
};

export default LoginButton;
