interface TableCellProps {
  text: string;
  className?: string;
}

const TableCell = ({ text, className }: TableCellProps) => {
  return (
    <th
      className={
        "px-4 py-2 border-b border-table-border text-left font-extralight text-gray-400 " +
        className
      }
    >
      <span
        className={
          "rounded-md " +
          (text == "Active" || text == "Open" || text == "Pending"
            ? "bg-orange-400 text-black font-normal px-3 py-0.5 "
            : " ") +
          (text == "Inactive" || text == "InProgress"
            ? "bg-inactive-background text-gray-50 font-normal px-3 py-0.5 "
            : " ") +
          (text == "Resolved" || text == "Complete"
            ? "bg-resolved-background text-gray-50 font-normal px-3 py-0.5 "
            : " ")
        }
      >
        {text}
      </span>
    </th>
  );
};

export default TableCell;
