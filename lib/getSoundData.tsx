import getTransferEvents from './getTransferEvents';
import parseLogEntries from './parseLogEntries';

const getSoundData = async (creator: string) => {
  const soundResponse = await fetch(`/api/sound/contracts?creator=${creator}`);
  const soundData = await soundResponse.json();
  const baseEditions = soundData.response
    .filter((item: any) => item.chainId === 8453)
    .map((item: any) => item.edition);
  const optimismEditions = soundData.response
    .filter((item: any) => item.chainId === 10)
    .map((item: any) => item.edition);
  const [baseRawTransactions, optimismRawTransactions] = await Promise.all([
    getTransferEvents(baseEditions, 8453),
    getTransferEvents(optimismEditions, 10),
  ]);
  const editions = [...baseRawTransactions, ...optimismRawTransactions];
  const parsed = parseLogEntries(editions);
  const arrayData = Object.values(parsed).map((item: any) => ({
    buyer: item.buyer,
    totalCreatorReward: item.totalCreatorReward.toString(),
    editions: item.editions,
  }));
  return arrayData;
};

export default getSoundData;
