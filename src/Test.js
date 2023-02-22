// COMPONENT THAT HANDLES RAWG.IO API SEARCH AND MAPS OVER EACH RETURNED GAME
import { useState } from "react";
import { Link } from "react-router-dom";


function Test( {data}) {
  // const [input, setInput] = useState("");
  // const [data, setData] = useState([]);
  const [setSelectedGame] = useState(null);
  const [setGameDetails] = useState(null);
  const API_KEY = "6d6f10f340174b0689ca620ab0119ffb";



  function handleGameClick(game) {
    setSelectedGame(game);
    fetch(`https://api.rawg.io/api/games/${game.id}?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setGameDetails(data));
  }

  return (
    <>
      {}
      <div className="genres">
      {data.map((game) => (
        <Link
          className="genres__link"
          key={game.id}
          onClick={() => handleGameClick(game)}
          to={`/games/${game.slug}`}
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
    </>
  );
}

export default Test;

