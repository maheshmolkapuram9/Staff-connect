import TableRow from "../utils/table/TableRow";

const StaffTable = () => {
  const columnsListHeadings = [
    { text: "Caroline Williams", className: "" },
    { text: "Software Developer", className: "" },
    { text: "carolinewilliams123@gmail.com", className: "" },
    { text: "Active", className: "" },
  ];
  const columnsListHeadings1 = [
    { text: "Mahesh", className: "" },
    { text: "Front end developer", className: "" },
    { text: "maheshmolkapuram@gmail.com", className: "" },
    { text: "Inactive", className: "" },
  ];
  const columnsListHeadings2 = [
    { text: "Name", className: "" },
    { text: "Role", className: "" },
    { text: "Email", className: "" },
    { text: "InProgress", className: "" },
  ];
  const columnsListHeadings3 = [
    { text: "Name", className: "" },
    { text: "Role", className: "" },
    { text: "Email", className: "" },
    { text: "Open", className: "" },
  ];
  const columnsListHeadings4 = [
    { text: "Name", className: "" },
    { text: "Role", className: "" },
    { text: "Email", className: "" },
    { text: "Complete", className: "" },
  ];
  return (
    <div className="overflow-x-auto scroll-smooth">
      <table className="border-separate border-spacing-0 border rounded-lg border-table-border bg-background w-full">
        <thead className="font-heading text-muted font- ">
          <TableRow columnsList={columnsListHeadings4} />
        </thead>
        <tbody>
          <TableRow columnsList={columnsListHeadings1} />
          <TableRow columnsList={columnsListHeadings2} />
          <TableRow columnsList={columnsListHeadings3} />
          <TableRow columnsList={columnsListHeadings} />
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
