import Cards from "../components/shop/Cards";
import FilterSubmition from "../components/filter/FilterSubmition";
import SearchInput from "../components/common/SearchInputElement";
import Dropdown from "../components/common/Dropdown";
import FilterBadges from "../components/shop/FilterBadges";
import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useSearch } from "../hooks/useSearch";
import { useFilter } from "../hooks/useFilter";

interface IShoppageProps {
  isModal?: boolean;
}

const ShopPage: React.FC<IShoppageProps> = ({ isModal = false }: IShoppageProps): JSX.Element => {
  const [itemsLength, setItemsLength] = useState<number>(0);
  const { categories, products } = useProducts();

  const { searchResults, handleSearchChange } = useSearch(products);
  const { selectedCategories, handleCategoryChange, applyFilters, clearFilters, deleteCategory } =
    useFilter(searchResults);

  useEffect(() => {}, [categories, products]);

  return (
    <section className="w-full flex justify-center animate-fade-in">
      <div className="max-w-1224 w-full text-center">
        <SearchInput id={`search-modal-${isModal && "is-modal"}`} onChange={handleSearchChange} />

        <h6 className="text-center text-xl py-10">{itemsLength} Items</h6>

        {/* Shop Container */}
        <section className="w-full flex flex-col xl:flex-row justify-center flex-wrap">
          {/* The Filters */}
          <div className="w-full xl:w-4/12 h-full md:pe-2 px-3 md:px-0">
            <h4 className="text-left font-semibold text-3xl text-black mb-4">Filters</h4>
            <FilterBadges deleteCategory={deleteCategory} selectedCategories={selectedCategories} />
            <FilterSubmition onClearFilterClick={clearFilters} onApplyFilterClick={applyFilters} />
            <Dropdown title="Filter by" data={categories} onChange={handleCategoryChange} />
          </div>

          {/* The Content */}
          <div className="w-full xl:w-8/12 h-full ps-2">
            <Cards
              link="/items"
              title="Best Sellers"
              isLimited={false}
              catType="best-seller"
              hasHeader={false}
              hasPagination={true}
              className="disable-top"
              setItemsLength={setItemsLength}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default React.memo(ShopPage);
