import CartItem from "./CartItem";

const Content = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="card-items w-full flex flex-wrap">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className="w-full flex justify-end">
        <div className="border-t border-gray-400 pt-3" style={{ width: "500px" }}>
          <div className="sub-total flex justify-between items-center mt-3">
            <span>Subtotal (3)</span>
            <span>$485.00</span>
          </div>
          <div className="tax flex justify-between items-center mt-3">
            <span>Subtotal (3)</span>
            <span>$485.00</span>
          </div>
          <div className="shipping flex justify-between items-center mt-3">
            <span>Subtotal (3)</span>
            <span>$485.00</span>
          </div>
          <div className="Total Orders: flex justify-between items-center mt-3">
            <span>Subtotal (3)</span>
            <span>$485.00</span>
          </div>

          {/* Desc */}
          <p className="text-xs font-semibold text-black mt-8">
            The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges
            on delivery
          </p>

          <div className="w-full flex justify-end mt-4">
            <button className="btn-dark w-1/3">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
