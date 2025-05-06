interface ClosingCrossProps {
  onClick: () => void;
  className?: string;
}

const ClosingCross = ({ onClick, className }: ClosingCrossProps) => {
  return (
    <div
      onClick={onClick}
      className={
        "absolute right-4 top-4  text-primary rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 cursor-pointer transition " +
        className
      }
    >
      <p className="p-2  font-heading hover:font-bold">X</p>
    </div>
  );
};

export default ClosingCross;
