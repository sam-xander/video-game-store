import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import MobileNav from "./components/MobileNav";
import Sidebar from "./components/Sidebar";

function App() {
  const [API_KEY] = useState(process.env.REACT_APP_API_KEY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${userInput}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
    navigate("/search");
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Header
          API_KEY={API_KEY}
          userInput={userInput}
          setUserInput={setUserInput}
          setData={setData}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <Main API_KEY={API_KEY} data={data} />
      </div>
      {isMenuOpen && (
        <MobileNav
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          userInput={userInput}
          toggleMenu={toggleMenu}
        />
      )}
    </div>
  );
}

export default App;
