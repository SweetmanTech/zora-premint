'use client';

import LogoutButton from '../LogoutButton';
import LeaderboardProvider from '@/providers/LeaderboardProvider';
import LeaderboardCard from './LeaderboardCard';
import WarpcastButton from '../WarpcastButton';
import ArtistTitle from '../ArtistTitle';
import { useEffect, useState } from 'react';
import getEnsName from '@/lib/getEnsName';

const LeaderboardPage = ({ creator }: any) => {
  const [humanId, setHumanId] = useState(creator);

  useEffect(() => {
    const init = async () => {
      const name = await getEnsName(creator);
      console.log('SWEETS name', name);
      setHumanId(name);
    };

    if (!creator) return;
    init();
  }, [creator]);

  return (
    <LeaderboardProvider creator={creator}>
      <LogoutButton />
      <WarpcastButton creator={creator} />
      <ArtistTitle creator={humanId} />
      <LeaderboardCard />
    </LeaderboardProvider>
  );
};

export default LeaderboardPage;
