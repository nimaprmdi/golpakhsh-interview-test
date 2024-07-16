import CheckoutForm from "../components/forms/CheckoutForm";
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
    <div className="w-full flex justify-center mt-20 animate-fade-in relative z-50">
      <div className="max-w-1224 w-full flex flex-wrap justify-between">
        <CheckoutItem />
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
