const ArtistTitle = ({ creator }: any) => (
  <div
    style={{ display: 'flex' }}
    tw="text-5xl py-9 pl-7 my-3 text-black text-center rounded-lg bg-[#BCB4C5] bg-opacity-67 drop-shadow-2xl"
  >
    Top NFT collectors for @{creator}:
  </div>
);

export default ArtistTitle;
