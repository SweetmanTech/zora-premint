import { useState } from 'react';
import Button from '../Button';
import LinkButton from './LinkButton';
import { VERCEL_URL } from '@/lib/consts';
import { toast } from 'react-toastify';

const ShareButton = ({ creator }: any) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const url = `${VERCEL_URL}/creator/${creator}`;

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success('copied to clipboard');
  };

  return (
    <div className="font-helvetica relative">
      <Button
        className="bg-white !text-black flex gap-3 w-[100px] shadow-md"
        onClick={toggleDropdown}
      >
        Share <img src="/images/share.png" width="29" height="29" alt="Share icon" />
      </Button>
      {isDropdownVisible && (
        <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 w-[300px]">
          <ul>
            <LinkButton
              text="Share to Warpcast"
              src="/images/warpcast.png"
              onClick={() => window.open(`https://warpcast.com/~/compose?text=${url}`)}
            />
            <LinkButton text="Share to XMTP" src="/images/xmtp.png" onClick={copyToClipboard} />
            <LinkButton
              text="Share to Image"
              src="/images/placeholder.png"
              onClick={() => window.open(`${VERCEL_URL}/api/leaderboard?creator=${creator}`)}
            />
            <LinkButton
              text="Share to X"
              src="/images/x-logo.png"
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?text=Know%20your%20community%20with%20datamuse&url=${url}`,
                )
              }
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
