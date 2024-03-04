import Buttons from './Buttons';
import CreateFrameMetadata from './CreateFrameMetadata';

const Page = () => (
  <div className="flex flex-col justify-center items-center h-[100vh]">
    <CreateFrameMetadata />
    <Buttons />
  </div>
);

export default Page;
