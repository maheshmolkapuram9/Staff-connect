interface DropDownProps {
  label: string;
  options: { value: string; text: string }[];
  ref: React.RefObject<HTMLSelectElement | null>;
  className?: string;
}

const DropDown = ({ label, options, ref, className }: DropDownProps) => {
  return (
    <div className={"flex flex-col " + className}>
      <label htmlFor={label} className="pb-2">
        {label}
      </label>

      <div aria-live="polite">
        <select
          name={label}
          id={label}
          ref={ref}
          defaultValue=""
          className="border border-table-border px-4 py-2 pr-10 rounded leading-tight focus:outline-none focus:border-primary"
        >
          {options.map(({ value, text }) => {
            return (
              <option
                key={value}
                value={value}
                className="text-background"
                disabled={value === ""}
                hidden={value === ""}
              >
                {text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
