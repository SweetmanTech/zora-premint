import LeaderboardBody from '../LeaderboardPage/LeaderboardBody';
import LeaderboardHead from '../LeaderboardPage/LeaderboardHead';

const Leaderboard = ({ leaderboard }: any) => (
  <div
    className="overflow-auto"
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <table className="min-w-full w-full" tw="min-w-full w-full flex flex-col">
      <LeaderboardHead />
      <LeaderboardBody leaderboard={leaderboard} />
    </table>
  </div>
);

export default Leaderboard;
