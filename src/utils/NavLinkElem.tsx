import { NavLink } from "react-router";
import { NavItemProps } from "../components/Navbar";

const NavLinkElem = ({ path, name, onClick }: NavItemProps) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `px-5 py-3 relative group ${
          isActive
            ? " text-text-primary "
            : "text-text-primary xl:text-text-muted"
        } hover:text-text-primary`
      }
    >
      <li>{name}</li>
      <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-text-primary transition-all duration-500 group-hover:left-0 group-hover:w-full" />
    </NavLink>
  );
};

export default NavLinkElem;
