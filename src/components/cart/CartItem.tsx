import image from "../../assets/images/Order.png";
import { FaRegTimesCircle } from "react-icons/fa";
import NumberElement from "../common/NumberElement";

const CartItem = () => {
  return (
    <div className="w-full flex flex-wrap  mb-8">
      <div className="w-full flex relative">
        <div className="w-2/12">
          <img src={image} alt="title" className="w-full" />
        </div>

        <div className="cart-title  w-max md:w-4/12 h-max md:h-auto flex justify-center items-start md:items-center">
          <h3 className="ms-3 md:mt-3">Title</h3>
        </div>

        <div className="w-1/12 h-full flex items-start md:items-center justify-center absolute md:static top-0 right-0">
          <FaRegTimesCircle />
        </div>

        {/*  */}
        <div className="w-5/12 flex">
          <div className="md:w-full h-full flex items-center justify-start ps:8 md:ps-0 md:justify-center text-center w-10/12 absolute md:static right-0">
            <span className="ps-2 md:ps-0">$160.00</span>
          </div>
          <div className="w-full h-full flex items-center justify-center text-center">
            <span>
              <NumberElement className="absolute right-0 md:static" />
            </span>
          </div>
          <div className="w-full h-full  items-center justify-center text-center hidden md:flex">
            <span>$160.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
