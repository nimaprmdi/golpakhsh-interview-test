import React from "react";
import { FaPlus } from "react-icons/fa";

const FilterItem = () => {
  return (
    <div className="flex items-center mb-2">
      <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
        <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
          <FaPlus />
        </div>
      </div>

      <p className="text-base font-normal ms-2">Facebook</p>
    </div>
  );
};

export default FilterItem;
