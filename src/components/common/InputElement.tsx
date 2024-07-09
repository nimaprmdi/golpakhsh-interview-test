interface InputProps {
  className?: string;
  name: string;
  placeholder?: string;
  type: string;
}

const InputElement = ({ className, name, placeholder, type = "text" }: InputProps) => {
  return (
    <input id={name} name={name} type={type} className={`${className || "w-full mb-3"}`} placeholder={placeholder} />
  );
};

export default InputElement;
