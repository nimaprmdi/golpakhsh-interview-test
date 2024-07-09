import Cards from "../components/Cards";
import Badge from "../components/shop/Badge";
import FilterSubmition from "../components/filter/FilterSubmition";
import SearchInput from "../components/common/SearchInput";
import Dropdown from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { useEffect } from "react";
import { IProduct } from "../models/products";
import { searchProduct } from "../store/products/productsActions";
import { useSearchParams } from "react-router-dom";

const ShopPage = (): JSX.Element => {
  const { categories, products, searchedProducts, searchedKey } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  const handleSerachChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const productsClone = [...products];
    const res = productsClone.filter((products: IProduct) =>
      products.title.toLowerCase().includes(event.target.value.toLocaleLowerCase())
    );

    dispatch(searchProduct(res, event.target.value) as any);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const currentParams = Object.fromEntries(searchParams.entries());

    const res = currentParams.category !== name ? [currentParams.category, name] : "";
    console.log(res);

    if (checked) {
      setSearchParams({ ...currentParams, category: res });
    } else {
      const { [name]: removed, ...rest } = currentParams;
      setSearchParams(rest);
    }
  };

  useEffect(() => {}, [categories, products]);

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-1224 w-full text-center">
        <SearchInput onChange={handleSerachChange} />

        <h6 className="text-center text-xl py-10">
          {searchedProducts && searchedKey ? searchedProducts.length : products.length} Items
        </h6>

        {/* Shop Container */}
        <section className="w-full flex flex-wrap">
          {/* The Filters */}
          <div className="w-4/12 h-full pe-2">
            <h4 className="text-left font-semibold text-3xl text-black mb-4">Filters</h4>

            {/* Badges */}
            <Badge text="Twxt" />
            <Badge text="Twxt" />

            {/* Filter Submition */}
            <FilterSubmition />

            <div className="w-full">
              <Dropdown data={categories} onChange={handleCheckboxChange} />
              {/*<Dropdown className="mt-4" />*/}
            </div>
          </div>

          {/* The Content */}
          <div className="w-8/12 h-full ps-2">
            <Cards
              title="Best Sellers"
              isLimited={false}
              catType="best-seller"
              hasHeader={false}
              className="disable-top"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ShopPage;
