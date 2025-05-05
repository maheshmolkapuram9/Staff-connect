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
        "fixed xl:static z-10 h-[100%] xl:h-auto w-[300px] xl:w-auto left-0 top-0 bg-primary xl:block xl:bg-transparent   " +
        (showNavOnMobile
          ? "transition-transform duration-500 ease-in-out translate-x-0"
          : " -translate-x-full xl:translate-none")
      }
    >
      <div
        onClick={handleMenuToggle}
        className="absolute right-4 top-4 bg-background rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 cursor-pointer transition xl:hidden"
      >
        <p className="p-2 text-primary">X</p>
      </div>
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
