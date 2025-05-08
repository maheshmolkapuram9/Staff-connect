import { Link } from "react-router";
import assets from "../utils/assets";

interface LogoProps {
  handleMenuToggle: () => void;
}

const Logo = ({ handleMenuToggle }: LogoProps) => {
  return (
    <div className="cursor-pointer flex gap-4">
      <img
        className="w-4 md:w-8 xl:hidden"
        src={assets.menu_icon}
        alt="menu-icon"
        onClick={handleMenuToggle}
      />

      <Link to="/">
        <div>
          <img
            className="max-w-[70px] md:max-w-[200px]"
            src={assets.logo}
            alt="logo"
          />
          <h1 className="text-center font-heading pt-2 text-[8px] md:text-lg">
            Staff Connect
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
