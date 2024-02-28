const Avatar = ({
  src = 'https://nftstorage.link/ipfs/bafybeifbkoma4zfff5locnoxhgwpx2eehezcbctws32qsf3nsexmgtfboy',
}) => (
  <img
    alt="Avatar"
    className="rounded-full"
    height="32"
    src={src}
    style={{
      aspectRatio: '32/32',
      objectFit: 'cover',
    }}
    width="32"
  />
);

export default Avatar;
