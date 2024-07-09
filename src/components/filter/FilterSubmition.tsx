interface FilterSubmitionProps {
  onApplyFilterClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClearFilterClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const FilterSubmition = ({ onApplyFilterClick, onClearFilterClick }: FilterSubmitionProps) => {
  return (
    <section className="w-full flex justify-between my-4">
      <div className="w-1/2">
        <button onClick={(e) => onClearFilterClick(e)} className="btn-primary btn-primary--dark w-full py-2">
          Clear All Filters
        </button>
      </div>

      <div className="w-1/2">
        <button onClick={(e) => onApplyFilterClick(e)} className="btn-dark w-full py-2">
          Applied filters
        </button>
      </div>
    </section>
  );
};

export default FilterSubmition;
