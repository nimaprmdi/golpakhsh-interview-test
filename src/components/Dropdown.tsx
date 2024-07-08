import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import FilterItem from "./filter/FilterItem";

interface DropdownProps {
  className?: string;
}

const Dropdown = ({ className }: DropdownProps) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  return (
    <div className={className || "text-black"}>
      <div
        onClick={() => setIsListOpen(!isListOpen)}
        className="w-full p-4 shadow  bg-primary text-sm font-medium leading-none text-white flex items-center justify-between cursor-pointer"
      >
        Sort by
        <div>
          {isListOpen ? (
            <div>
              <FaMinus />
            </div>
          ) : (
            <div>
              <FaPlus />
            </div>
          )}
        </div>
      </div>
      {isListOpen && (
        <div className="w-full mt-2 bg-white shadow border-primary border-2">
          <div className="w-full flex justify-between items-center p-4">
            <span className="text-base text-primary font-bold">Size</span>
            <FaMinus />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* checkbox */}
              <div className="pl-4 flex items-center">
                <ul>
                  <li>
                    <FilterItem />
                  </li>
                  <li>
                    <FilterItem />
                  </li>
                  <li>
                    <FilterItem />
                  </li>
                  <li>
                    <FilterItem />
                  </li>
                  <li>
                    <FilterItem />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>
        {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </div>
  );
};
export default Dropdown;
