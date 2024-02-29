const LandingPageHeader = ({ isServer }: any) => (
  <div
    style={{ display: 'flex' }}
    className="space-y-3"
    tw="flex flex-col items-center text-center w-[1000px]"
  >
    <p
      className="text-4xl font-bold tracking-tighter sm:text-5xl"
      tw="text-7xl font-black pt-[100px]"
    >
      Know Your Community.
    </p>
    <p
      className="max-w-[600px] text-md md:text-xl font-bold"
      tw="max-w-[600px] text-4xl font-bold mt-[-25]"
    >
      {!isServer && `Log in to`} view your most loyal collectors
    </p>
  </div>
);

export default LandingPageHeader;
