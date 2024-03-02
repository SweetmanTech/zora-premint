import shortenAddress from '@/lib/shortenAddress';
import Avatar from '../Avatar';

const LeaderboardRow = ({ rank, name, text, image, isFrame }: any) => {
  const isOdd = rank % 2 !== 0;
  const bgColor = isOdd ? 'bg-white bg-opacity-80' : 'bg-[#EAE5F0] bg-opacity-80';

  return (
    <tr
      className={`${bgColor} font-helvetica`}
      tw={`${bgColor}  flex justify-between items-center text-2xl`}
    >
      <td
        className="pl-4 text-4xl font-bold text-gray-900"
        tw="pl-[50px] py-4 text-9xl font-medium text-gray-900"
      >
        {rank}
      </td>
      <td className="flex">
        <div
          className="py-4 flex items-center gap-3"
          tw="text-5xl px-4 py-4 flex items-center gap-3"
        >
          <Avatar size={isFrame ? '125' : '32'} src={image} />
        </div>
        <div
          className="pl-3 py-4 flex items-center gap-3"
          tw="text-5xl px-4 py-4 flex items-center gap-3"
        >
          <div tw="px-4">{shortenAddress(name)}</div>
        </div>
      </td>

      <td className="px-4 py-4 text-gray-500" tw="text-5xl px-4 py-4">
        {text}
      </td>
    </tr>
  );
};

export default LeaderboardRow;
