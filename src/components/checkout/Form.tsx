import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import InputElement from "../common/InputElement";

const Form = () => {
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

        <InputElement type="text" name="email" className="form-input w-full my-3" placeholder="Email" />

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
          <select className="w-full form-input mb-3" name="shipping-region">
            <option>Iran</option>
            <option>USA</option>
            <option>Germany</option>
          </select>

          {/* names */}
          <div className="w-full flex justify-between gap-6">
            <InputElement className="w-full form-input mb-3" type="text" placeholder="First Name" name="first-name" />
            <InputElement className="w-full form-input mb-3" type="text" placeholder="Last Name" name="last-name" />
          </div>

          {/* company */}
          <InputElement type="text" className="w-full mb-3 form-input" name="company" placeholder="Company" />

          {/* address */}
          <InputElement type="text" className="w-full mb-3 form-input" name="address" placeholder="address" />

          {/* apartment */}
          <InputElement type="text" className="w-full mb-3 form-input" name="apartment" placeholder="apartment" />

          <div className="flex justify-between gap-6">
            {/* postal code */}
            <InputElement type="text" className="w-full mb-3 form-input" name="postal-code" placeholder="postal code" />

            {/* city */}
            <InputElement type="text" className="w-full mb-3 form-input" name="city" placeholder="city" />
          </div>

          {/* phone */}
          <InputElement type="text" className="w-full mb-3 form-input" name="phone" placeholder="phone" />
        </div>

        {/* Save Info */}
        <div className="w-full flex items-center justify-start mt-3">
          <InputElement type="checkbox" className="w-max" name="save-info" />

          <label htmlFor="save-info" className="text-sm font-normal ms-2 ">
            save this information for next time
          </label>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex justify-between mt-8">
          <Link to="/cart" className="btn-primary flex items-center text-primary">
            <FaAngleLeft className="text-primary me-2" />
            Return to Cart
          </Link>

          <button className="btn-dark">Continue to shipping</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
