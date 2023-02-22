import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Motion from "./components/motion/motion";
function App() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="content">
        <Header />
        <Main />
        <Motion />
      </div>
    </div>
  );
}

export default App;
