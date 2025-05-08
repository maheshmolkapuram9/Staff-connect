import { useDispatch, useSelector } from "react-redux";
import { selectTickets, setUserTickets } from "../../store/tickets/ticketSlice";
import ErrorElement from "../../utils/inputs/ErrorElement";
import TicketsTableRow from "../../utils/table/TicketsTableRow";
import ShimmerTable from "../../utils/shimmer/ShimmerTable";
import { useEffect } from "react";
import { selectUser } from "../../store/user/userSlice";

const TicketsTable = () => {
  const dispatch = useDispatch();
  const {
    data: { tickets: ticketDetails, userTickets },
    loading,
    error,
  } = useSelector(selectTickets);
  const staffId = useSelector(selectUser).staffId;

  useEffect(() => {
    if (ticketDetails && staffId) {
      const filtered = ticketDetails.filter(
        (eachTicket) => eachTicket.staffId === staffId,
      );
      dispatch(setUserTickets(filtered));
    }
  }, [ticketDetails, staffId, dispatch]);

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
          {userTickets &&
            userTickets.map((eachTicket) => (
              <TicketsTableRow
                key={eachTicket.ticketId}
                issueTypeTitle={eachTicket.issue}
                descriptionTitle={eachTicket.description}
                statustitle={eachTicket.status}
                createdDateTitle={new Date(
                  eachTicket.created,
                ).toLocaleDateString()}
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
