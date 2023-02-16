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
          <a className="header__navLink">WishList</a>
          <a className="header__navLink">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
