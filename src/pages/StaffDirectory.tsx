import StaffTable from "../components/StaffTable";
import PageHeading from "../utils/PageHeading";

const StaffDirectory = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <PageHeading title="List of Staff" />
        <StaffTable />
      </div>
    </div>
  );
};

export default StaffDirectory;
