import OrangeButton from "./OrangeButton";

interface ErrorElementProps {
  error: string;
}

const ErrorElement = ({ error }: ErrorElementProps) => {
  return (
    <div className="text-warning flex flex-col gap-4">
      <p>{error}</p>
      <p>Error in fetching staff details</p>
      <p className="text-text-primary">
        <OrangeButton text="Go back to Home" linkpath="/" />
      </p>
    </div>
  );
};

export default ErrorElement;
