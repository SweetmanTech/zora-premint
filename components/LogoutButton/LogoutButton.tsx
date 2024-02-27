'use client';

import { usePrivy } from '@privy-io/react-auth';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const { logout } = usePrivy();
  const { push } = useRouter();

  const handleClick = () => {
    logout();
    push('/');
  };

  return <Button onClick={handleClick}>Logout</Button>;
};

export default LogoutButton;
