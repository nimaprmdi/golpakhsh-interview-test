import React from "react";
import CheckoutItem from "../components/checkout/CheckoutItems";
import Shipping from "../components/shipping/Shipping";

const ShippingPage: React.FC = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="max-w-1224 w-full flex flex-wrap justify-between">
        <div className="w-full lg:w-5/12 px-3 lg:px-0 order-1 lg:order-2 top-0 right-0 lg:h-screen lg:fixed overflow-auto">
          <CheckoutItem />
        </div>

        <div className="w-full lg:w-7/12 px-3 lg:px-0 lg:ps-5 order-2 lg:order-1 mt-8 lg:mt-0">
          <Shipping />
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
