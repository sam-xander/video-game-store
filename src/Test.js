// COMPONENT THAT HANDLES RAWG.IO API SEARCH AND MAPS OVER EACH RETURNED GAME

import { useState } from "react";

function Test() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const API_KEY = "afd9ed101fc842cca76630e512009e7f";

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${input}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={input} type="text" />
        <button type="submit">Search</button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {data.map((game) => (
          <a
            href="/"
            style={{
              background: `url(${game.background_image})`,
              padding: "20px",
              height: "100px",
              width: "200px",
              borderRadius: "16px",
            }}
            key={game.id}
          >
            {game.name}
          </a>
        ))}
      </div>
    </>
  );
}

export default Test;
