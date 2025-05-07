import TableCell from "./TableCell";

interface TicketsTableRow {
  className?: string;
  issueTypeTitle: string;
  descriptionTitle: string;
  statustitle: string;
  createdDateTitle: string;
}

const TicketsTableRow = ({
  className,
  issueTypeTitle,
  descriptionTitle,
  statustitle,
  createdDateTitle,
}: TicketsTableRow) => {
  return (
    <tr className={className}>
      <TableCell text={issueTypeTitle} />
      <TableCell text={descriptionTitle} />
      <TableCell text={statustitle} />
      <TableCell text={createdDateTitle} />
    </tr>
  );
};

export default TicketsTableRow;
