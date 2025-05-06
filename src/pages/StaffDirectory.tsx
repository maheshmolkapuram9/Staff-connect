import StaffTable from "../components/StaffTable";
import TableWrapper from "../utils/table/TableWrapper";

const StaffDirectory = () => {
  return (
    <TableWrapper
      pageHeadingText="List of Staff"
      tableComponent={<StaffTable />}
      className2="w-full md:w-auto"
    />
  );
};

export default StaffDirectory;
