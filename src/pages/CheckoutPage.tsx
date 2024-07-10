import Form from "../components/checkout/Form";
import CartItems from "../components/checkout/CartItems";

const CheckoutPage = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="max-w-1224 w-full flex flex-wrap justify-between">
        <div className="w-full lg:w-5/12 px-3 lg:px-0 order-1 lg:order-2 top-0 right-0 lg:h-screen lg:fixed overflow-auto">
          <CartItems />
        </div>

        <div className="w-full lg:w-7/12 px-3 lg:px-0 lg:ps-5 order-2 lg:order-1 mt-8 lg:mt-0">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
