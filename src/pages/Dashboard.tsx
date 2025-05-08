import { useSelector } from "react-redux";
import DashboardBanner from "../components/DashboardBanner";
import QuickSummaryCard from "../components/QuickSummaryCard";
import ToDoTable from "../components/tables/ToDoTable";
import {
  selectOpenTicketsCount,
  selectTicketUpdatesCount,
} from "../store/tickets/ticketSlice";
import assets from "../utils/assets";
import PrimaryButton from "../utils/PrimaryButton";
import TableWrapper from "../utils/table/TableWrapper";
import Tickets from "./Tickets";
import { selectPendingTasks } from "../store/toDoList/toDoSlice";

const Dashboard = () => {
  const opentickets = useSelector(selectOpenTicketsCount);
  const pendingTasks = useSelector(selectPendingTasks);
  const updates = useSelector(selectTicketUpdatesCount);
  return (
    <div>
      <DashboardBanner />
      <div className="flex lg:flex-row gap-4 lg:gap-10 justify-center pb-6 lg:py-10">
        {/* <h2 className="font-heading lg:hidden">Quick Summary...</h2> */}
        <QuickSummaryCard
          quantity={opentickets | 0}
          title="Open Tickets"
          imgPath={assets.ticket}
        />
        <QuickSummaryCard
          quantity={pendingTasks | 0}
          title="Pending Tasks"
          imgPath={assets.task}
        />
        <QuickSummaryCard
          quantity={updates | 0}
          title="Recent Updates"
          imgPath={assets.update}
        />
      </div>
      <div className="grid grid-cols-3 lg:flex gap-2 lg:gap-10 justify-center">
        <PrimaryButton linkPath="/itRequests" title="Submit IT request" />
        <PrimaryButton linkPath="/toDoList" title="Add New task" />
        <PrimaryButton
          linkPath="/staffDirectory"
          title="View Staff Directory"
        />
      </div>
      <div className="flex justify-center">
        <div className="my-10 lg:my-10 flex flex-wrap   gap-8">
          <div>
            <Tickets />
          </div>
          <div>
            <TableWrapper
              pageHeadingText="To-Do List"
              tableComponent={<ToDoTable />}
              className="grow"
              className2="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
