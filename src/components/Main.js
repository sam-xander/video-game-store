import { Route, Routes } from "react-router-dom";
import GamePage from "../pages/GamePage";
import Test from "../Test";

function Main() {
  return (
    <main className="main">
      <div className="main__wrapper">
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/games/:gameName" element={<GamePage />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
