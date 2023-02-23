import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Rating({ API_KEY }) {
  const [ratingData, setRatingData] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`)
      .then((response) => response.json())
      .then((data) => {
        setRatingData(data.results);
        console.log(data.results);
      });
  }, [API_KEY]);

  if (!ratingData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="genres">
      {ratingData.map((game) => (
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

export default Rating;
