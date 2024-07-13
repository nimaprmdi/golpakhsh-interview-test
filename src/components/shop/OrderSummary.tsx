import { useCart } from "../../hooks/useCart";

interface OrderSummaryProps {
  isWide?: boolean;
  hasButton?: boolean;
}

const OrderSummary = ({ isWide, hasButton }: OrderSummaryProps) => {
  const { priceTotal, itemCounter } = useCart();
  const tax: number = 38.8;

  return (
    <div className="w-full flex justify-end">
      <div className="border-t border-gray-400 pt-3" style={{ width: isWide ? "100%" : "500px" }}>
        <div className="sub-total flex justify-between items-center mt-3">
          <span>Subtotal ({itemCounter})</span>
          <span>${priceTotal.toFixed(2)}</span>
        </div>
        <div className="tax flex justify-between items-center mt-3">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="shipping flex justify-between items-center mt-3">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="Total Orders: flex justify-between items-center mt-3">
          <span>Total Orders:</span>
          <span>${(priceTotal + tax).toFixed(3)}</span>
        </div>

        {/* Desc */}
        <p className="text-xs font-semibold text-black mt-8">
          The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on
          delivery
        </p>

        {hasButton ? (
          <div className="w-full flex justify-end mt-4">
            <button className="btn-dark w-1/3">Next</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
