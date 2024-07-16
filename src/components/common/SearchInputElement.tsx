import { useRef } from "react";
import Close from "../icons/Close";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { clearSearch } from "../../store/products/productsActions";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const SearchInput: React.FC<InputProps> = ({ onChange, id }: InputProps): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleCrearSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(clearSearch());
    ref.current!.value = "";
  };

  return (
    <form>
      <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id={`search-${id}`}
          onChange={onChange}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border-b-2 focus:border-black focus:outline-none border-gray-300"
          placeholder="Search"
          ref={ref}
          required
        />
        <button onClick={handleCrearSearch} type="submit" className="text-white absolute end-3 bottom-4 ">
          <Close />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
