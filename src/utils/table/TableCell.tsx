import { JSX } from "react";

interface TableCellProps {
  text?: string;
  className?: string;
  optionalImage?: JSX.Element;
}

const getStatusClasses = (text?: string): string => {
  switch (text) {
    case "Active":
    case "Open":
    case "Pending":
      return "bg-orange-400 text-black font-normal px-3 py-0.5";
    case "InActive":
    case "InProgress":
      return "bg-inactive-background text-gray-50 font-normal px-3 py-0.5";
    case "Resolved":
    case "Complete":
    case "Closed":
      return "bg-resolved-background text-gray-50 font-normal px-3 py-0.5";
    default:
      return "";
  }
};

const TableCell = ({ text, className = "", optionalImage }: TableCellProps) => {
  return (
    <th
      className={`px-2 md:px-4 py-1 md:py-2 border-b border-table-border text-left font-extralight text-gray-400 text-xs md:text-base ${className}`}
    >
      <div className="flex items-center gap-4">
        {optionalImage && (
          <span className="flex-none w-5 h-5">{optionalImage}</span>
        )}

        <span className={`rounded-md ${getStatusClasses(text)}`}>{text}</span>
      </div>
    </th>
  );
};

export default TableCell;
