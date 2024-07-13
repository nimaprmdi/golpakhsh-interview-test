import Breadcrumb from "../components/cart/Breadcrumb";
import Header from "../components/cart/Header";
import Content from "../components/cart/Content";
import { useEffect } from "react";
import { useCart } from "../hooks/useCart";

const CartPage: React.FC = (): JSX.Element => {
  const { selectedItems } = useCart();
  useEffect(() => {}, [selectedItems]);

  return (
    <section className="w-full flex flex-wrap justify-center pb-12">
      <div className="max-w-1224 w-full flex flex-wrap justify-between px-3 xl:px-0">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Body Part */}
        <div className="w-full">
          <Header />

          <div className="w-full pt-8">
            <Content cartItems={selectedItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
