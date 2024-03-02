import { useState } from 'react';
import Avatar from '../Avatar';
import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';

const Profile = ({ src }: any) => {
  const { logout } = usePrivy();
  const { push } = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  const handleClick = () => {
    logout();
    push('/');
  };

  return (
    <div className="relative font-helvetica font-bold">
      <div onClick={toggleDropdown}>
        <Avatar size="33" src={src || undefined} />
      </div>
      {isDropdownVisible && (
        <div className="absolute left-[-100px] transform -translate-x-[-100px] mt-2 py-2 w-[75px] bg-white rounded-md shadow-xl z-50">
          <a
            onClick={handleClick}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default Profile;
