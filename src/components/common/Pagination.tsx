import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type IButtonEvent = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface PaginationProps {
  onNextPage: IButtonEvent;
  onPrevPage: IButtonEvent;
  onPageSelect: (page: number) => void;
  currentPage: number;
}

const Pagination = ({ onNextPage, onPrevPage, onPageSelect, currentPage }: PaginationProps) => {
  const numberClass =
    "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={onPrevPage}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft />
          </button>
        </li>

        <li>
          <a href="#1" className={numberClass}>
            {currentPage}
          </a>
        </li>

        <li>
          <button
            onClick={onNextPage}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <FaAngleRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
