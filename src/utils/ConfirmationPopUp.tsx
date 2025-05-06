import ClosingCross from "./closingCross";
import OrangeButton from "./inputs/OrangeButton";

interface ConfirmationPopUpProps {
  onClick: () => void;
  redirectButtonText: string;
  linkPath: string;
}

const ConfirmationPopUp = ({
  onClick,
  redirectButtonText,
  linkPath,
}: ConfirmationPopUpProps) => {
  return (
    <div className=" fixed rounded-xl bg-white w-[80%] md:w-[400px] h-[250px] left-1/2 top-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 ">
      <div className="flex flex-col justify-center items-center h-full  relative">
        <p className="text-primary text-lg font-heading">
          Successfully Updated
        </p>
        <OrangeButton
          text={redirectButtonText}
          linkpath={linkPath}
          className="mt-4"
        />
        <ClosingCross onClick={onClick} className="bg-primary text-white" />
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
