import { JSX } from "react";
import { Link } from "react-router";

interface OrangeButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  linkpath?: string;
  loadingElement?: JSX.Element;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const OrangeButton = ({
  text,
  onClick,
  className = "",
  linkpath,
  loadingElement,
  disabled,
  type = "button",
}: OrangeButtonProps) => {
  const button = (
    <button
      className={`bg-primary text-center py-1 px-4 rounded-md text-text-primary text-lg cursor-pointer hover:scale-102 transition duration-300 ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {loadingElement}
      {text}
    </button>
  );

  return linkpath ? <Link to={linkpath}>{button}</Link> : button;
};

export default OrangeButton;
