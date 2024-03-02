import getAllIndexedData from './getIndexedData';

const getZoraData = async (creator: string) => {
  const zoraResponse = await getAllIndexedData(creator);
  const zoraData = zoraResponse.response;
  return zoraData;
};

export default getZoraData;
