import ProductMedium from "../shop/ProductMedium";
import OrderSummary from "../shop/OrderSummary";
import { ICartItem } from "../../models/cart";
import { useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const CheckoutItem = (): JSX.Element => {
  const { selectedItems } = useCart();
  const location = useLocation();

  return (
    <div className="w-full flex flex-col lg:ps-8 lg:pe-8 pb-8 bg-primary-soft">
      <div className="cart-item-main-title w-full mt-8">
        <h3 className="text-xl font-bold text-center">Your Cart</h3>
      </div>

      {/* Body */}
      <div className="w-full flex flex-wrap mt-10">
        {selectedItems && selectedItems.length > 0 ? (
          selectedItems.map((item: ICartItem, index: number) => (
            <ProductMedium
              isFull={location.pathname === "/shipping"}
              item={item}
              key={`${item.id}--${Math.random() * 1000 * index}}`}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      <div className="w-full">
        <OrderSummary isWide={true} />
      </div>
    </div>
  );
};

export default CheckoutItem;
