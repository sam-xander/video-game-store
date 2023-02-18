import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Genres.css";

function GenrePage() {
  const { genreName } = useParams();
  const [genreData, setGenreData] = useState(null);
  const API_KEY = "afd9ed101fc842cca76630e512009e7f";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreName}`)
      .then((response) => response.json())
      .then((data) => {
        setGenreData(data.results);
        console.log(data.results);
      });
  }, []);

  if (!genreData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="genres">
      {genreData.map((genre) => (
        <Link
          className="genres__link"
          key={genre.id}
          to={`/games/${genre.slug}`}
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
