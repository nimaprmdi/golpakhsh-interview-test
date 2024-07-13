import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IShipping } from "../../models/forms";
import { IErrors } from "../../models/error";
import { shippingSchema } from "../../helpers/validation/schemas";
import { validate, validateProperty } from "../../helpers/validation/validate";
import { deepClone } from "../../helpers/utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { resetCart } from "../../store/cart/cartActions";
import { useCart } from "../../hooks/useCart";

const Shipping = () => {
  const [errors, setErrors] = useState<IErrors>({});
  const dispatch = useDispatch<AppDispatch>();
  const { selectedItems } = useCart();
  const navigate = useNavigate();
  const [data, setData] = useState<IShipping>({
    expectedDate: "",
    guaranteed: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const errorMsg = validateProperty(event.target, shippingSchema);

    if (errorMsg) {
      setErrors({ ...errors, [event.target.name]: errorMsg });
    } else {
      setErrors((prevState) => {
        const errorsClone = { ...deepClone(prevState) };
        delete errorsClone[event.target.name];
        return { ...errorsClone };
      });
    }

    setData(() => {
      const res = { ...cloneDeep(data), [event.target.name]: event.target.value };
      return res;
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const errorMsg = validate(data, shippingSchema);

    const handleError = () => {
      toast.error("Please select radio options");
      setErrors({ ...errors, ...errorMsg });
    };

    const handleSuccess = () => {
      dispatch(resetCart());
      navigate("/payment-successful");
    };

    !errorMsg ? handleSuccess() : handleError();
  };

  useEffect(() => {
    const handleAction = () => {
      toast.info("You dont have any items in basket please go shopping");
      navigate("/shop");
    };

    selectedItems.length === 0 && handleAction();
  }, [selectedItems, navigate]);

  return (
    <div className="w-full pb-8">
      {/* Contact  */}
      <div className="w-full flex justify-between border-b border-gray-200 pb-5">
        <span className="text-lg font-normal">Contact</span>
        <button className="btn-primary">Change</button>
      </div>

      <h4 className="font-bold text-xl capitalize border-b pb-4 mt-4 mb-6 border-gray-200">Delivery Options</h4>

      {/* Shipping Type */}
      <div className="w-full flex justify-between mt-8">
        <h5 className="text-gray-500 font-bold">Express Courier (Air)</h5>
        <span className="text-base font-bold ">Free</span>
      </div>

      <span className="text-sm font-semibold mt-2">3 to 4 Business Days</span>

      <div className="w-full flex flex-wrap justify-between mt-8 border-b border-gray-200 pb-10">
        {/* title */}
        <div className="w-full md:w-4/12">
          <span className="text-base font-bold">Expected Date:</span>
        </div>

        {/* inputs */}
        <div className="w-full md:w-8/12 flex flex-wrap justify-start gap-x-8 gap-y-4 mt-3">
          <input
            type="radio"
            onChange={handleChange}
            id="expected_date_1"
            name="expectedDate"
            value="Monday, August 14"
          />
          <label className="md:ms-2 text-xs md:text-base" htmlFor="expected_date_1">
            Monday, August 14
          </label>

          <input
            type="radio"
            onChange={handleChange}
            id="expected_date_2"
            name="expectedDate"
            value="Wednesday, August 16"
          />
          <label className="md:ms-2 text-xs md:text-base" htmlFor="expected_date_2">
            Wednesday, August 16
          </label>

          <input
            type="radio"
            onChange={handleChange}
            id="expected_date_3"
            name="expectedDate"
            value="Tuesday, August 22"
          />
          <label className="md:ms-2 text-xs md:text-base" htmlFor="expected_date_3">
            Tuesday, August 22
          </label>

          <input
            type="radio"
            onChange={handleChange}
            id="expected_date_4"
            name="expectedDate"
            value="Friday, August 25"
          />
          <label className="md:ms-2 text-xs md:text-base" htmlFor="expected_date_4">
            Friday, August 25
          </label>
        </div>
      </div>

      {/* Guaranteed */}
      <div className="w-full flex flex-wrap justify-between border-b border-gray-200 py-10">
        {/* title */}
        <div className="w-full md:w-4/12">
          <span className="text-base font-bold">Guaranteed by: </span>
          <br />
          <span className="text-base font-light">UPS Next Day Air Saver</span>
        </div>

        {/* inputs */}
        <div className="w-full md:w-8/12 mt-2 md:mt-0">
          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                onChange={handleChange}
                id="guaranteed_1"
                name="guaranteed"
                value="wednesday, August 11th by 8 PM"
              />
              <label className="capitalize md:ps-3 text-xs md:text-base" htmlFor="guaranteed_1">
                wednesday, August 11th by 8 PM
              </label>
            </div>

            <span className="font-bold">$24.00</span>
          </div>

          <br />

          <div className="flex justify-between">
            <div>
              <input
                type="radio"
                onChange={handleChange}
                id="guaranteed_2"
                name="guaranteed"
                value="wednesday, August 11th By Noon"
              />
              <label className="capitalize md:ps-3 text-xs md:text-base" htmlFor="guaranteed_2">
                wednesday, August 11th By Noon
              </label>
            </div>

            <span className="font-bold">$24.00</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex justify-between mt-8">
        <button onClick={() => navigate(-1)} className="btn-primary flex items-center text-primary">
          <FaAngleLeft className="text-primary me-2" />
          return to information
        </button>

        <button onClick={handleSubmit} className="btn-dark">
          Continue To Payment
        </button>
      </div>
    </div>
  );
};

export default Shipping;
