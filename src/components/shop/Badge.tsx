import { FaRegTimesCircle } from "react-icons/fa";

interface BadgeProps {
  text: string;
  className?: string;
  hasClose?: boolean;
  onClose?: React.MouseEventHandler<SVGElement>;
}

const Badge = ({ text, className, hasClose = true, onClose = () => {} }: BadgeProps) => {
  return (
    <div
      className={`px-4 py-1 border border-gray-400 text-black w-max h-max flex items-center gap-2 mb-2 capitalize ${
        className || "bg-primary-light"
      }`}
    >
      {text}
      {hasClose ? <FaRegTimesCircle onClick={onClose} /> : <></>}
    </div>
  );
};

export default Badge;
