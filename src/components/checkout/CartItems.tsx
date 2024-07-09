import ProductMedium from "../shop/ProductMedium";
import OrderSummary from "../common/shop/OrderSummary";

const CartItems = () => {
  return (
    <div className="w-full flex flex-col lg:ps-8 lg:pe-8 pb-8 bg-primary-soft">
      <div className="cart-item-main-title w-full mt-8">
        <h3 className="text-xl font-bold text-center">Your Cart</h3>
      </div>

      {/* Body */}
      <div className="w-full flex flex-wrap mt-10">
        <ProductMedium />
        <ProductMedium />
        <ProductMedium />
        <ProductMedium />
        <ProductMedium />
        <ProductMedium />
        <ProductMedium />
        <ProductMedium />
      </div>

      <div className="w-full">
        <OrderSummary isWide={true} />
      </div>
    </div>
  );
};

export default CartItems;
