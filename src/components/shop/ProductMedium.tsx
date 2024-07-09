import { FaRegTimesCircle } from "react-icons/fa";
import image from "../../assets/images/Order.png";
import Badge from "./Badge";

interface ProductNormalProps {}

const ProductMedium = () => {
  return (
    <div className="w-full flex pe-6 mb-8">
      <div className="min-w-36 product-normal-image relative">
        <img className="w-36 h-40 object-cover object-top" src={image} alt="title" />
        <Badge text="1" className="absolute top-0 right-0 bg-white m-2" hasClose={false} />
      </div>

      <div className="flex w-full flex-wrap justify-start lg:justify-end content-start lg:content-between ps-2">
        <div className="w-full h-max product-normal-context flex justify-between">
          <span className="text-base font-bold capitalize">Wrap top</span>

          <FaRegTimesCircle className="text-2xl" />
        </div>

        <span className="text-base font-bold mt-4 lg:mt-0">$160</span>
      </div>
    </div>
  );
};

export default ProductMedium;
