import { FaHeart } from "react-icons/fa";
import { IProduct } from "../models/products";

interface CardProps {
  item: IProduct;
}

const Card = ({ item }: CardProps) => {
  return (
    <div style={{ minWidth: "392px" }} className={`w-1/3 max-w-96 relative`}>
      <FaHeart
        className="text-gray-300 absolute top-0 right-0 mt-6 me-6 z-50"
        style={{ stroke: "ref", strokeWidth: "5" }}
      />

      <img
        src={item.image}
        alt={item.title}
        className="w-full select-none object-cover object-top"
        style={{ height: "438px" }}
      />

      <div className="w-100 flex justify-between mt-2 items-center">
        <h5 className="text-base text-black font-bold">{item.title.substr(0, 20) + "...."}</h5>
        <h5 className="text-base text-black font-bold">${item.price}</h5>
      </div>
    </div>
  );
};

export default Card;
