import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Genres.css";

function GenrePage() {
  const { genreName } = useParams();
  const [genreData, setGenreData] = useState(null);
  const API_KEY = "6d6f10f340174b0689ca620ab0119ffb";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreName}`)
      .then((response) => response.json())
      .then((data) => {
        setGenreData(data.results);
        console.log(data.results);
      });
  }, [genreName, API_KEY]);

  if (!genreData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="genres">
      {genreData.map((genre) => (
        <Link
          className="genres__link"
          key={genre.id}
          to={`/games/${genre.name}`}
          style={{
            background: `url('${genre.background_image}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "grey",
            backgroundBlendMode: "multiply",
          }}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}

export default GenrePage;
