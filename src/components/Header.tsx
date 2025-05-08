import Navbar from "./Navbar";
import { useState } from "react";
import UserInfo from "./UserInfo";
import Logo from "./Logo";

const Header = () => {
  const [showNavOnMobile, setShowNavOnMobile] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setShowNavOnMobile(!showNavOnMobile);
  };

  return (
    <header className="relative flex justify-between shadow-2xl items-center bg-background px-4 md:px-10 2xl:px-36 py-4 2xl:py-6 font-heading">
      <Logo handleMenuToggle={handleMenuToggle} />

      <Navbar
        showNavOnMobile={showNavOnMobile}
        handleMenuToggle={handleMenuToggle}
        className="hidden xl:block translate-x-0"
      />
      <Navbar
        showNavOnMobile={showNavOnMobile}
        handleMenuToggle={handleMenuToggle}
        className="block xl:hidden"
      />

      <UserInfo />
    </header>
  );
};

export default Header;
