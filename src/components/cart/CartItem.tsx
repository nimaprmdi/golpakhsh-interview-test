import { FaRegTimesCircle } from "react-icons/fa";
import { ICartItem } from "../../models/cart";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { decrementItem, incrementItem, removeFromCart } from "../../store/cart/cartActions";
import NumberElement from "../elements/NumberElement";

interface CartItemProps {
  item: ICartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return item ? (
    <div className="w-full flex flex-wrap  mb-8">
      <div className="w-full flex flex-wrap relative ">
        <div className="w-2/12 min-w-16">
          <img src={item.image} alt={item.title} className="w-full" />
        </div>

        <div className="cart-title w-8/12 md:w-4/12 h-max md:h-auto flex flex-col justify-center items-start md:items-center">
          <h3 className="ms-3 md:mt-3">{item.title}</h3>
          <span className="ps-2 md:ps-0 md:hidden">${item.price}</span>
        </div>

        <button
          onClick={() => dispatch(removeFromCart(item))}
          className="w-1/12 h-full flex items-start md:items-center justify-center absolute md:static top-0 right-0"
        >
          <FaRegTimesCircle />
        </button>

        {/*  */}
        <div className="w-5/12 flex">
          <div className="md:w-full h-full flex items-center justify-start ps:8 md:ps-0 md:justify-center text-center w-10/12 relative md:static right-0">
            <span className="ps-2 md:ps-0 hidden">${item.price}</span>
          </div>
          <div className="w-full h-full flex items-center justify-center text-center">
            <span>
              <NumberElement
                onIncrement={() => dispatch(incrementItem(item))}
                onDecrement={() => dispatch(decrementItem(item))}
                value={item.quantity}
                className="max-w-xs mx-auto absolute right-0 md:static"
              />
            </span>
          </div>
          <div className="w-full h-full  items-center justify-center text-center hidden md:flex">
            <span>${item.price! * item.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CartItem;
