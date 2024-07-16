import Badge from "./Badge";
import { deleteCategory } from "../../store/products/productsActions";

interface IFilterBadges {
  selectedCategories: string[];
}

const FilterBadges = ({ selectedCategories }: IFilterBadges) => {
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
