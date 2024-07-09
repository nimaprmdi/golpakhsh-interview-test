import { FaRegTimesCircle } from "react-icons/fa";

interface BadgeProps {
  text: string;
  className?: string;
  hasClose?: boolean;
}

const Badge = ({ text, className, hasClose = true }: BadgeProps) => {
  return (
    <div
      className={`px-4 py-1  text-black w-max h-max flex items-center gap-2 mb-2 capitalize ${
        className || "bg-primary-light"
      }`}
    >
      {text}
      {hasClose ? <FaRegTimesCircle /> : <></>}
    </div>
  );
};

export default Badge;
