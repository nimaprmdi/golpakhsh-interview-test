import Cards from "../components/shop/Cards";
import Badge from "../components/shop/Badge";
import FilterSubmition from "../components/filter/FilterSubmition";
import SearchInput from "../components/common/SearchInputElement";
import Dropdown from "../components/common/Dropdown";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { IProduct } from "../models/products";
import { searchProduct, updateSearchedCategories } from "../store/products/productsActions";
import { useSearchParams } from "react-router-dom";
import { AppDispatch } from "../store/configureStore";
import { useProducts } from "../hooks/useProducts";

const ShopPage = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [itemsLength, setItemsLength] = useState<number>(0);
  const { categories, products } = useProducts();
  const dispatch = useDispatch<AppDispatch>();

  const handleSerachChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const productsClone = [...products];
    const res = productsClone.filter((products: IProduct) =>
      products.title.toLowerCase().includes(event.target.value.toLocaleLowerCase())
    );

    dispatch(searchProduct(res, event.target.value));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSelectedCategory((prevState) => {
      let newSelectedCategory;

      if (checked && !prevState.includes(name)) {
        newSelectedCategory = [...prevState, name];
      } else {
        newSelectedCategory = prevState.filter((category) => category !== name);
      }

      dispatch(updateSearchedCategories(newSelectedCategory));
      return newSelectedCategory;
    });
  };

  const handleApplyFilters = () => {
    if (selectedCategory.length === 0) {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: selectedCategory.toString() });
    }
  };

  const handleDeleteCategory = (category: string) => {
    const selectedCategoryClone = [...selectedCategory];
    let categories = selectedCategoryClone.filter((categoryItem) => categoryItem !== category);
    setSelectedCategory(() => {
      setSearchParams({ category: categories.toString() });
      dispatch(updateSearchedCategories(categories));
      return [...categories];
    });
  };

  const handleDeleteFilters = () => {
    searchParams.delete("category");
    setSearchParams(searchParams);
    setSelectedCategory(() => {
      dispatch(updateSearchedCategories([]));
      return [];
    });
  };

  useEffect(() => {}, [categories, products]);

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-1224 w-full text-center">
        <SearchInput onChange={handleSerachChange} />

        <h6 className="text-center text-xl py-10">{itemsLength} Items</h6>

        {/* Shop Container */}
        <section className="w-full flex flex-wrap">
          {/* The Filters */}
          <div className="w-4/12 h-full pe-2">
            <h4 className="text-left font-semibold text-3xl text-black mb-4">Filters</h4>
            {/* Badges */}
            <div className="badges flex flex-wrap gap-3">
              {selectedCategory && selectedCategory.length > 0 ? (
                selectedCategory.map((category: string, index: number) => (
                  <Badge
                    onClose={() => handleDeleteCategory(category)}
                    key={`${category}--${Math.random() * 65482 * index}`}
                    text={category}
                  />
                ))
              ) : (
                <></>
              )}
            </div>

            {/* Filter Submition */}
            <FilterSubmition onClearFilterClick={handleDeleteFilters} onApplyFilterClick={handleApplyFilters} />

            <div className="w-full">
              <Dropdown data={categories} onChange={handleCheckboxChange} />
              {/*<Dropdown className="mt-4" />*/}
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

export default ShopPage;
