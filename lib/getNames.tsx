import { normalize } from 'path';
import { ethPublicClient, optimismPublicClient } from './publicClient';
import { getContract } from 'viem';
import { FARCASTER_ID_REGISTRY } from './consts';
import abi from '../lib/abi/farcaster-id-registry.json';

const getNames = async (rawData: any[]) => {
  //   Farcaster Lookup
  try {
    const owner = rawData[0].buyer;
    console.log('SWEETS farcaster owner', owner);
    //     get FID for Leaderboard
    const farcasterId = await optimismPublicClient.readContract({
      address: FARCASTER_ID_REGISTRY,
      abi,
      functionName: 'idOf',
      args: [owner],
    });
    console.log('SWEETS farcasterId', farcasterId);

    //     get User (profilePic) by FID
    const response = await fetch(
      `https://nemes.farcaster.xyz:2281/v1/userDataByFid?fid=${farcasterId}&user_data_type=USER_DATA_TYPE_PFP`,
    );
    const data = await response.json();
    const pfp = data.data.userDataBody.value;
    console.log('SWEETS data', pfp);
  } catch (err) {
    console.error('SWEETS ERROR', err);
  }

  //   ENS Lookup
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

export default getNames;
