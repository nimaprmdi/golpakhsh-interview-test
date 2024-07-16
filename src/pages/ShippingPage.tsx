import React from "react";
import CheckoutItem from "../components/checkout/CheckoutItems";
import Shipping from "../components/shipping/Shipping";

const ShippingPage: React.FC = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center mt-20 animate-fade-in relative z-50">
      <div className="max-w-1224 w-full flex flex-wrap justify-between">
        <CheckoutItem />
        <Shipping />
      </div>
    </div>
  );
};

export default ShippingPage;
