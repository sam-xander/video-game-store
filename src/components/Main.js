import { Route, Routes } from "react-router-dom";
import GamePage from "../pages/GamePage";
import WishList from "../pages/WishList";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Test from "../Test";


function Main() {
  return (
    <main className="main">
      <div className="main__wrapper">
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/games/:gameName" element={<GamePage />} />
          <Route path="/wishlist" element={<WishList />}/> 
          <Route path="/home" element={<Test />}/> 
          <Route path="/contact" element={<Contact />}/>        
          <Route path="*" element={<NotFound />}/> 
        </Routes>
      </div>
    </main>
  );
}

export default Main;
