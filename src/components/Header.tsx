import { Link } from "react-router";
import assets from "../utils/assets";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [showNavOnMobile, setShowNavOnMobile] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setShowNavOnMobile(!showNavOnMobile);
  };
  return (
    <header className="relative flex justify-between shadow-2xl items-center bg-background px-4 md:px-10 2xl:px-36 py-4 2xl:py-6 font-heading">
      <Link to="/">
        <div className="cursor-pointer flex gap-4">
          <img
            className="w-4 md:w-8 xl:hidden"
            src={assets.menu_icon}
            alt="menu-icon"
            onClick={handleMenuToggle}
          />
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
        </div>
      </Link>
      <Navbar
        showNavOnMobile={showNavOnMobile}
        handleMenuToggle={handleMenuToggle}
      />
      <div className="relative group bg-primary rounded-full w-[30px] h-[30px] md:w-[45px] md:h-[45px] flex justify-center items-center cursor-pointer">
        <p className="md:text-3xl font-bold">M</p>
        <div className="hidden z-10 group-hover:block absolute text-center top-[calc(100%-75px)] pt-20 pb-10 right-0">
          <div className="bg-text-primary text-background p-2 md:p-6 rounded-xl flex flex-col">
            <p className="text-nowrap pb-2 text-[8px] md:text-xl ">
              Mahesh Molkapuram
            </p>
            <button className="bg-primary p-1 md:p-2 text-text-primary text-xs font-normal rounded-md cursor-pointer hover:text-gray-200">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
