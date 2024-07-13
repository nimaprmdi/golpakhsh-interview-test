import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const Breadcrumb = () => {
  const navigate = useNavigate();
  const { selectedItems } = useCart();

  return (
    <>
      {/* Top Header Part  */}
      <div className="w-full flex justify-between mb-6 items-center mt-20">
        {/* Left Side */}
        <div className="flex items-center gap-12">
          <span onClick={() => navigate(-1)} className="text-primary text-sm cursor-pointer hover:text-black">
            Back
          </span>

          <h3 className="text-3xl text-black font-normal">Your Cart</h3>
        </div>

        {/* Right Side */}

        {selectedItems.length > 0 ? (
          <Link to="/checkout" className="text-primary hidden md:block">
            Continue shopping
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Breadcrumb;
