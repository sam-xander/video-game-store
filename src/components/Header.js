import {NavLink} from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <input
          className="header__search"
          type="text"
          placeholder="Search a game"
        />
        <nav className="header__nav">
          <NavLink className="header__navLink"to="/wishlist">WishList</NavLink>
          <NavLink className="header__navLink"to="/contact">Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
