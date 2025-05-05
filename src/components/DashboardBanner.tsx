import assets from "../utils/assets";

const DashboardBanner = () => {
  return (
    <div className="py-6 lg:py-10">
      <div className="relative width-full ">
        <img
          className="w-full h-full object-cover rounded-4xl aspect-video lg:aspect-auto md:h-[400px] lg:h-[500px] 2xl:h-[600px]"
          src={assets.banner}
          alt="dashbiard banner img"
        />
        <div className="absolute top-0 left-0 bg-gradient-to-r from-black/85 w-full h-full rounded-4xl">
          <div className="max-w-[70%] 2xl:max-w-[60%] flex flex-col justify-end h-full pl-4 lg:pl-10 pb-4 lg:pb-16 font-heading">
            <h1 className="text-s md:text-4xl 2xl:text-7xl font-bold pb-2 lg:pb-6 2xl:py-10">
              Welcome, <span className="text-primary">Mahesh</span>
              <span> !</span>
            </h1>
            <p className="text-xs md:text-lg 2xl:text-2xl font-thin tracking-wide text-gray-300 pb-2">
              Here's an overview of your day.
            </p>
            <p className="tracking-wide text-gray-300 text-xs md:text-lg 2xl:text-2xl font-thin">
              Stay updated with your tasks and team activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanner;
