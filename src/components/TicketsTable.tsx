import { useSelector } from "react-redux";
import { selectTickets } from "../store/tickets/ticketSlice";
import ErrorElement from "../utils/inputs/ErrorElement";
import ShimmerTable from "../utils/shimmer/ShimmerTable";
import TicketsTableRow from "../utils/table/TicketsTableRow";

const TicketsTable = () => {
  const { data: ticketDetails, loading, error } = useSelector(selectTickets);

  if (error) {
    return <ErrorElement error={error} />;
  }

  return !loading ? (
    <div className="overflow-x-auto scroll-smooth">
      <table className="border-separate border-spacing-0 border rounded-lg border-table-border bg-background w-full">
        <thead className="font-heading text-muted font- ">
          <TicketsTableRow
            issueTypeTitle="Issue Type"
            descriptionTitle="Description"
            statustitle="Status"
            createdDateTitle="Created Date"
          />
        </thead>
        <tbody>
          {ticketDetails &&
            ticketDetails.map((eachTicket) => (
              <TicketsTableRow
                key={eachTicket.ticketId}
                issueTypeTitle={eachTicket.issue}
                descriptionTitle={eachTicket.description}
                statustitle={eachTicket.status}
                createdDateTitle={eachTicket.created}
              />
            ))}
        </tbody>
      </table>
    </div>
  ) : (
    <ShimmerTable />
  );
};

export default TicketsTable;
