import DashboardBanner from "../components/DashboardBanner";
import QuickSummaryCard from "../components/QuickSummaryCard";
import assets from "../utils/assets";
import PrimaryButton from "../utils/PrimaryButton";

const Dashboard = () => {
  return (
    <div>
      <DashboardBanner />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-center pb-6 lg:py-24">
        <h2 className="font-heading lg:hidden">Quick Summary...</h2>
        <QuickSummaryCard
          quantity={4}
          title="Open Tickets"
          imgPath={assets.ticket}
        />
        <QuickSummaryCard
          quantity={3}
          title="Pending Tasks"
          imgPath={assets.task}
        />
        <QuickSummaryCard
          quantity={1}
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
    </div>
  );
};

export default Dashboard;
