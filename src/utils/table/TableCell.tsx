import { JSX } from "react";

interface TableCellProps {
  text?: string;
  className?: string;
  classname2?: string;
  optionalImage?: JSX.Element;
}

const TableCell = ({
  text,
  className,

  optionalImage,
}: TableCellProps) => {
  return (
    <th
      className={
        " px-2 md:px-4 py-1 md:py-2 border-b border-table-border text-left font-extralight text-gray-400 text-xs md:text-base " +
        className
      }
    >
      <div className="flex gap-4">
        {optionalImage && optionalImage}

        <span
          className={
            "rounded-md " +
            (text == "Active" || text == "Open" || text == "Pending"
              ? "bg-orange-400 text-black font-normal px-3 py-0.5 "
              : " ") +
            (text == "InActive" || text == "InProgress"
              ? "bg-inactive-background text-gray-50 font-normal px-3 py-0.5 "
              : " ") +
            (text == "Resolved" || text == "Complete"
              ? "bg-resolved-background text-gray-50 font-normal px-3 py-0.5 "
              : " ")
          }
        >
          {text}
        </span>
      </div>
    </th>
  );
};

export default TableCell;
