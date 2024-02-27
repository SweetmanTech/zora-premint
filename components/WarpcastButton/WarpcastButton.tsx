'use client';

import { VERCEL_URL } from '@/lib/consts';
import Button from '../Button';

const WarpcastButton = ({ creator }: any) => {
  const handleClick = () => {
    window.open(`https://warpcast.com/~/compose?text=${VERCEL_URL}/creator/${creator}`);
  };

  return <Button onClick={handleClick}>Share on Warpcast</Button>;
};

export default WarpcastButton;
