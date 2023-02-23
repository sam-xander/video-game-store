import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import MobileNav from "./components/MobileNav";
import Sidebar from "./components/Sidebar";

function App() {
  const [API_KEY] = useState(process.env.REACT_APP_API_KEY);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        />
        <Main API_KEY={API_KEY} data={data} />
      </div>
      {isMenuOpen && <MobileNav toggleMenu={toggleMenu} />}
    </div>
  );
}

export default App;
