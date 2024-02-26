import LoginButton from '../LoginButton';

const LandingPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <img
      alt="Logo"
      className="aspect-[2/1] overflow-hidden rounded-lg object-contain"
      height="150"
      src="/zorb.png"
      width="300"
    />
    <div className="space-y-3">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fast. Secure. Scalable.</h1>
      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        The platform for high performance. Unleash your potential with the best frontend experience.
      </p>
    </div>
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      <LoginButton />
    </div>
  </div>
);

export default LandingPageContent;
