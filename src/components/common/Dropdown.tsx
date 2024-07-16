import FilterItem from "../filter/FilterItem";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface DropdownProps {
  className?: string;
  title?: string;
  data: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Dropdown = ({ className, title, data, onChange }: DropdownProps) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className={`text-black mb-4 ${className}`}>
        <div
          onClick={() => setIsListOpen(!isListOpen)}
          className="w-full p-4 shadow  bg-primary text-sm font-medium leading-none text-white flex items-center justify-between cursor-pointer"
        >
          {title}
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
                    {data &&
                      data.length > 0 &&
                      data.map((item: string, index: number) => (
                        <li key={`${item.toLowerCase().replace(/ +/g, "-")}--${Math.random() * 1000 * index}`}>
                          <FilterItem text={item} handleInputChange={(e) => onChange(e)} />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <style>
          {`.checkbox:checked + .check-icon {
                display: flex;
        }`}
        </style>
      </div>
    </div>
  );
};
export default Dropdown;
