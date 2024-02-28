import { FARCASTER_ID_REGISTRY } from './consts';
import { optimismPublicClient } from './publicClient';
import abi from '@/lib/abi/farcaster-id-registry.json';

const getFarcasterNames = async (rawData: any[]) => {
  const itemsToProcessFurther = [] as any[];

  // Process each item in rawData to add the pfp
  const rawDataWithPfp = await Promise.all(
    rawData.map(async (data: any) => {
      try {
        const owner = data.buyer;
        console.log('SWEETS farcaster owner', owner);
        // get FID for Leaderboard
        const farcasterId = await optimismPublicClient.readContract({
          address: FARCASTER_ID_REGISTRY,
          abi,
          functionName: 'idOf',
          args: [owner],
        });
        console.log('SWEETS farcasterId', farcasterId);

        if (farcasterId) {
          // get User (profilePic) by FID
          const response = await fetch(
            `https://nemes.farcaster.xyz:2281/v1/userDataByFid?fid=${farcasterId}&user_data_type=USER_DATA_TYPE_PFP`,
          );
          const json = await response.json();
          const pfp = json.data.userDataBody.value;
          console.log('SWEETS data', pfp);

          // Add `pfp` to the current item
          return { ...data, pfp };
        } else {
          // If no farcasterId, add to itemsToProcessWithENS for ENS lookup
          itemsToProcessFurther.push(data);
          return null; // Temporarily return null to filter out later
        }
      } catch (err) {
        console.error('SWEETS ERROR', err);
        // Add to itemsToProcessWithENS if there was an error
        itemsToProcessFurther.push(data);
        return null; // Temporarily return null to filter out later
      }
    }),
  ).then((results) => results.filter((item) => item !== null));
  return { match: rawDataWithPfp, noMatch: itemsToProcessFurther };
};

export default getFarcasterNames;
