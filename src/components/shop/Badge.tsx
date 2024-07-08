import { FaRegTimesCircle } from "react-icons/fa";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="px-4 py-1 bg-primary-light text-black w-max h-max flex items-center gap-2 mb-2">
      {text} <FaRegTimesCircle />
    </div>
  );
};

export default Badge;
