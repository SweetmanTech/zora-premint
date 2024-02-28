import getTransferEvents from './getTransferEvents';
import parseLogEntries from './parseLogEntries';

const getSoundData = async (creator: string) => {
  const soundResponse = await fetch(`/api/sound/contracts?creator=${creator}`);
  const soundData = await soundResponse.json();
  const editions = soundData.response.map((item: any) => item.edition);
  const soundRawTransactions = await getTransferEvents(editions);
  const parsed = parseLogEntries(soundRawTransactions);
  const arrayData = Object.values(parsed).map((item: any) => ({
    buyer: item.buyer,
    totalCreatorReward: item.totalCreatorReward.toString(),
    editions: item.editions,
  }));
  return arrayData;
};

export default getSoundData;
