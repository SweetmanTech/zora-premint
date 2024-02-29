import { normalize } from 'viem/ens';
import { ethPublicClient } from './publicClient';
import getEnsName from './getEnsName';

const getEnsNames = async (rawData: any[]) => {
  const updatedData = await Promise.all(
    rawData.map(async (data: any) => {
      const rawAddress = data.buyer;
      try {
        const creatorId = await getEnsName(rawAddress);
        return { ...data, buyer: creatorId || data.buyer };
      } catch (error) {
        throw error;
      }
    }),
  );
  return updatedData;
};

export default getEnsNames;
