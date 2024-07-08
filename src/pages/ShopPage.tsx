import Cards from "../components/Cards";
import Badge from "../components/shop/Badge";
import FilterSubmition from "../components/filter/FilterSubmition";
import Input from "../components/common/Input";
import Dropdown from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { useEffect, useState } from "react";
import { IProduct } from "../models/products";
import { searchProduct } from "../store/products/productsActions";

const ShopPage = (): JSX.Element => {
  const { categories, products } = useSelector((state: RootState) => state.products);
  const [items, setItems] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  const handleSerachChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const res = items.filter((item) => item.title.toLowerCase() === event.target.value);
    setItems(res);
    dispatch(searchProduct(event.target.value) as any);
  };

  useEffect(() => {
    products && setItems(products);
  }, [products]);

  useEffect(() => {}, [categories]);

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-1224 w-full text-center">
        <Input onChange={handleSerachChange} />

        <h6 className="text-center text-xl py-10">{products.length} Items</h6>

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
              <Dropdown data={categories} />
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
