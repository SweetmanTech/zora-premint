'use client';

import LeaderboardProvider from '@/providers/LeaderboardProvider';
import LeaderboardCard from './LeaderboardCard';
import ArtistTitle from '../ArtistTitle';
import { useEffect, useState } from 'react';
import { getProfileInfo } from '@/lib/getProfileInfo';
import ShareButton from '../ShareButton';
import SearchBar from '../SearchBar';
import Profile from '../Profile';

const LeaderboardPage = ({ creator }: any) => {
  const [humanId, setHumanId] = useState(creator);
  const [creatorPfp, setCreatorPfp] = useState(null);

  useEffect(() => {
    const init = async () => {
      const data = await getProfileInfo([creator]);
      const domain = data?.data?.Domains?.Domain?.[0];
      if (domain) {
        setCreatorPfp(domain.avatar);
        setHumanId(domain.name);
      }
    };

    if (!creator) return;
    init();
  }, [creator]);

  return (
    <LeaderboardProvider creator={creator}>
      <div className="px-3 flex items-center justify-between bg-[#BCB4C5] h-[50px] rounded-bl-lg rounded-br-lg mb-[8px]">
        <Profile src={creatorPfp} />
        <SearchBar />
      </div>
      <div className="mx-3">
        <ArtistTitle creator={humanId} />

        <div className="flex justify-end mb-[8px]">
          <ShareButton creator={creator} />
        </div>
        <LeaderboardCard />
      </div>
    </LeaderboardProvider>
  );
};

export default LeaderboardPage;
