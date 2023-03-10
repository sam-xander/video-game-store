import { NavLink } from "react-router-dom";
import {
  FireIcon,
  HomeIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/react/24/solid";
function SidebarNav() {
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
  ];

  return (
    <nav className="sidebar__nav">
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.link}
          className="sidebar__navLink"
          activeclassname="active"
        >
          {item.icon}
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default SidebarNav;
