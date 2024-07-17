import OrderSummary from "../shop/OrderSummary";
import { ICartItem } from "../../models/cart";
import ProductMedium from "../shop/ProductMedium";
import NumberElement from "../elements/NumberElement";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { decrementItem, incrementItem } from "../../store/cart/cartActions";

interface ContentProps {
  cartItems: ICartItem[];
}

const Content = ({ cartItems }: ContentProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="w-full pt-8">
      <div className="w-full flex flex-wrap">
        {/*  Left */}
        <div className="flex flex-wrap card-items w-7/12  pb-8">
          {cartItems.length > 0 ? (
            cartItems.map((item: ICartItem, index: number) => (
              <ProductMedium hasPrice={false} item={item} key={`${item.id}--${Math.random() * 1000 * index}`} />
            ))
          ) : (
            <div className="w-full flex justify-center pb-8">No Items In Cart</div>
          )}
        </div>

        {/*  Right */}
        <div className="w-5/12 flex flex-wrap items-start content-start">
          {cartItems.length > 0 ? (
            cartItems.map((item: ICartItem, index: number) => (
              <div
                className="w-full h-40 flex justify-between mb-8"
                key={`${item.id}-context--${Math.random() * 1000 * index}`}
              >
                <div className="w-1/3 h-full  text-center flex justify-center">${item.price}</div>
                <div className="w-1/3 h-full  text-center flex justify-center">
                  <NumberElement
                    onIncrement={() => dispatch(incrementItem(item))}
                    onDecrement={() => dispatch(decrementItem(item))}
                    value={item.quantity}
                    className="max-w-xs mx-auto absolute right-0 md:static"
                  />
                </div>
                <div className="w-1/3 h-full  text-center flex justify-center">
                  ${(item.quantity * item.price).toFixed(2)}
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        {cartItems.length > 0 ? <OrderSummary hasButton={true} buttonLink="/checkout" /> : <></>}
      </div>
    </div>
  );
};

export default Content;
