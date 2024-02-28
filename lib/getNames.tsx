import getEnsNames from './getEnsNames';
import getFarcasterNames from './getFarcasterNames';
import getSortedLeaderboard from './getSortedLeaderboard';

const getNames = async (rawData: any[]) => {
  const { match: farcasterRows, noMatch } = await getFarcasterNames(rawData);
  let ensMatch = [];
  if (noMatch.length > 0) {
    ensMatch = await getEnsNames(noMatch);
  }
  const merged = [...farcasterRows, ...ensMatch] as any;
  return getSortedLeaderboard(merged);
};

export default getNames;
