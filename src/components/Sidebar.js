import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/">
        <h1 className="sidebar__logo">
          PLAYTIME
          <span>
            PALACE
            <RocketLaunchIcon className="sidebar__logoIcon" />
          </span>
        </h1>
      </Link>
      <SidebarNav />
    </aside>
  );
}

export default Sidebar;
