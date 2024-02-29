import axios from 'axios';

export const ethGetLogsBatch = async (batchPayload: any[], endpoint: string) => {
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
