import TicketsTable from "../components/TicketsTable";
import TableWrapper from "../utils/table/TableWrapper";

const Tickets = () => {
  return (
    <TableWrapper
      pageHeadingText="Tickets"
      tableComponent={<TicketsTable />}
      className2="w-full md:w-auto"
    />
  );
};

export default Tickets;
