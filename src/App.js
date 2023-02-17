import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";




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
