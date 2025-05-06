import { useState } from "react";

interface InputElementProps {
  label: string;
  id: string;
  fileType: string;
  accept?: string;
  className?: string;
  inputclassName?: string;
  onFileChange: (file: File | null) => void;
}

const InputFileElement = ({
  label,
  id,
  fileType,
  accept,
  className,
  inputclassName,
  onFileChange,
}: InputElementProps) => {
  const [fileName, setFileName] = useState("No file chosen");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || "No file chosen");
    onFileChange(file);
  };
  return (
    <div className={"flex flex-col " + className}>
      <label htmlFor={id} className="pb-2">
        {label}
      </label>
      <div className="flex flex-wrap gap-6 items-center pt-2">
        <input
          className={inputclassName}
          type={fileType}
          id={id}
          name={id}
          accept={accept}
          onChange={handleChange}
        />
        <label
          htmlFor={id}
          className="cursor-pointer bg-black px-4 py-1 rounded-md text-text-primary shadow-2xl"
        >
          Choose File
        </label>
        {fileName == "No file chosen" && (
          <span className="text-xs pl-2 text-muted bg-background -ml-6">
            (Optional)
          </span>
        )}

        <p aria-live="polite">{fileName}</p>
      </div>
    </div>
  );
};

export default InputFileElement;
