const FilterSubmition = () => {
  return (
    <section className="w-full flex justify-between my-4">
      <div className="w-1/2">
        <button className="btn-primary btn-primary--dark w-full py-2">Clear All Filters</button>
      </div>

      <div className="w-1/2">
        <button className="btn-dark w-full py-2">Applied filters</button>
      </div>
    </section>
  );
};

export default FilterSubmition;
