import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Rating() {
  const [ratingData, setRatingData] = useState(null);
  const API_KEY = "6d6f10f340174b0689ca620ab0119ffb";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`)
      .then((response) => response.json())
      .then((data) => {
        setRatingData(data.results);
        console.log(data.results);
      });
  }, []);

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
