import { useEffect, useState } from "react";
import assets from "../../utils/assets";
import EditImage from "../../utils/table/EditImage";
import ToDoDone from "../../utils/table/ToDoDone";
import ToDoTableRow from "../../utils/table/ToDoTableRow";
import ConfirmationPopUp from "../../utils/ConfirmationPopUp";
import AddToDoForm, { toDoStatus } from "../AddToDoForm";
import ClosingCross from "../../utils/ClosingCross";
import { useDispatch, useSelector } from "react-redux";
import {
  changeToDoStatus,
  deleteToDo,
  selectToDo,
  setUserToDoList,
} from "../../store/toDoList/toDoSlice";
import ShimmerTable from "../../utils/shimmer/ShimmerTable";
import ErrorElement from "../../utils/inputs/ErrorElement";
import { selectUser } from "../../store/user/userSlice";

interface deleteType {
  state: boolean;
  toDoId: number | null;
}

const ToDoTable = () => {
  const dispatch = useDispatch();
  const {
    data: { toDos: toDoList, userToDos },
    loading,
    error,
  } = useSelector(selectToDo);
  const staffId = useSelector(selectUser).staffId;
  const [showEditToDoItem, setShowEditToDoItem] = useState<boolean>(false);
  const [toDoIdValue, setToDoIdValue] = useState<number>(1);
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    useState<deleteType>({
      state: false,
      toDoId: null,
    });
  const [title, setTitle] = useState<string>("Update value");
  const [toDoStatus, setToDoStatus] = useState<toDoStatus>("Pending");

  useEffect(() => {
    if (toDoList && staffId) {
      const filtered = toDoList.filter(
        (eachToDo) => eachToDo.staffId === staffId,
      );
      dispatch(setUserToDoList(filtered));
    }
  }, [toDoList, staffId, dispatch]);

  if (error) {
    return <ErrorElement error={error} />;
  }

  return !loading ? (
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
          {userToDos &&
            userToDos.map((eachToDo) => (
              <ToDoTableRow
                key={eachToDo.toDoId}
                title={eachToDo.title}
                titleImageComponent={
                  <ToDoDone
                    done={eachToDo.completed}
                    onClick={() => dispatch(changeToDoStatus(eachToDo.toDoId))}
                  />
                }
                editImage={
                  <EditImage
                    image={assets.edit}
                    onClick={() => {
                      setToDoIdValue(eachToDo.toDoId);
                      setShowEditToDoItem(true);
                      setTitle(eachToDo.title);
                      setToDoStatus(
                        eachToDo.completed
                          ? "Completed"
                          : ("Pending" as toDoStatus),
                      );
                    }}
                  />
                }
                deleteImage={
                  <EditImage
                    image={assets.deleteIcon}
                    onClick={() => {
                      setShowDeleteConfirmation({
                        state: true,
                        toDoId: eachToDo.toDoId,
                      });
                    }}
                  />
                }
                toDoStatus={eachToDo.completed ? "Complete" : "Pending"}
              />
            ))}
        </tbody>
      </table>
      {showDeleteConfirmation.state && (
        <ConfirmationPopUp
          messageText="Do you want to Delete the To Do Item?"
          redirectButtonText="Delete"
          onClick={() => {
            setShowDeleteConfirmation({ state: false, toDoId: null });
          }}
          submissionHandler={() => {
            const toDoId = showDeleteConfirmation?.toDoId;
            if (typeof toDoId === "number") {
              dispatch(deleteToDo(toDoId));
            }
            setShowDeleteConfirmation({ state: false, toDoId: null });
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
              isUpdate={true}
              toDoIdValue={toDoIdValue}
              onClose={() => {
                setShowEditToDoItem(false);
              }}
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
  ) : (
    <ShimmerTable />
  );
};

export default ToDoTable;
