import { Link } from "react-router-dom";
import "./Genres.css";

function Wishlist({ wishlist }) {
  return (
    <div>
      {wishlist.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>Your wishlist is empty.</h2>
          <div className="notFound__button">
            <Link to="/">
              <p>Back To Home</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="genres">
          {wishlist.map((genre) => (
            <Link
              className="genres__link"
              key={genre.id}
              to={`/games/${genre.name}`}
              style={{
                background: `url('${genre.image}')`,
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
      )}
    </div>
  );
}

export default Wishlist;
