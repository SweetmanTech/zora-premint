'use client';

import { usePrivy } from '@privy-io/react-auth';
import Button from '../Button';

const LogoutButton = () => {
  const { logout } = usePrivy();

  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
