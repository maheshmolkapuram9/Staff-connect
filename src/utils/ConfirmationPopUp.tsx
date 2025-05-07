import ClosingCross from "./ClosingCross";
import OrangeButton from "./inputs/OrangeButton";

interface ConfirmationPopUpProps {
  messageText: string;
  onClick: () => void;
  redirectButtonText: string;
  linkPath?: string;
  submissionHandler?: () => void;
}

const ConfirmationPopUp = ({
  messageText,
  onClick,
  redirectButtonText,
  linkPath,
  submissionHandler,
}: ConfirmationPopUpProps) => {
  return (
    <div className=" fixed rounded-xl bg-white w-[80%] md:w-[400px] h-[250px] left-1/2 top-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2  ">
      <div className="flex flex-col justify-center items-center h-full  relative p-4">
        <p className="text-primary text-lg font-heading">{messageText}</p>
        <OrangeButton
          text={redirectButtonText}
          linkpath={linkPath}
          className="mt-4"
          onClick={submissionHandler}
        />
        <ClosingCross onClick={onClick} className="bg-primary text-white" />
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
