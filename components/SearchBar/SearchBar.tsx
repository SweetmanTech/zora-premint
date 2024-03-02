import { useRouter } from 'next/navigation';
import Button from '../Button';
import { useState } from 'react';
import { VERCEL_URL } from '@/lib/consts';

const SearchBar = () => {
  const { push } = useRouter();
  const [creator, setCreator] = useState('');

  const handleClick = () => {
    console.log('SWEETS CLICKED');
    window.open(`${VERCEL_URL}/creator/${creator}`);
  };

  return (
    <div>
      <input
        onChange={(e) => setCreator(e.target.value)}
        className="rounded h-9 w-[300px] pl-3"
        placeholder="search another wallet..."
      />
      <Button onClick={handleClick}>search</Button>
    </div>
  );
};

export default SearchBar;
