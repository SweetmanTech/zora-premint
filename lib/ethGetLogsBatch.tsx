import axios from 'axios';

export const ethGetLogsBatch = async (batchPayload: any[]) => {
  const endpoint = 'https://opt-mainnet.g.alchemy.com/v2/mBeLxutFN16DEheyiUtcoKdis0Jxn68H';

  try {
    const response = await axios.post(endpoint, batchPayload);
    const batchedLogs = response.data;
    return batchedLogs.map((res: any) => res.result);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return [];
  }
};
