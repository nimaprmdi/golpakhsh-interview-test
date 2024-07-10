import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface NumberProps {
  className?: string;
}

const NumberElement = ({ className }: NumberProps) => {
  const [count, setCount] = useState<number>(0);

  return (
    <form className={`max-w-xs mx-auto ${className || ""}`}>
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          id="decrement-button"
          onClick={() => setCount((prev) => (prev > 1 ? --prev : 1))}
          data-input-counter-decrement="quantity-input"
          className="bg-primary-light   hover:bg-gray-200 border border-gray-300  p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
        >
          <FaMinus />
        </button>
        <input
          type="number"
          id="quantity-input"
          data-input-counter
          aria-describedby="helper-text-explanation"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-primary-light border-x-0 border-gray-300 h-11 text-center text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
          placeholder="0"
          value={count}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCount(+e.target.value)}
          required
        />
        <button
          type="button"
          id="increment-button"
          data-input-counter-increment="quantity-input"
          onClick={() => setCount((prev) => ++prev)}
          className="bg-primary-light   hover:bg-gray-200 border border-gray-300  p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
        >
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default NumberElement;
