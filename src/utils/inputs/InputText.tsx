interface InputTextProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  className?: string;
  isRequired: boolean;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({
  id,
  type,
  label,
  placeholder,
  className,
  isRequired,
  value,
  onChangeHandler,
}: InputTextProps) => {
  return (
    <div className={"flex flex-col " + className}>
      <label htmlFor={id} className="pb-2">
        {label}
      </label>
      <input
        className="border-table-border border p-4 rounded-md leading-tight focus:outline-none focus:border-primary"
        type={type}
        value={value}
        onChange={onChangeHandler}
        id={id}
        name={id}
        placeholder={placeholder}
        required={isRequired}
      ></input>
    </div>
  );
};

export default InputText;
