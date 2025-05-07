import assets from "../assets";

interface ToDoDoneProps {
  done: boolean;
  onClick: () => void;
}

const ToDoDone = ({ done, onClick }: ToDoDoneProps) => {
  return (
    <div
      onClick={onClick}
      className={
        "flex-none w-3 h-3 md:w-5 md:h-5  rounded-full flex justify-center items-center border-2 border-muted cursor-pointer hover:scale-110 transition duration-300 " +
        (done && "bg-text-primary border-0")
      }
    >
      {done && <img className="w-[80%]" src={assets.correct} />}
    </div>
  );
};

export default ToDoDone;
