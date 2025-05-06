import AddToDoForm from "../components/AddToDoForm";
import ToDoTable from "../components/ToDoTable";
import TableWrapper from "../utils/table/TableWrapper";

const ToDoList = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10">
      <TableWrapper
        pageHeadingText="To-Do List"
        tableComponent={<ToDoTable />}
        className="grow"
        className2="w-full"
      />
      <AddToDoForm
        pageHeading="Add a To-Do Item"
        titleValue=""
        toDoStatusValue=""
      />
    </div>
  );
};

export default ToDoList;
