import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Genres.css";

function Genres({ API_KEY }) {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.results);
        console.log(data.results);
      });
  }, [API_KEY]);

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
