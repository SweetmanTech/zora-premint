import { FRAME_INPUT_PLACEHOLDER, VERCEL_URL } from '@/lib/consts';
import getButtons from '@/lib/getButtons';
import { FrameMetadata } from '@coinbase/onchainkit';

const CreateFrameMetadata = () => (
  <div>
    <FrameMetadata
      ogTitle="data muse"
      ogDescription="data muse"
      buttons={getButtons()}
      image={{
        src: `${VERCEL_URL}/api/og`,
      }}
      postUrl={`${VERCEL_URL}/api/frame`}
    />
    <meta property="of:accepts:xmtp" content="2024-02-01" />
  </div>
);

export default CreateFrameMetadata;
