import { Outlet } from "react-router";
import Header from "./Header";

const Body = () => {
  return (
    <div className="bg-black/100 text-white min-h-[100dvh] font-sans">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
