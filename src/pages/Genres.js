import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Genres.css";

function Genres() {
  const [genres, setGenres] = useState(null);
  const API_KEY = "afd9ed101fc842cca76630e512009e7f";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.results);
        console.log(data.results);
      });
  }, []);

  if (!genres) {
    return <div>Loading...</div>;
  }

  return (
    <div className="genres">
      {genres.map((genre) => (
        <Link
          className="genres__link"
          key={genre.id}
          to={genre.slug}
          style={{
            background: `url('${genre.image_background}')`,
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

export default Genres;
