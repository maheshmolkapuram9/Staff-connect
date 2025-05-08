import { useRef, useState } from "react";
import DropDown from "../utils/inputs/DropDown";
import OrangeButton from "../utils/inputs/OrangeButton";
import TextArea from "../utils/inputs/TextArea";
import PageHeading from "../utils/PageHeading";
import InputFileElement from "../utils/inputs/InputFileElement";
import ConfirmationPopUp from "../utils/ConfirmationPopUp";
import assets from "../utils/assets";
import { ticketType } from "../store/tickets/dataTypes";
import { useDispatch, useSelector } from "react-redux";
import { addTicket } from "../store/tickets/ticketSlice";
import { selectUser } from "../store/user/userSlice";

type issuetype =
  | ""
  | "Wi-Fi Connectivity"
  | "Software Bug"
  | "Network Isuue"
  | "Hardware Failure"
  | "other";

const ItRequests = () => {
  const dispatch = useDispatch();
  const { staffId, name } = useSelector(selectUser);

  const [issueType, setissueType] = useState<issuetype>("");
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = (
    issueType: string | undefined,
    description: string | undefined,
  ): boolean => {
    if (!issueType) {
      setError("Please select any issue type!");
      return false;
    }

    if (!description || description.length < 10) {
      setError("Description must be at least 10 characters long.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    const description = descriptionRef.current?.value?.trim() || "";
    const isValid = validateForm(issueType, description);

    if (!isValid) {
      setLoading(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    const itRequestPayload: ticketType = {
      staffId: staffId,
      ticketId: 100,
      user: name,
      issue: issueType,
      description: descriptionRef.current?.value
        ? descriptionRef.current?.value
        : "",
      status: "Open",
      created: new Date().toISOString(),
      fileName: selectedFile?.name ? selectedFile?.name : "",
    };
    dispatch(addTicket(itRequestPayload));
    setLoading(false);
    setShowConfirmation(true);
    setissueType("");
    if (descriptionRef.current) {
      descriptionRef.current.value = "";
    }
  };
  return (
    <div className="w-full lg:w-[600px] bg-background shadow-2xl mx-auto p-2 lg:p-6 rounded-lg">
      <PageHeading title="Submit IT Request" />
      <form
        className="text-muted flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <DropDown
          label="Issue Type"
          options={[
            { value: "", text: "Select the issue type" },
            { value: "Wi-Fi Connectivity", text: "Wi-Fi Connectivity" },
            { value: "Software Bug", text: "Software Bug" },
            { value: "Network Isuue", text: "Network Isuue" },
            { value: "Hardware Failure", text: "Hardware Failure" },
            { value: "other", text: "other" },
          ]}
          value={issueType}
          onChange={(e) => {
            setissueType(e.target.value as issuetype);
          }}
          className="pb-8"
          isRequired={true}
        />
        <TextArea
          id="Description"
          label="Description"
          placeholder="Enter a description"
          ref={descriptionRef}
          className="pb-8"
          isRequired={true}
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
        <OrangeButton
          type="submit"
          className="flex justify-center"
          {...(showConfirmation && { disabled: true })}
          {...(loading
            ? {
                loadingElement: (
                  <img
                    className="w-7 h-7 animate-spin"
                    src={assets.loader}
                    alt="loading spinner"
                  />
                ),
                disabled: true,
              }
            : { text: "Submit Request" })}
        />
      </form>
      {showConfirmation && (
        <ConfirmationPopUp
          messageText="Successfully Updated"
          onClick={() => setShowConfirmation(false)}
          redirectButtonText="Go to Tickets"
          linkPath="/tickets"
        />
      )}
    </div>
  );
};

export default ItRequests;
