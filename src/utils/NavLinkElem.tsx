import { NavLink } from "react-router";
import { NavItemProps } from "../components/Navbar";

const NavLinkElem = ({ path, name, onClick }: NavItemProps) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `px-5 py-3 ${
          isActive
            ? "text-text-primary"
            : "text-text-primary xl:text-text-muted"
        } hover:text-text-primary`
      }
    >
      <li>{name}</li>
    </NavLink>
  );
};

export default NavLinkElem;
