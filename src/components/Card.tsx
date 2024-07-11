import { FaHeart } from "react-icons/fa";
import { IProduct } from "../models/products";
import { Link } from "react-router-dom";

interface CardProps {
  item: IProduct;
}

const Card = ({ item }: CardProps) => {
  return (
    <Link to={`/shop/${item.id}`}>
      <div style={{ minWidth: "392px" }} className={`w-1/3 max-w-96 relative mb-16`}>
        <FaHeart
          className="text-gray-300 absolute top-0 right-0 mt-6 me-6 z-50"
          style={{ stroke: "ref", strokeWidth: "5" }}
        />

        <img
          src={item.image}
          alt={item.title}
          className="w-full select-none object-contain object-center"
          style={{ height: "438px" }}
        />

        <div className="w-full flex justify-between mt-2 items-center">
          <h5 className="text-base text-black font-bold">{item.title.substring(0, 20) + "...."}</h5>
          <h5 className="text-base text-black font-bold">${item.price}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
