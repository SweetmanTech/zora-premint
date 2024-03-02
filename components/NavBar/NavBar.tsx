import Button from '../Button';
import SearchBar from '../SearchBar';

const NavBar = () => {
  return (
    <div className="px-5 bg-[#BCB4C5] flex justify-between items-center">
      <img src="/images/logo.png" />
      <SearchBar />
    </div>
  );
};

export default NavBar;
