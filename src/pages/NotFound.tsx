import OrangeButton from "../utils/inputs/OrangeButton";
import assets from "../utils/assets";

const NotFound = () => {
  return (
    <div className="w-full h-[100dvh] bg-background flex flex-col items-center text-primary bg-fixed overflow-auto ">
      <h1 className=" p-10 text-2xl font-bold">Oops! Something went wrong!</h1>
      <p>
        Go back to the <OrangeButton linkpath="/" text="Home page" />
      </p>
      <p className="w-[70%] md:w-[400px] p-10">
        <img src={assets.wentWrong} alt="Something went wrong img" />
      </p>
    </div>
  );
};

export default NotFound;
