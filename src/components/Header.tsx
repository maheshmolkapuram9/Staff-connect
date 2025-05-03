import assets from "../utils/assets";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between shadow-2xl items-center bg-background px-36 py-10 font-heading">
      <div className="">
        <img src={assets.logo} alt="logo" />
        <h1 className="text-center font-heading pt-2 text-md">Staff Connect</h1>
      </div>
      <Navbar />
      <div className="relative group bg-primary rounded-full w-[60px] h-[60px] flex justify-center items-center">
        <p className="text-3xl font-bold">M</p>
        <div className="hidden group-hover:block absolute text-center -bottom-44 pt-20 pb-10 right-0">
          <div className="bg-text-primary text-background p-6 rounded-xl flex flex-col">
            <p className="text-nowrap p-2 text-xl">Mahesh Molkapuram</p>
            <button className="bg-primary p-2 text-text-primary rounded-md cursor-pointer hover:text-gray-200">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
