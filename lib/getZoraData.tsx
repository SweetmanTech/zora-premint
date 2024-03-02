import { VERCEL_URL } from './consts';

const getZoraData = async (creator: string) => {
  const zoraResponse = await fetch(`/api/graphData?creator=${creator}`);
  const zoraData = await zoraResponse.json();
  return zoraData;
};

export default getZoraData;
