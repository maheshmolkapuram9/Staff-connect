import TableCell from "../table/TableCell";

interface TableRowProps {
  columnsList: { text: string; className?: string }[];
}

const TableRow = ({ columnsList }: TableRowProps) => {
  return (
    <tr>
      {columnsList.map((cell) => (
        <TableCell
          key={cell.text}
          text={cell.text}
          className={cell.className}
        />
      ))}
    </tr>
  );
};

export default TableRow;
