import {
  FireIcon,
  HomeIcon,
  RocketLaunchIcon,
  Squares2X2Icon,
  StarIcon,
  XMarkIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "./MobileNav.css";

function MobileNav({ toggleMenu, handleChange, handleSubmit, userInput }) {
  const navigation = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="sidebar__navIcon" />,
    },
    {
      name: "Popular",
      link: "/top",
      icon: <FireIcon className="sidebar__navIcon" />,
    },
    {
      name: "Genres",
      link: "/genres",
      icon: <Squares2X2Icon className="sidebar__navIcon" />,
    },
    {
      name: "Top Rated",
      link: "/rating",
      icon: <StarIcon className="sidebar__navIcon" />,
    },
    {
      name: "Wishlist",
      link: "/wishlist",
      icon: <SparklesIcon className="sidebar__navIcon" />,
    },
  ];

  return (
    <div className="mobileNav">
      <div className="mobileNav__header">
        <Link className="header__logo" to="/" onClick={toggleMenu}>
          <h1 className="sidebar__logo">
            PLAYTIME
            <span>
              PALACE
              <RocketLaunchIcon className="sidebar__logoIcon" />
            </span>
          </h1>
        </Link>
        <XMarkIcon onClick={toggleMenu} className="mobileNav__icon" />
      </div>
      <form className="mobileNav__form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={userInput}
          className="header__search"
          type="text"
          placeholder="Search a game"
        />
      </form>
      <nav className="mobileNav__nav">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="mobileNav__navLink"
            onClick={toggleMenu}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default MobileNav;
