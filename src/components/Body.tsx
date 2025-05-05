import { Outlet } from "react-router";
import Header from "./Header";

const Body = () => {
  return (
    <div className="bg-black/100 bg-fixed text-white min-h-[100dvh] font-sans">
      <Header />
      <div className="max-w-[90%] mx-auto py-6 md:py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
