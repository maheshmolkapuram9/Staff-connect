interface QuickSummaryCardProps {
  quantity: number;
  title: string;
  imgPath: string;
}

const QuickSummaryCard = ({
  quantity,
  title,
  imgPath,
}: QuickSummaryCardProps) => {
  return (
    <div className="bg-card rounded-2xl flex p-4 md:p-8 justify-between items-center grow 2xl:grow-0 2xl:min-w-[450px]">
      <div>
        <p className="font-heading text-4xl md:text-6xl font-semibold pb-4 md:pb-10">
          {quantity}
        </p>
        <p className="text-text-muted text-2xl  2xl:text-4xl ">{title}</p>
      </div>
      <div className="w-14 md:w-20">
        <img src={imgPath} alt="tickets image" />
      </div>
    </div>
  );
};

export default QuickSummaryCard;
