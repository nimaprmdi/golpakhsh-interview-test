import CheckoutForm from "../components/checkout/forms/CheckoutForm";
import CheckoutItem from "../components/checkout/CheckoutItems";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../hooks/useCart";

const CheckoutPage: React.FC = (): JSX.Element => {
  const { selectedItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAction = () => {
      toast.info("You dont have any items in basket please go shopping");
      navigate("/shop");
    };

    selectedItems.length === 0 && handleAction();
  }, [selectedItems, navigate]);

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="max-w-1224 w-full flex flex-wrap justify-between">
        <div className="w-full lg:w-5/12 px-3 lg:px-0 order-1 lg:order-2 top-0 right-0 lg:h-screen lg:fixed overflow-auto">
          <CheckoutItem />
        </div>

        <div className="w-full lg:w-7/12 px-3 lg:px-0 lg:ps-5 order-2 lg:order-1 mt-8 lg:mt-0">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
