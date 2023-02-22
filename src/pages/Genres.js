import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Genres.css";
import Loader from "../components/loader/loader";

function Genres() {
  const [genres, setGenres] = useState(null);
  const API_KEY = "6d6f10f340174b0689ca620ab0119ffb";

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.results);
        console.log(data.results);
      });
  }, []);

  if (!genres) {
    return (
      <div>
        <Loader />
      </div>
    );
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
