import { normalize } from 'viem/ens';
import { ethPublicClient } from './publicClient';

const getEnsNames = async (rawData: any[]) => {
  const updatedData = await Promise.all(
    rawData.map(async (data) => {
      const rawAddress = data.buyer;
      try {
        const creatorId = await ethPublicClient.getEnsName({
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

export default getEnsNames;
