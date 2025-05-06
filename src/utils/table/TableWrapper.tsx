import { JSX } from "react";
import PageHeading from "../PageHeading";

interface TableWrapperProps {
  pageHeadingText: string;
  tableComponent: JSX.Element;
  className?: string;
  className2?: string;
}

const TableWrapper = ({
  pageHeadingText,
  tableComponent,
  className,
  className2,
}: TableWrapperProps) => {
  return (
    <div className={"flex flex-col items-center " + className}>
      <div className={className2}>
        <PageHeading title={pageHeadingText} />
        {tableComponent}
      </div>
    </div>
  );
};

export default TableWrapper;
