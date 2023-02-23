import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Home({ API_KEY }) {
  const [popular, setPopular] = useState(null);
  const [genres, setGenres] = useState(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setPopular(data.results);
      });
  }, [API_KEY]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.results);
      });
  }, [API_KEY]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`)
      .then((response) => response.json())
      .then((data) => {
        setRating(data.results);
      });
  }, [API_KEY]);

  if (!popular) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Link className="home__title" to="/top">
          <h2>Most Popular</h2>
          <p>
            View More <ArrowRightIcon />
          </p>
        </Link>
        <div className="genres" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {popular.slice(0, 4).map((game) => (
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
      </div>
      <div>
        <Link className="home__title" to="/genres">
          <h2>Genres</h2>
          <p>
            View More <ArrowRightIcon />
          </p>
        </Link>
        <div className="genres">
          {genres.slice(0, 6).map((genre) => (
            <Link
              className="genres__link"
              key={genre.id}
              to={`genres/${genre.slug}`}
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
      </div>
      <div>
        <Link className="home__title" to="/rating">
          <h2>Highest Rating</h2>
          <p>
            View More <ArrowRightIcon />
          </p>
        </Link>
        <div className="genres">
          {rating.slice(6, 12).map((game) => (
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
      </div>
    </>
  );
}

export default Home;
