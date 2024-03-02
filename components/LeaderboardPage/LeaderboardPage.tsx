'use client';

import LogoutButton from '../LogoutButton';
import LeaderboardProvider from '@/providers/LeaderboardProvider';
import LeaderboardCard from './LeaderboardCard';
import WarpcastButton from '../WarpcastButton';
import ArtistTitle from '../ArtistTitle';
import { useEffect, useState } from 'react';
import Avatar from '../Avatar';
import Button from '../Button';
import { getProfileInfo } from '@/lib/getProfileInfo';

const LeaderboardPage = ({ creator }: any) => {
  const [humanId, setHumanId] = useState(creator);
  const [creatorPfp, setCreatorPfp] = useState(null);

  useEffect(() => {
    const init = async () => {
      const data = await getProfileInfo([creator]);
      setCreatorPfp(data.data.Domains.Domain[0].avatar);
      setHumanId(data.data.Domains.Domain[0].name);
    };

    if (!creator) return;
    init();
  }, [creator]);

  return (
    <LeaderboardProvider creator={creator}>
      <LogoutButton />
      <WarpcastButton creator={creator} />
      <div className="flex justify-between">
        <ArtistTitle creator={humanId} />
        <div
          className="px-4 py-4 flex items-center gap-3"
          tw="text-5xl px-4 py-4 flex items-center gap-3"
        >
          <Avatar size="77" src={creatorPfp || undefined} />
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="bg-white !text-black flex gap-5">
          Share <img src="/images/share.png" />
        </Button>
      </div>
      <LeaderboardCard />
    </LeaderboardProvider>
  );
};

export default LeaderboardPage;
