import { NavLink } from "react-router";
import { NavItemProps } from "../components/Navbar";
const NavLinkElem = ({ path, name }: NavItemProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `px-5 py-3 ${
          isActive ? "text-text-primary" : "text-text-muted"
        } hover:text-text-primary`
      }
    >
      <li>{name}</li>
    </NavLink>
  );
};

export default NavLinkElem;
