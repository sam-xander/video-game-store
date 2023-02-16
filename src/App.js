import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
//import Game from '.components/Game.js';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
