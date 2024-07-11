import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store/rootReducer";

const Breadcrumb = () => {
  const navigate = useNavigate();
  const { selectedItems } = useSelector((state: RootState) => state.cart);

  return (
    <>
      {/* Top Header Part  */}
      <div className="w-full flex justify-between mb-6 items-center mt-20">
        {/* Left Side */}
        <div className="flex items-center gap-12">
          <span onClick={() => navigate(-1)} className="text-primary text-sm">
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
