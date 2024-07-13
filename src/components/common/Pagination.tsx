import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type IButtonEvent = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface PaginationProps {
  onNextPage: IButtonEvent;
  onPrevPage: IButtonEvent;
  onPageSelect: (page: number) => void;
  currentPage: number;
  pageCount: number;
}

const Pagination = ({ onNextPage, onPrevPage, onPageSelect, currentPage, pageCount }: PaginationProps) => {
  const listClass = (isCurrent: number): string =>
    `flex items-center justify-center px-3 h-8 leading-tight   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
      currentPage === isCurrent ? "bg-primary text-white" : "bg-white text-gray-500"
    }`;

  const renderPages = () => {
    const pagesArray = [];
    for (let i = 1; i <= pageCount; i++) {
      const itemClass = listClass(i);
      pagesArray.push(
        <li key={`pagination--${Math.random() * 5000 * i}`} onClick={() => onPageSelect(i)}>
          <a href="#1" className={itemClass}>
            {i}
          </a>
        </li>
      );
    }
    return pagesArray;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={onPrevPage}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-primary  border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft />
          </button>
        </li>

        {renderPages()}

        <li>
          <button
            onClick={onNextPage}
            className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-primary border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
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
