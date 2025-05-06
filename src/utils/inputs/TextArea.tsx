interface TextAreaProps {
  label: string;
  placeholder: string;
  ref: React.RefObject<HTMLTextAreaElement | null>;
  className?: string;
}

const TextArea = ({ label, placeholder, ref, className }: TextAreaProps) => {
  return (
    <div className={"flex flex-col " + className}>
      <label htmlFor={label} className="pb-2">
        {label}
      </label>

      <textarea
        id={label}
        name={label}
        ref={ref}
        className="border-table-border border p-4 rounded-md resize-y h-32 leading-tight focus:outline-none focus:border-primary"
        placeholder={placeholder}
        aria-live="polite"
      ></textarea>
    </div>
  );
};

export default TextArea;
