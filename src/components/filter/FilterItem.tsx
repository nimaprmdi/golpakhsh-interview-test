import { createSlug } from "../../helpers/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { useSearchParams } from "react-router-dom";

interface FilterItemProps {
  text: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterItem = ({ text, handleInputChange }: FilterItemProps) => {
  const { searchedCategories } = useSelector((state: RootState) => state.products);
  const foundResult = searchedCategories.findIndex((item) => item === createSlug(text));

  return (
    <div className="flex items-center mb-2">
      <div className="bg-gray-100  border border-primary-light w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
        <input
          onChange={handleInputChange}
          name={createSlug(text)}
          id={createSlug(text)}
          checked={foundResult !== -1}
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
