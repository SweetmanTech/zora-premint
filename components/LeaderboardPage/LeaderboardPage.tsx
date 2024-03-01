'use client';

import LogoutButton from '../LogoutButton';
import LeaderboardProvider from '@/providers/LeaderboardProvider';
import LeaderboardCard from './LeaderboardCard';
import WarpcastButton from '../WarpcastButton';
import ArtistTitle from '../ArtistTitle';
import { useEffect, useState } from 'react';
import getEnsName from '@/lib/getEnsName';
import Avatar from '../Avatar';

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
      <div className="flex border border-sky-500 justify-between">
        <ArtistTitle creator={humanId} />
        <div
          className="px-4 py-4 flex items-center gap-3"
          tw="text-5xl px-4 py-4 flex items-center gap-3"
        >
          <Avatar size="77" />
        </div>
      </div>
      <LeaderboardCard />
    </LeaderboardProvider>
  );
};

export default LeaderboardPage;
