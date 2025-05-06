import { useRef, useState } from "react";
import DropDown from "../utils/inputs/DropDown";
import OrangeButton from "../utils/inputs/OrangeButton";
import TextArea from "../utils/inputs/TextArea";
import PageHeading from "../utils/PageHeading";
import InputFileElement from "../utils/inputs/InputFileElement";
import ConfirmationPopUp from "../utils/ConfirmationPopUp";

const ItRequests = () => {
  const issueTypeRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const handleSubmit = () => {
    console.log(
      "values are",
      descriptionRef.current?.value,
      issueTypeRef.current?.value,
      selectedFile,
    );
    const validation = (
      issueType: string | undefined,
      description: string | undefined,
    ) => {
      if (!issueType) {
        setError("Please select any issue type!");
      } else if (!description || (description && description.length < 10)) {
        setError("Description must be atleast 10 chars long.");
      } else {
        setError("");
        setShowConfirmation(true);
      }
    };

    validation(issueTypeRef.current?.value, descriptionRef.current?.value);
  };
  return (
    <div className="w-full lg:w-[600px] bg-background shadow-2xl mx-auto p-2 lg:p-6 rounded-lg">
      <PageHeading title="Submit IT Request" />
      <form
        className="text-muted flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <DropDown
          label="Issue Type"
          options={[
            { value: "", text: "Select the issue type" },
            { value: "Software Bug", text: "Software Bug" },
            { value: "Network Isuue", text: "Network Isuue" },
            { value: "Hardware Failure", text: "Hardware Failure" },
            { value: "other", text: "other" },
          ]}
          ref={issueTypeRef}
          className="pb-8"
        />
        <TextArea
          label="Description"
          placeholder="Enter a description"
          ref={descriptionRef}
          className="pb-8"
        />
        <InputFileElement
          label="File Attachment"
          id="issueFile"
          fileType="file"
          accept=".pdf, .doc, .docx"
          className="pb-8"
          inputclassName="hidden"
          onFileChange={(file) => setSelectedFile(file)}
        />
        {error && (
          <p className="mb-8 py-1 px-4 rounded-md border-warning border-2 animate-bounce text-warning">
            {error}
          </p>
        )}
        <OrangeButton text="Submit Request" onClick={handleSubmit} />
      </form>
      {showConfirmation && (
        <ConfirmationPopUp
          onClick={() => setShowConfirmation(false)}
          redirectButtonText="Go to Tickets"
          linkPath="/tickets"
        />
      )}
    </div>
  );
};

export default ItRequests;
