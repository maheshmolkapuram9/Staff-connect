import StaffTableRow from "../utils/table/StaffTableRow";

const StaffTable = () => {
  const isAdmin = true;
  return (
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
                  staffDeviceStatus: "Device Status",
                }
              : {})}
          />
        </thead>
        <tbody>
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
                  staffDeviceStatus: "Device Status",
                }
              : {})}
          />
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
                  staffDeviceStatus: "Device Status",
                }
              : {})}
          />
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
