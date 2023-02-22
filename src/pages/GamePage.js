import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./GamePage.css";

function GamePage({ API_KEY }) {
  const { gameName } = useParams();
  const [game, setGame] = useState(null);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?search=${gameName}&key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // Get the ID of the first search result
        const gameId = data.results[0].id;

        // Fetch the full game data using the ID
        fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            // Set the game state with the full game data
            setGame(data);

            // Fetch the store data for the game
            fetch(
              `https://api.rawg.io/api/games/${gameId}/stores?key=${API_KEY}`
            )
              .then((response) => response.json())
              .then((data) => {
                // Set the stores state with the store data
                setStores(data.results);
              })
              .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [gameName, API_KEY]);

  if (!game || stores.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(game, stores);

  return (
    <>
      <div className="game__header">
        <img className="game__image" src={game.background_image} alt="banner" />
      </div>
      <div className="game__body">
        <div className="game__about">
          <h2>{game.name}</h2>
          <h3>
            {game.genres[0].name} - {game.released.substring(0, 4)}
          </h3>
          <p>{game.description_raw}</p>
        </div>
        <div className="game__info">
          <button className="button">Wishlist</button>
          <h4 className="game__infoItem">Platforms</h4>
          <p>
            {game.platforms
              .map((platform) => platform.platform.name)
              .join(", ")}
          </p>
          <h4 className="game__infoItem">Links</h4>
          <ul>
            {stores.map((store) => {
              // Checks the different stores arrays for a match and other stores whose slugs are formatted wrong
              const matchingStore = game.stores.find(
                (item) =>
                  store.url.includes(item.store.slug) ||
                  (item.store.slug === "playstation-store" &&
                    store.url.includes("store.playstation.com")) ||
                  (item.store.slug === "xbox-store" &&
                    store.url.includes("microsoft.com"))
              );
              return (
                <li key={store.id}>
                  <a href={store.url} target="_blank" rel="noopener noreferrer">
                    {matchingStore && matchingStore.store.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <h4 className="game__infoItem">Tags</h4>
          <p>
            {game.tags
              .filter((tag) => tag.language === "eng")
              .map((tag) => tag.name)
              .join(", ")}
          </p>
        </div>
      </div>
    </>
  );
}
export default GamePage;
