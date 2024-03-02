import { useState } from 'react';
import Button from '../Button';
import LinkButton from './LinkButton';
import { VERCEL_URL } from '@/lib/consts';

const ShareButton = ({ creator }: any) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const url = `${VERCEL_URL}/creator/${creator}`;

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <Button className="bg-white !text-black flex gap-5" onClick={toggleDropdown}>
        Share <img src="/images/share.png" alt="Share icon" />
      </Button>
      {isDropdownVisible && (
        <div className="absolute mt-2 bg-white shadow-md rounded-lg py-2">
          <ul>
            <LinkButton
              text="Share to Warpcast"
              src="/images/warpcast.png"
              href={`https://warpcast.com/~/compose?text=${url}`}
            />
            <LinkButton text="Share to XMTP" src="/images/xmtp.png" />
            <LinkButton
              text="Share to Image"
              src="/images/placeholder.png"
              href={`${VERCEL_URL}/api/leaderboard?creator=${creator}`}
            />
            <LinkButton
              text="Share to X"
              src="/images/x-logo.png"
              href={`https://twitter.com/intent/tweet?text=Know%20your%20community%20with%20datamuse&url=${url}`}
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default ShareButton;
