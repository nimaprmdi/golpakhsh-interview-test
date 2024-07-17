import Badge from "./Badge";

interface IFilterBadges {
  selectedCategories: string[];
  deleteCategory: (category: string) => void;
}

const FilterBadges = ({ selectedCategories, deleteCategory }: IFilterBadges) => {
  return (
    <div className="badges flex flex-wrap gap-3">
      {selectedCategories && selectedCategories.length > 0 ? (
        selectedCategories.map((category: string, index: number) => (
          <Badge
            onClose={() => deleteCategory(category)}
            key={`${category}--${Math.random() * 65482 * index}`}
            text={category}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilterBadges;
