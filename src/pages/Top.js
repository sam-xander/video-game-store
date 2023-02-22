import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/loader/loader";

function Top() {
  const [topData, setTopData] = useState(null);
  const API_KEY = "6d6f10f340174b0689ca620ab0119ffb";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setTopData(data.results);
        console.log(data.results);
      });
  }, []);

  if (!topData) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="genres">
      {topData.map((game) => (
        <Link
          className="genres__link"
          key={game.id}
          to={`/games/${game.slug}`}
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
