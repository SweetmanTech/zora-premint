import shortenAddress from '@/lib/shortenAddress';

const ArtistTitle = ({ creator }: any) => (
  <div
    style={{ display: 'flex' }}
    className="flex items-center w-[60vw] font-helvetica font-bold text-lg md:text-4xl py-1 pl-3 text-black text-left rounded-lg bg-[#BCB4C5] bg-opacity-67 drop-shadow-2xl"
    tw="text-5xl py-9 pl-7 my-3 text-black text-center rounded-lg bg-[#BCB4C5] bg-opacity-67 drop-shadow-2xl"
  >
    <p>Top collectors for </p>
    <p className="text-blue-500 underline pl-1">@{shortenAddress(creator)}:</p>
  </div>
);

export default ArtistTitle;
