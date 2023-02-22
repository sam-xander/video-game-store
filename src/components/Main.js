import { Route, Routes } from "react-router-dom";
import Test from "../Test";
import GamePage from "../pages/GamePage";
import WishList from "../pages/WishList";
import Top from "../pages/Top";
import Genres from "../pages/Genres";
import GenrePage from "../pages/GenrePage";
import NotFound from "../pages/NotFound";
import Rating from "../pages/Rating";

function Main({ API_KEY }) {
  return (
    <main className="main">
      <div className="main__wrapper">
        <Routes>
          <Route path="/" element={<Test />} />
          <Route
            path="/games/:gameName"
            element={<GamePage API_KEY={API_KEY} />}
          />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/top" element={<Top />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:genreName" element={<GenrePage />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/home" element={<Test />} />

          {/* KEEP Not Found At Bottom */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
