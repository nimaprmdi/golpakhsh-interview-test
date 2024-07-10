import { FaRegTimesCircle } from "react-icons/fa";
import { createSlug } from "../../helpers/utils";
import { deleteCategory } from "../../store/products/productsActions";

interface BadgeProps {
  text: string;
  className?: string;
  hasClose?: boolean;
}

const Badge = ({ text, className, hasClose = true }: BadgeProps) => {
  const handleClick = () => {
    deleteCategory(createSlug(text));
  };

  return (
    <div
      className={`px-4 py-1  text-black w-max h-max flex items-center gap-2 mb-2 capitalize ${
        className || "bg-primary-light"
      }`}
    >
      {text}
      {hasClose ? <FaRegTimesCircle onClick={handleClick} /> : <></>}
    </div>
  );
};

export default Badge;
