import LoginButton from '../LoginButton';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = ({ isClient = true }) => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <LandingPageHeader />
    {isClient && (
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <LoginButton />
      </div>
    )}
  </div>
);

export default LandingPageContent;
