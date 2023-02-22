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

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Header />
        <Main API_KEY={API_KEY} />
      </div>
    </div>
  );
}

export default App;
