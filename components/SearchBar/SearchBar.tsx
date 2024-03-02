import Button from '../Button';
import { useState } from 'react';
import { VERCEL_URL } from '@/lib/consts';

const SearchBar = () => {
  const [creator, setCreator] = useState('');

  const handleClick = () => {
    window.open(`${VERCEL_URL}/creator/${creator}`);
  };

  return (
    <div className="font-helvetica flex gap-3">
      <input
        onChange={(e) => setCreator(e.target.value)}
        className="rounded h-[30px] md:w-[300px] pl-3"
        placeholder="search another wallet..."
      />
      <Button onClick={handleClick} className="bg-white !text-black w-[29px] !shadow-2xl">
        <img height="20" width="20" src="/images/search.png" />
      </Button>
    </div>
  );
};

export default SearchBar;
