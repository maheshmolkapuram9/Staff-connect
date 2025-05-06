import ClosingCross from "../utils/closingCross";
import NavLinkElem from "../utils/NavLinkElem";

export interface NavItemProps {
  path: string;
  name: string;
}

interface Navbarprops {
  showNavOnMobile: boolean;
  handleMenuToggle: () => void;
}

const Navbar = ({ showNavOnMobile, handleMenuToggle }: Navbarprops) => {
  const navLinksArr: NavItemProps[] = [
    { path: "/", name: "Dashboard" },
    { path: "/staffDirectory", name: "Staff Directory" },
    { path: "/itRequests", name: "IT Requests" },
    { path: "/tickets", name: "Tickets" },
    { path: "/toDoList", name: "To Do List" },
  ];

  return (
    <nav
      className={
        "fixed xl:static z-10 h-[100%] xl:h-auto w-[300px] xl:w-auto left-0 top-0 bg-primary xl:block xl:bg-transparent transition-transform duration-500 ease-in-out xl:transition-none xl:translate-none" +
        (showNavOnMobile ? " translate-x-0" : " -translate-x-full")
      }
    >
      <ClosingCross
        onClick={handleMenuToggle}
        className="bg-text-primary xl:hidden"
      />
      <ul className="flex flex-col xl:flex-row text-lg 2xl:text-xl text-text-muted">
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
