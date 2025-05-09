import InputText from "../utils/inputs/InputText";
import PageHeading from "../utils/PageHeading";
import DropDown from "../utils/inputs/DropDown";
import OrangeButton from "../utils/inputs/OrangeButton";
import assets from "../utils/assets";
import { toDoType } from "../store/toDoList/dataTypes";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, editToDo } from "../store/toDoList/toDoSlice";
import { useState } from "react";
import { selectUser } from "../store/user/userSlice";

export type toDoStatus = "" | "Pending" | "Completed";

interface AddToDoFormProps {
  pageHeading: string;
  titleValue: string;
  toDoStatusValue: toDoStatus;
  isUpdate?: boolean;
  toDoIdValue?: number;
  onClose?: () => void;
}

const AddToDoForm = ({
  pageHeading,
  titleValue = "",
  toDoStatusValue = "",
  isUpdate = false,
  toDoIdValue = 1,
  onClose,
}: AddToDoFormProps) => {
  const dispatch = useDispatch();
  const staffId = useSelector(selectUser).staffId;
  const [title, setTitle] = useState(titleValue);
  const [toDoStatus, setToDoStatus] = useState<toDoStatus>(toDoStatusValue);
  const [toDoId, setToDoId] = useState<number>(toDoIdValue);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!title.trim()) return setError("Title is required");
    setError("");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const toDoPayload: toDoType = {
      toDoId: toDoId,
      staffId: staffId,
      title: title,
      completed: toDoStatus === "Completed" && true,
    };
    if (isUpdate) {
      dispatch(editToDo(toDoPayload));
      if (onClose) {
        onClose();
      }
    } else {
      dispatch(addToDo(toDoPayload));
    }

    setTitle("");
    setToDoStatus("");
    setToDoId(1);
    setLoading(false);
  };
  return (
    <div className="w-full md:w-[600px] lg:w-[400px] bg-background shadow-2xl mx-auto p-4 lg:p-6 rounded-lg ">
      <PageHeading title={pageHeading} />
      <form
        className="text-muted flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <InputText
          id="title"
          type="text"
          label="Title"
          placeholder="Enter task title"
          isRequired={true}
          className="pb-8"
          value={title}
          onChangeHandler={(e) => {
            setTitle(e.target.value);
          }}
        />
        <DropDown
          label="Status (Optional)"
          options={[
            { value: "", text: "Select Status of To Do" },
            { value: "pending", text: "Pending" },
            { value: "Completed", text: "Completed" },
          ]}
          className="pb-8"
          value={toDoStatus}
          onChange={(e) => {
            setToDoStatus(e.target.value as toDoStatus);
          }}
        />
        {error && (
          <p className="transition duration-300 mb-8 py-1 px-4 rounded-md border-warning border-2 animate-bounce text-warning">
            {error}
          </p>
        )}
        <OrangeButton
          type="submit"
          className="flex justify-center"
          {...(loading
            ? {
                loadingElement: (
                  <img
                    loading="lazy"
                    className="w-7 h-7 animate-spin"
                    src={assets.loader}
                    alt="loading spinner"
                  />
                ),
                disabled: true,
              }
            : { text: "Submit" })}
        />
      </form>
    </div>
  );
};

export default AddToDoForm;
