import NavLinkElem from "../utils/NavLinkElem";

export interface NavItemProps {
  path: string;
  name: string;
}

const Navbar = () => {
  const navLinksArr: NavItemProps[] = [
    { path: "/", name: "Dashboard" },
    { path: "/staffDirectory", name: "Staff Directory" },
    { path: "/itRequests", name: "IT Requests" },
    { path: "/tickets", name: "Tickets" },
    { path: "/toDoList", name: "To Do List" },
  ];
  return (
    <nav>
      <ul className="flex text-xl text-text-muted">
        {navLinksArr.map((eachLink) => (
          <NavLinkElem
            key={eachLink.path}
            path={eachLink.path}
            name={eachLink.name}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
