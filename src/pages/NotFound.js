import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <h2>404 Error</h2>
      <h3>Page Not Found</h3>
      <div className="notFound__button">
        <Link to="/">
          <p>Back To Home</p>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
