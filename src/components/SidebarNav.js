function SidebarNav() {
  const navigation = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "New",
      link: "/",
    },
    {
      name: "Top",
      link: "/",
    },
    {
      name: "Genres",
      link: "/",
    },
    {
      name: "Platforms",
      link: "/",
    },
  ];

  return (
    <nav className="sidebar__nav">
      {navigation.map((item) => (
        <a href={item.link} className="sidebar__navLink">
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export default SidebarNav;
