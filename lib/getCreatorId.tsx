import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import { normalize } from 'viem/ens';

const getCreatorId = async (inputText: string, url: string) => {
  if (inputText) {
    if (inputText.includes('.eth')) {
      const publicClient = createPublicClient({
        chain: mainnet,
        transport: http(),
      });
      const creatorId = (await publicClient.getEnsAddress({
        name: normalize(inputText),
      })) as any;
      return creatorId;
    } else if (inputText.includes('0x')) {
      const creatorId = inputText;
      return creatorId;
    }
  }
  const parts = url.split('creator/');
  const creatorId = parts[1];
  return creatorId;
};

export default getCreatorId;
