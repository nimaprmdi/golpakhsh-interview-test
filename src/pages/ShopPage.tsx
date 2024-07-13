import Cards from "../components/shop/Cards";
import Badge from "../components/shop/Badge";
import FilterSubmition from "../components/filter/FilterSubmition";
import SearchInput from "../components/common/SearchInputElement";
import Dropdown from "../components/common/Dropdown";
import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useSearch } from "../hooks/useSearch";
import { useFilter } from "../hooks/useFilter";

const ShopPage: React.FC = (): JSX.Element => {
  const [itemsLength, setItemsLength] = useState<number>(0);
  const { categories, products } = useProducts();

  const { searchResults, handleSearchChange } = useSearch(products);
  const { selectedCategories, handleCategoryChange, applyFilters, clearFilters, deleteCategory } =
    useFilter(searchResults);

  useEffect(() => {}, [categories, products]);

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-1224 w-full text-center">
        <SearchInput onChange={handleSearchChange} />

        <h6 className="text-center text-xl py-10">{itemsLength} Items</h6>

        {/* Shop Container */}
        <section className="w-full flex flex-wrap">
          {/* The Filters */}
          <div className="w-4/12 h-full pe-2">
            <h4 className="text-left font-semibold text-3xl text-black mb-4">Filters</h4>
            {/* Badges */}
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

            {/* Filter Submition */}
            <FilterSubmition onClearFilterClick={clearFilters} onApplyFilterClick={applyFilters} />

            <div className="w-full">
              <Dropdown title="Filter by" data={categories} onChange={handleCategoryChange} />
            </div>
          </div>

          {/* The Content */}
          <div className="w-8/12 h-full ps-2">
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
