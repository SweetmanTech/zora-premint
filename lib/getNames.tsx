import { normalize } from 'path';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

const getNames = async (rawData: any[]) => {
  console.log('SWEETS GET ENS', rawData);
  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
  });

  // Use Promise.all to handle multiple asynchronous operations in parallel
  const updatedData = await Promise.all(
    rawData.map(async (data) => {
      const rawAddress = data.buyer;
      console.log('SWEETS rawAddress', rawAddress);
      try {
        const creatorId = await publicClient.getEnsName({
          address: normalize(rawAddress) as any,
        });
        console.log('SWEETS creatorId', creatorId);
        // Replace `buyer` with `creatorId` for the current item
        return { ...data, buyer: creatorId || data.buyer };
      } catch (error) {
        console.error(error);
        throw error;
        return { ...data };
      }
    }),
  );

  return updatedData;
};

export default getNames;
