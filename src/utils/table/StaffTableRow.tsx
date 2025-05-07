import TableCell from "./TableCell";

interface StaffTableRowProps {
  staffTitle: string;
  staffRole: string;
  staffEmail: string;
  staffStatus: string;
  staffLastLogin?: string;
  staffDriveStorage?: string;
  staffDeviceStatus?: string;
  className?: string;
  isAdmin: boolean;
}

const StaffTableRow = ({
  staffTitle,
  staffRole,
  staffEmail,
  staffStatus,
  staffLastLogin,
  staffDriveStorage,
  staffDeviceStatus,
  className,
  isAdmin,
}: StaffTableRowProps) => {
  return (
    <tr className={className}>
      <TableCell text={staffTitle} />
      <TableCell text={staffRole} />
      <TableCell text={staffEmail} />
      <TableCell text={staffStatus} />
      {isAdmin && (
        <>
          <TableCell text={staffLastLogin} />
          <TableCell text={staffDriveStorage} />
          <TableCell text={staffDeviceStatus} />
        </>
      )}
    </tr>
  );
};

export default StaffTableRow;
