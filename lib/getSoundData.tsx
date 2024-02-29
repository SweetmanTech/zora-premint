import { getEditionsByCreator } from './getSoundContractsByCreator';
import getTransferEvents from './getTransferEvents';
import parseLogEntries from './parseLogEntries';
import getFormattedData from './getFormattedData';

const getSoundData = async (creator: string, ethPrice: any) => {
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
  const arrayData = getFormattedData(parsed, ethPrice);
  return arrayData;
};

export default getSoundData;
