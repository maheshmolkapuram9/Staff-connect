import { useState } from "react";
import assets from "../utils/assets";
import EditImage from "../utils/table/EditImage";
import ToDoDone from "../utils/table/ToDoDone";
import ToDoTableRow from "../utils/table/ToDoTableRow";
import ConfirmationPopUp from "../utils/ConfirmationPopUp";
import AddToDoForm, { toDoStatus } from "./AddToDoForm";
import ClosingCross from "../utils/ClosingCross";

const ToDoTable = () => {
  const [showEditToDoItem, setShowEditToDoItem] = useState<boolean>(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    useState<boolean>(false);
  const [title, setTitle] = useState<string>("Update value");
  const [toDoStatus, setToDoStatus] = useState<toDoStatus>("Pending");
  return (
    <div className="overflow-x-auto scroll-smooth">
      <table className="border-separate border-spacing-0 border rounded-lg border-table-border bg-background w-full">
        <thead className="font-heading text-muted font- ">
          <ToDoTableRow
            title="Title"
            editHeading="Edit"
            toDoStatus="Status"
            deleteHeading="Delete"
          />
        </thead>
        <tbody>
          <ToDoTableRow
            title="i am doing something crazy"
            titleImageComponent={<ToDoDone done={true} />}
            editImage={
              <EditImage
                image={assets.edit}
                onClick={() => {
                  setShowEditToDoItem(true);
                  setTitle("Set title here");
                  setToDoStatus("InProgress" as toDoStatus);
                }}
              />
            }
            deleteImage={
              <EditImage
                image={assets.deleteIcon}
                onClick={() => {
                  setShowDeleteConfirmation(true);
                }}
              />
            }
            toDoStatus="Complete"
          />
          <ToDoTableRow
            title="i am doing something crazy"
            titleImageComponent={<ToDoDone done={false} />}
            editImage={<EditImage image={assets.edit} />}
            toDoStatus="Complete"
            deleteImage={<EditImage image={assets.deleteIcon} />}
          />
          <ToDoTableRow
            title="i am doing something crazy"
            titleImageComponent={<ToDoDone done={false} />}
            editImage={<EditImage image={assets.edit} />}
            toDoStatus="Complete"
            deleteImage={<EditImage image={assets.deleteIcon} />}
          />
          <ToDoTableRow
            title="i am doing something crazy"
            editImage={<EditImage image={assets.edit} />}
            titleImageComponent={<ToDoDone done={false} />}
            toDoStatus="Complete"
            deleteImage={<EditImage image={assets.deleteIcon} />}
          />
          <ToDoTableRow
            title="i am doing something crazy"
            editImage={<EditImage image={assets.edit} />}
            titleImageComponent={<ToDoDone done={false} />}
            toDoStatus="Complete"
            deleteImage={<EditImage image={assets.deleteIcon} />}
          />
        </tbody>
      </table>
      {showDeleteConfirmation && (
        <ConfirmationPopUp
          messageText="Do you want to Delete the To Do Item?"
          redirectButtonText="Delete"
          onClick={() => {
            setShowDeleteConfirmation(false);
          }}
        />
      )}
      {showEditToDoItem && (
        <div className="fixed left-0 top-0 right-0 z-30 w-ful h-full flex justify-center items-center bg-black/85">
          <div className="relative">
            <AddToDoForm
              pageHeading="Update To-Do Item"
              titleValue={title}
              toDoStatusValue={toDoStatus}
            />
            <ClosingCross
              onClick={() => {
                setShowEditToDoItem(false);
              }}
              className="bg-text-primary text-lg font-bold"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoTable;
