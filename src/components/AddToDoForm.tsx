import InputText from "../utils/inputs/InputText";
import PageHeading from "../utils/PageHeading";
import DropDown from "../utils/inputs/DropDown";
import OrangeButton from "../utils/inputs/OrangeButton";
import { useState } from "react";

export type toDoStatus = "" | "Pending" | "InProgress" | "Completed";

interface AddToDoFormProps {
  pageHeading: string;
  titleValue: string;
  toDoStatusValue: toDoStatus;
}

const AddToDoForm = ({
  pageHeading,
  titleValue = "",
  toDoStatusValue = "",
}: AddToDoFormProps) => {
  const [title, setTitle] = useState(titleValue);
  const [toDoStatus, setToDoStatus] = useState<toDoStatus>(toDoStatusValue);

  const handleSubmit = () => {
    console.log("Todoform", title, toDoStatus);
  };
  return (
    <div className="w-full md:w-[600px] lg:w-[400px] bg-background shadow-2xl mx-auto p-4 lg:p-6 rounded-lg ">
      <PageHeading title={pageHeading} />
      <form
        className="text-muted flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
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
            { value: "InProgress", text: "In progress" },
            { value: "Completed", text: "Completed" },
          ]}
          className="pb-8"
          value={toDoStatus}
          onChange={(e) => {
            setToDoStatus(e.target.value as toDoStatus);
          }}
        />
        <OrangeButton text="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default AddToDoForm;
