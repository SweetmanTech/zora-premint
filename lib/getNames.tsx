import { normalize } from 'path';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

const getNames = async (rawData: any[]) => {
  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const updatedData = await Promise.all(
    rawData.map(async (data) => {
      const rawAddress = data.buyer;
      try {
        const creatorId = await publicClient.getEnsName({
          address: normalize(rawAddress) as any,
        });
        return { ...data, buyer: creatorId || data.buyer };
      } catch (error) {
        throw error;
      }
    }),
  );

  return updatedData;
};

export default getNames;
