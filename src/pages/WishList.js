import { Link } from "react-router-dom";
import "./Genres.css";

function Wishlist({ wishlist }) {
  if (wishlist.length) {
    return <h2>Add Games to Wishlist to see them here!</h2>;
  }

  return (
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
  );
}

export default Wishlist;
