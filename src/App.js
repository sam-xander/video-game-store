import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h1 className="sidebar__logo">PLAYTIME PALACE</h1>
        <nav className="sidebar__nav">
          <button className="sidebar__navLink">Trending</button>
          <button className="sidebar__navLink">Trending</button>
          <button className="sidebar__navLink">Trending</button>
        </nav>
      </div>
      <div className="content">
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
        <main className="main">
          <div className="main__wrapper">Main</div>
        </main>
      </div>
    </div>
  );
}

export default App;
