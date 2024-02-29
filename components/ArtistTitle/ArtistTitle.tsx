import shortenAddress from '@/lib/shortenAddress';

const ArtistTitle = ({ creator }: any) => (
  <div
    style={{ display: 'flex' }}
    className="text-lg py-9 pl-7 my-3 text-black text-left rounded-lg bg-[#BCB4C5] bg-opacity-67 drop-shadow-2xl"
    tw="text-5xl py-9 pl-7 my-3 text-black text-center rounded-lg bg-[#BCB4C5] bg-opacity-67 drop-shadow-2xl"
  >
    Top NFT collectors for @{shortenAddress(creator)}:
  </div>
);

export default ArtistTitle;
