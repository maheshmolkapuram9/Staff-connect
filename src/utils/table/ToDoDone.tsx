import assets from "../assets";

const ToDoDone = ({ done }: { done: boolean }) => {
  return (
    <div
      className={
        "w-3 h-3 md:w-5 md:h-5  rounded-full flex justify-center items-center border-2 border-muted " +
        (done && "bg-text-primary border-0")
      }
    >
      {done && <img className="w-[80%]" src={assets.correct} />}
    </div>
  );
};

export default ToDoDone;
