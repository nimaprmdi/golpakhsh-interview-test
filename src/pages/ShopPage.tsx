import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import Dropdown from "../components/Dropdown";
import Cards from "../components/Cards";
import Badge from "../components/shop/Badge";
import FilterSubmition from "../components/filter/FilterSubmition";

const ShopPage = (): JSX.Element => {
  const productsState = useSelector((state: RootState) => state.products);

  return (
    <section className="w-full flex justify-center">
      <div className="max-w-1224 w-full text-center">
        <h6 className="text-center text-xl py-10">{productsState.products.length} Items</h6>

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
              <Dropdown />
              <Dropdown className="mt-4" />
            </div>
          </div>

          {/* The Content */}
          <div className="w-8/12 h-full ps-2">
            <Cards title="Best Sellers" catType="best-seller" hasHeader={false} className="disable-top" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ShopPage;
