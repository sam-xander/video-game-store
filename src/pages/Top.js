import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Top({ API_KEY }) {
  const [topData, setTopData] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setTopData(data.results);
      });
  }, [API_KEY]);

  if (!topData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="genres">
      {topData.map((game) => (
        <Link
          className="genres__link"
          key={game.id}
          to={`/games/${game.name}`}
          style={{
            background: `url('${game.background_image}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "grey",
            backgroundBlendMode: "multiply",
          }}
        >
          {game.name}
        </Link>
      ))}
    </div>
  );
}

export default Top;
