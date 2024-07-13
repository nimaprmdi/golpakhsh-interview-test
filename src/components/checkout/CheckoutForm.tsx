import InputElement from "../common/InputElement";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import { Errors } from "../../models/error";
import { validate, validateProperty } from "../../helpers/validation/validate";
import { schema } from "../../helpers/validation/schemas";
import { deepClone, validateInputChange } from "../../helpers/utils";
import { Checkout } from "../../models/forms";
import { toast } from "react-toastify";
import { cloneDeep } from "lodash";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const [data, setData] = useState<Checkout>({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    company: "",
    email: "",
    postalCode: "",
    region: "iran",
    saveInfo: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueInput = validateInputChange(e, schema, setErrors, errors);
    setData({ ...deepClone(data), [e.target.name]: valueInput });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const errorMsg = validate(data, schema);

    const handleError = () => {
      toast.error("Please check your inputs");
      setErrors({ ...errors, ...errorMsg });
    };

    !errorMsg ? navigate("/shipping") : handleError();
  };

  return (
    <div className="w-full flex flex-wrap mb-12">
      {/* Contact Us */}
      <div className="w-full flex justify-between flex-wrap mb-8">
        <h4 className="text-lg font-normal">Contact</h4>

        <Link to="/login" className="text-sm font-normal">
          <div className="flex items-center gap-2">
            have an account?
            <span className="capitalize text-primary text-sm font-normal">Log in</span>
          </div>
        </Link>

        <InputElement
          onChange={(e) => handleInputChange(e)}
          className="w-full "
          type="text"
          placeholder="Email"
          name="email"
          value={data.email}
          errorMsg={errors.email || ""}
        />

        {/* email check box */}
        <div className="w-full flex items-center justify-start">
          <input type="checkbox" name="email-me" id="email-me"></input>
          <label className="ms-2" htmlFor="email-me">
            Email me with news and offers
          </label>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="w-full flex justify-between flex-wrap">
        {/* Inputs */}
        <div className="w-full">
          {/* region */}
          <select
            className="w-full form-input mb-4"
            name="region"
            value={data.region}
            onChange={(e) => setData({ ...cloneDeep(data), [e.target.name]: e.target.value })}
          >
            <option value="iran">Iran</option>
            <option value="usa">USA</option>
            <option value="germany">Germany</option>
          </select>

          {/* names */}
          <div className="w-full flex justify-between gap-6">
            <InputElement
              onChange={(e) => handleInputChange(e)}
              value={data.firstName}
              className="w-full "
              type="text"
              placeholder="First Name"
              name="firstName"
              errorMsg={errors.firstName || ""}
            />
            <InputElement
              onChange={(e) => handleInputChange(e)}
              value={data.lastName}
              className="w-full "
              type="text"
              placeholder="Last Name"
              name="lastName"
              errorMsg={errors.lastName || ""}
            />
          </div>

          {/* company */}
          <InputElement
            errorMsg={errors.company || ""}
            value={data.company}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="w-full mb-3 "
            name="company"
            placeholder="Company"
          />

          {/* address */}
          <InputElement
            errorMsg={errors.address || ""}
            value={data.address}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="w-full mb-3 "
            name="address"
            placeholder="address"
          />

          {/* apartment */}
          <InputElement
            errorMsg={errors.apartment || ""}
            onChange={(e) => handleInputChange(e)}
            value={data.apartment}
            type="text"
            className="w-full mb-3 "
            name="apartment"
            placeholder="apartment"
          />

          <div className="flex justify-between gap-6">
            {/* postal code */}
            <InputElement
              errorMsg={errors.postalCode || ""}
              value={data.postalCode}
              onChange={(e) => handleInputChange(e)}
              type="text"
              className="w-full mb-3 "
              name="postalCode"
              placeholder="postal code"
            />

            {/* city */}
            <InputElement
              errorMsg={errors.city || ""}
              value={data.city}
              onChange={(e) => handleInputChange(e)}
              type="text"
              className="w-full mb-3 "
              name="city"
              placeholder="city"
            />
          </div>

          {/* phone */}
          <InputElement
            errorMsg={errors.phone || ""}
            value={data.phone}
            onChange={(e) => handleInputChange(e)}
            type="text"
            className="w-full mb-3 "
            name="phone"
            placeholder="phone"
          />
        </div>

        {/* Save Info */}
        <div className="w-full flex items-center justify-start mt-3">
          <InputElement onChange={(e) => handleInputChange(e)} type="checkbox" className="w-max mb-0" name="saveInfo" />

          <label htmlFor="save-info" className="text-sm font-normal ms-2 mb-6 ">
            save this information for next time
          </label>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex justify-between mt-8">
          <Link to="/cart" className="btn-primary flex items-center text-primary">
            <FaAngleLeft className="text-primary me-2" />
            Return to Cart
          </Link>

          <button
            onClick={handleSubmit}
            className={`btn-dark ${Object.keys(errors).length === 0 ? "cursor-pointer" : "cursor-not-allowed"}`}
            disabled={Object.keys(errors).length !== 0}
          >
            Continue to shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
