import React from "react";
import Form from "../components/checkout/Form";

const CheckoutPage = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="max-w-1224 w-full flex justify-between relative">
        <div className="w-7/12">
          <Form />
        </div>
        <div className="w-5/12">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
