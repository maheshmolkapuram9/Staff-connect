interface TextAreaProps {
  id: string;
  label: string;
  placeholder: string;
  ref: React.RefObject<HTMLTextAreaElement | null>;
  className?: string;
  isRequired?: boolean;
}

const TextArea = ({
  id,
  label,
  placeholder,
  ref,
  className,
  isRequired,
}: TextAreaProps) => {
  return (
    <div className={"flex flex-col " + className}>
      <label htmlFor={id} className="pb-2">
        {label}
      </label>

      <textarea
        required={isRequired}
        id={id}
        name={id}
        ref={ref}
        className="border-table-border border p-4 rounded-md resize-y h-32 leading-tight focus:outline-none focus:border-primary"
        placeholder={placeholder}
        aria-live="polite"
      ></textarea>
    </div>
  );
};

export default TextArea;
