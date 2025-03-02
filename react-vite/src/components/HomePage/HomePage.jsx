import { Link } from "react-router-dom";
import { games } from "../../gamesData";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Game Hub!</h1>
      <div className="game-list">
        {games.map((game) => (
          <Link key={game.path} to={`/${game.path}`} className="game-card">
            {game.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
