import LoginButton from '../LoginButton';

const LandingPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <div className="space-y-3">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Know Your Community.</h1>
      <p className="max-w-[600px] text-md md:text-xl font-bold">
        Log in to view your most loyal collectors
      </p>
    </div>
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      <LoginButton />
    </div>
  </div>
);

export default LandingPageContent;
