import { createSlug } from "../../helpers/utils";

interface FilterItemProps {
  text: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterItem = ({ text, handleInputChange }: FilterItemProps) => {
  return (
    <div className="flex items-center mb-2">
      <div className="bg-gray-100  border border-primary-light w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
        <input
          onChange={handleInputChange}
          name={createSlug(text)}
          id={createSlug(text)}
          type="checkbox"
          className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
        />
        <div className="check-icon hidden  text-white w-full h-full bg-green-800"></div>
      </div>

      <label htmlFor={createSlug(text)} className="text-base font-normal ms-2">
        {text}
      </label>
    </div>
  );
};

export default FilterItem;
