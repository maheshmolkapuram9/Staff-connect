const ShimmerTableRow = () => {
  return (
    <div className="flex p-2 md:p-2 gap-1 md:gap-2 border-b-1 border-border lg:w-[600px] xl:w-[700px] 2xl:max-w-[1000px] rounded-md ">
      <p className="bg-text-muted/15 w-[150px] h-6 md:h-8 animate-pulse rounded-sm"></p>
      <p className="bg-text-muted/15 w-[150px] h-6 md:h-8 animate-pulse rounded-md"></p>
      <p className="bg-text-muted/15 w-[200px] h-6 md:h-8 animate-pulse rounded-md"></p>
      <p className="bg-text-muted/15 w-[250px] h-6 md:h-8 animate-pulse rounded-md"></p>
      <p className="bg-text-muted/15 w-[200px] h-6 md:h-8 animate-pulse rounded-md"></p>
    </div>
  );
};

const ShimmerTable = () => {
  return (
    <div className="bg-background rounded-md border-border border">
      <ShimmerTableRow />
      <ShimmerTableRow />
      <ShimmerTableRow />
      <ShimmerTableRow />
      <ShimmerTableRow />
      <ShimmerTableRow />
    </div>
  );
};

export default ShimmerTable;
