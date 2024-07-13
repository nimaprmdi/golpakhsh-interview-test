import { FaHeart } from "react-icons/fa";
import { IProduct } from "../../models/products";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../store/configureStore";
import { useDispatch } from "react-redux";
import { addToWishLists } from "../../store/cart/cartActions";
import { useCart } from "../../hooks/useCart";

interface CardProps {
  item: IProduct;
}

const Card = ({ item }: CardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isProductLiked, setIsProductLiked] = useState<IProduct>();
  const { wishLists } = useCart();

  const handleLike = () => {
    dispatch(addToWishLists(item));
  };

  useEffect(() => {
    const curerntItem = wishLists.find((wishListItem) => wishListItem.id === item.id);
    setIsProductLiked(curerntItem);
  }, [wishLists, item.id]);

  return (
    <div style={{ minWidth: "392px" }} className={`w-1/3 max-w-96 relative mb-16`}>
      <FaHeart
        onClick={() => handleLike()}
        className="text-gray-300 absolute top-0 right-0 mt-6 me-6 z-50"
        style={{ color: isProductLiked && Object.keys(isProductLiked).length > 0 ? "red" : "black" }}
      />

      <Link to={`/shop/${item.id}`}>
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
      </Link>
    </div>
  );
};

export default Card;
