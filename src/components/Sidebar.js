import SidebarNav from "./SidebarNav";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__logo">
        <span>PLAYTIME</span>
        <span>PALACE</span>
      </h1>
      <SidebarNav />
    </aside>
  );
}

export default Sidebar;
