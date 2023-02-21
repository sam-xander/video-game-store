import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Genres.css";

function New() {
  const [newData, setNewData] = useState(null);
  const API_KEY = "afd9ed101fc842cca76630e512009e7f";
  const minGames = 14;

  useEffect(() => {
    let page = 1;
    let games = [];

    const fetchNew = () => {
      fetch(
        `https://api.rawg.io/api/stores?key=${API_KEY}&ordering=-released&page=${page}&&exclude_stores=4,8,9`
      )
        .then((response) => response.json())
        .then((data) => {
          const filteredGames = data.results.filter(
            (game) => game.background_image
          );
          games = [...games, ...filteredGames];
          page++;

          if (filteredGames.length < minGames) {
            fetchNew();
            console.log(page);
          } else {
            setNewData(games);
            console.log(data);
          }
        });
    };
    fetchNew();
  }, []);

  if (!newData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="genres">
      {newData.map(
        (game) =>
          game.background_image && (
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
          )
      )}
    </div>
  );
}

export default New;
