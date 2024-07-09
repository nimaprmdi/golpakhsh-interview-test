import OrderSummary from "../common/shop/OrderSummary";
import CartItem from "./CartItem";

const Content = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="card-items w-full flex flex-wrap">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <OrderSummary />
    </div>
  );
};

export default Content;
