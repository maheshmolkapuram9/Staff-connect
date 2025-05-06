interface DropDownProps {
  label: string;
  options: { value: string; text: string }[];
  className?: string;
  isRequired?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown = ({
  label,
  options,
  className,
  isRequired,
  value,
  onChange,
}: DropDownProps) => {
  return (
    <div className={"flex flex-col " + className}>
      <label htmlFor={label} className="pb-2">
        {label}
      </label>

      <div aria-live="polite">
        <select
          required={isRequired}
          name={label}
          id={label}
          value={value}
          onChange={onChange}
          className="w-full border border-table-border px-4 py-2 pr-10 rounded leading-tight focus:outline-none focus:border-primary"
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
