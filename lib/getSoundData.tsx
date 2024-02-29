import { getEditionsByCreator } from './getSoundContractsByCreator';
import getTransferEvents from './getTransferEvents';
import parseLogEntries from './parseLogEntries';

const getSoundData = async (creator: string) => {
  const creatorEditions = await getEditionsByCreator(creator);
  const [baseEditions, optimismEditions, mainNetEditions] = [
    creatorEditions[8453],
    creatorEditions[10],
    creatorEditions[1],
  ];
  const [mainNetRawTransactions, optimismRawTransactions, baseRawTransactions] = await Promise.all([
    getTransferEvents(mainNetEditions, 1),
    getTransferEvents(optimismEditions, 10),
    getTransferEvents(baseEditions, 8453),
  ]);
  const editions = [...mainNetRawTransactions, ...optimismRawTransactions, ...baseRawTransactions];
  const parsed = parseLogEntries(editions);
  const arrayData = Object.values(parsed).map((item: any) => ({
    buyer: item.buyer,
    totalCreatorReward: item.totalCreatorReward.toString(),
    editions: item.editions,
  }));
  return arrayData;
};

export default getSoundData;
