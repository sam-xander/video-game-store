import { Route, Routes } from "react-router-dom";
import Test from "../Test";
import GamePage from "../pages/GamePage";
import Top from "../pages/Top";
import Genres from "../pages/Genres";
import GenrePage from "../pages/GenrePage";
import NotFound from "../pages/NotFound";
import Rating from "../pages/Rating";
import { useEffect, useState } from "react";
import Wishlist from "../pages/Wishlist";

function Main({ API_KEY, data }) {
  const [wishlist, setWishlist] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(wishlistItems);
  }, []);

  function addToWishlist(game) {
    const wishlistItem = {
      id: game.id,
      name: game.name,
      image: game.background_image,
    };
    setWishlist((prevWishlist) => [...prevWishlist, wishlistItem]);
    localStorage.setItem(
      "wishlist",
      JSON.stringify([...wishlist, wishlistItem])
    );
  }

  function removeFromWishlist(id) {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIsInWishlist(false);
  }

  return (
    <main className="main">
      <div className="main__wrapper">
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/search" element={<Test data={data} />} />
          <Route
            path="/games/:gameName"
            element={
              <GamePage
                API_KEY={API_KEY}
                addToWishlist={addToWishlist}
                wishlist={wishlist}
                setWishlist={setWishlist}
                isInWishlist={isInWishlist}
                setIsInWishlist={setIsInWishlist}
                removeFromWishlist={removeFromWishlist}
              />
            }
          />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
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
