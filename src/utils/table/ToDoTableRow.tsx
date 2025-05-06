import { JSX } from "react";
import TableCell from "./TableCell";

interface ToDoTableRowProps {
  title: string;
  titleImageComponent?: JSX.Element;
  editImage?: JSX.Element;
  deleteImage?: JSX.Element;
  toDoStatus: string;
  editHeading?: string;
  className?: string;
  deleteHeading?: string;
}

const ToDoTableRow = ({
  title,
  titleImageComponent,
  editImage,
  toDoStatus,
  editHeading,
  className,
  deleteImage,
  deleteHeading,
}: ToDoTableRowProps) => {
  return (
    <tr className={className}>
      <TableCell text={title} optionalImage={titleImageComponent} />
      <TableCell text={toDoStatus} />
      <TableCell optionalImage={editImage} text={editHeading} />
      <TableCell optionalImage={deleteImage} text={deleteHeading} />
    </tr>
  );
};

export default ToDoTableRow;
