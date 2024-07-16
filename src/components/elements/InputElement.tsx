interface InputProps {
  className?: string;
  name: string;
  placeholder?: string;
  type: string;
  errorMsg?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputElement = ({ className, name, placeholder, type = "text", errorMsg, onChange = () => {} }: InputProps) => {
  return (
    <div className={`flex flex-wrap flex-row mb-3 w-full ${className || ""}`}>
      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        className={`w-full mb-3 h-max border outline-none text-black p-2 ${
          errorMsg ? "border-red-500" : "border-gray-500"
        }`}
        placeholder={placeholder}
      />

      {/* Error Message */}
      {errorMsg ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{errorMsg}</span>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputElement;
