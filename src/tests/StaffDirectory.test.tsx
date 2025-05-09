import { describe, expect, it } from "vitest";
import { render, screen, within } from "./test-utils";
import PageHeading from "../utils/PageHeading";
import TableCell from "../utils/table/TableCell";
import StaffTableRow from "../utils/table/StaffTableRow";

describe("Dashboard test cases", () => {
  it("should show app name, Staff Connect", () => {
    render(<PageHeading title="List of Staff" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should show table cell value", () => {
    render(<TableCell text="table cell" />);
    const text = screen.getByText("table cell");
    expect(text).toBeInTheDocument();
  });

  it("should show 1 table row and should find a table cell", () => {
    render(
      <StaffTableRow
        staffTitle="title"
        staffRole=""
        staffEmail=""
        staffStatus=""
        isAdmin={true}
      />,
    );
    const rows = screen.getAllByRole("row");
    const row = screen.getAllByRole("row")[0];
    expect(rows).toHaveLength(1);
    const cells = within(row).getAllByRole("columnheader");
    expect(cells[0]).toBeInTheDocument();
  });
});

// it("",()=>{render(</>)})
