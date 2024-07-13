import { ICartItem } from "../../models/cart";
import OrderSummary from "../shop/OrderSummary";
import CartItem from "./CartItem";

interface ContentProps {
  cartItems: ICartItem[];
}

const Content = ({ cartItems }: ContentProps) => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="card-items w-full pb-8 flex flex-wrap">
        {cartItems.length > 0 ? (
          cartItems.map((item: ICartItem, index: number) => (
            <CartItem item={item} key={`${item.id}--${Math.random() * 1000 * index}`} />
          ))
        ) : (
          <div className="w-full flex justify-center pb-8">No Items In Cart</div>
        )}
      </div>

      {cartItems.length > 0 ? <OrderSummary hasButton={true} buttonLink="/checkout" /> : <></>}
    </div>
  );
};

export default Content;
