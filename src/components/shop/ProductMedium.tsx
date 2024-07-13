import Badge from "./Badge";
import { FaRegTimesCircle } from "react-icons/fa";
import { ICartItem } from "../../models/cart";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { decrementItem, incrementItem, removeFromCart } from "../../store/cart/cartActions";
import NumberElement from "../common/NumberElement";

interface ProductNormalProps {
  item: ICartItem;
  isFull?: boolean;
}

const ProductMedium = ({ item, isFull = false }: ProductNormalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="w-full flex mb-8 ">
      <div className="min-w-36 product-normal-image relative">
        <img className="w-36 h-40 object-contain object-top" src={item.image} alt="title" />
        <Badge text={item.quantity.toString()} className="absolute top-0 right-0 bg-white m-2" hasClose={false} />
      </div>

      <div className="flex w-full flex-wrap flex-col justify-start lg:justify-between content-start lg:content-between ps-2">
        <div className="w-4/6 relative h-full flex-col  product-normal-context flex justify-between items-start">
          <span className="text-base font-bold capitalize pe-8">{item.title}</span>

          {isFull ? (
            <>
              <span>Category: {item.category}</span>

              <NumberElement
                onIncrement={() => dispatch(incrementItem(item))}
                onDecrement={() => dispatch(decrementItem(item))}
                value={item.quantity}
                className="absolute right-0 md:static"
              />
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="w-2/6 relative  h-full flex flex-col content-between items-end justify-between">
          <FaRegTimesCircle onClick={() => dispatch(removeFromCart(item))} className="text-xl" />
          <span className="text-base font-bold mt-4 lg:mt-0">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductMedium;
