import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [API_KEY] = useState(process.env.REACT_APP_API_KEY);
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState([]);
  
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <Header API_KEY={API_KEY} userInput={userInput} setUserInput={setUserInput} setData={setData} />
        <Main API_KEY={API_KEY} data ={data} />
      </div>
    </div>
  );
}

export default App;
