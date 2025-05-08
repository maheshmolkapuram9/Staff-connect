import { Link } from "react-router";

interface PrimaryButtonprops {
  linkPath: string;
  title: string;
}

const PrimaryButton = ({ linkPath, title }: PrimaryButtonprops) => {
  return (
    <Link
      to={linkPath}
      className=" bg-primary grow 2xl:grow-0 text-center py-1 md:py-2 lg:py-2 px-2 md:px-6 lg:px-10 2xl:min-w-[450px] rounded-md cursor-pointer"
    >
      <button className="text-nowrap text-[10px] md:text-xl cursor-pointer">
        {title}
      </button>
    </Link>
  );
};

export default PrimaryButton;
