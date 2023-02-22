import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Loader from "./components/loader/loader";

function App() {
  const [API_KEY] = useState(process.env.REACT_APP_API_KEY);

  return (
    <div className="wrapper">
      <Sidebar />

      <div className="content">
        <Header />
        <Loader />
        <Main />
      </div>
    </div>
  );
}

export default App;
