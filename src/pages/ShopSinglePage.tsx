import { FaHeart, FaTruckMoving } from "react-icons/fa";
import image from "../assets/images/Order.png";
import Badge from "../components/shop/Badge";

const ShopSinglePage = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center pb-32 mt-16 lg:mt-32">
      <div className="max-w-1224 w-full flex flex-wrap justify-between">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 lg:pe-3">
          <img src={image} alt="title" className="w-full" />
        </div>

        {/* Product Actions */}
        <div className="w-full lg:w-1/2 px-5 lg:px-0 mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold capitalize">wrap top</h2>
          <p className="mt-8">
            Versatile and universally flattering, our wrap blouse can be tied, draped, snapped and wrapped multiple
            ways.
          </p>

          {/* Product meta */}
          <h6 className="text-base font-normal mt-6">Price</h6>
          <h6 className="text-lg font-normal">$160.00</h6>

          <button className="btn-dark capitalize w-full mt-6">Add To Cart </button>

          {/* Helpers */}
          <div className="product-helpers flex justify-between items-center mt-6">
            <div className="flex items-center">
              <FaTruckMoving className="me-2" />
              Easy Return
            </div>

            <div className="flex items-center">
              <FaHeart className="me-2" />
              Add to wish list
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="w-full lg:w-1/2 px-5 lg:px-0 lg:pe-3">
          {/* Post Meta */}
          <div className="bg-gray-200 border border-gray-300 mt-8 px-4 py-3">
            <div className="title border-b border-gray-700 w-full pt-4 px-4">
              <h3 className="pb-3">Silk</h3>
            </div>

            <p className="mt-6 text-lg leading-8 font-normal">
              This material is our signature high-stretch fabric that drapes like silk and is soft to the touch. Silk is
              OEKO-TEX® certified and made in Italy in a mill 100% powered by renewable energy (solar and biomass)
            </p>

            <div className="w-full flex justify-start gap-3 mt-6">
              <Badge hasClose={false} text="hello" className="bg-gray-300" />
              <Badge hasClose={false} text="hello" className="bg-gray-300" />
              <Badge hasClose={false} text="hello" className="bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSinglePage;
