const LandingPageHeader = () => (
  <div
    style={{ display: 'flex' }}
    className="space-y-3"
    tw="space-y-3 flex flex-col items-center font-helvetica text-center"
  >
    <h1
      className="text-4xl font-bold tracking-tighter sm:text-5xl"
      tw="text-4xl font-bold tracking-tighter sm:text-5xl"
    >
      Know Your Community.
    </h1>
    <p
      className="max-w-[600px] text-md md:text-xl font-bold"
      tw="max-w-[600px] text-md md:text-xl font-bold"
    >
      Log in to view your most loyal collectors
    </p>
  </div>
);

export default LandingPageHeader;
