import { selectStaff } from "../store/staff/staffSlice";
import ErrorElement from "../utils/inputs/ErrorElement";
import ShimmerTable from "../utils/shimmer/ShimmerTable";
import StaffTableRow from "../utils/table/StaffTableRow";

import { useSelector } from "react-redux";

const StaffTable = () => {
  const { data: staffDetails, loading, error } = useSelector(selectStaff);
  const isAdmin = true;

  if (error) {
    return <ErrorElement error={error} />;
  }

  return !loading ? (
    <div className="overflow-x-auto scroll-smooth">
      <table className="border-separate border-spacing-0 border rounded-lg border-table-border bg-background w-full">
        <thead className="font-heading text-muted font- ">
          <StaffTableRow
            staffTitle="Name"
            staffRole="Role"
            staffEmail="Email"
            staffStatus="Status"
            isAdmin={isAdmin}
            {...(isAdmin
              ? {
                  staffLastLogin: "Last Login",
                  staffDriveStorage: "Drive Storage",
                  staffDeviceType: "Device Type",
                }
              : {})}
          />
        </thead>
        <tbody>
          {staffDetails &&
            staffDetails.map((eachStaff) => (
              <StaffTableRow
                key={eachStaff.staffId}
                staffTitle={eachStaff.name}
                staffRole={eachStaff.role}
                staffEmail={eachStaff.email}
                staffStatus={eachStaff.status}
                isAdmin={isAdmin}
                {...(isAdmin
                  ? {
                      staffLastLogin: eachStaff.lastLogin,
                      staffDriveStorage: eachStaff.driveStorage,
                      staffDeviceType: eachStaff.deviceType,
                    }
                  : {})}
              />
            ))}
        </tbody>
      </table>
    </div>
  ) : (
    <ShimmerTable />
  );
};

export default StaffTable;
