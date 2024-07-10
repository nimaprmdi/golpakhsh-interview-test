import { FaAngleLeft } from "react-icons/fa";

const Shipping = () => {
  return (
    <div className="w-full">
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
          <input type="radio" id="age1" name="age" value="30" />
          <label className="md:ms-2 text-xs md:text-base" htmlFor="age1">
            Wednesday, August 16
          </label>

          <input type="radio" id="age2" name="age" value="30" />
          <label className="md:ms-2 text-xs md:text-base" htmlFor="age2">
            Friday, August 25
          </label>

          <input type="radio" id="age3" name="age" value="30" />
          <label className="md:ms-2 text-xs md:text-base" htmlFor="age3">
            Tuesday, August 22
          </label>

          <input type="radio" id="age4" name="age" value="30" />
          <label className="md:ms-2 text-xs md:text-base" htmlFor="age4">
            Tuesday, August 22
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
              <input type="radio" id="age5" name="alt" value="30" />
              <label className="capitalize md:ps-3 text-xs md:text-base" htmlFor="age5">
                wednesday, August 11th by 8 PM
              </label>
            </div>

            <span className="font-bold">$24.00</span>
          </div>

          <br />

          <div className="flex justify-between">
            <div>
              <input type="radio" id="age6" name="alt" value="30" />
              <label className="capitalize md:ps-3 text-xs md:text-base" htmlFor="age6">
                wednesday, August 11th By Noon
              </label>
            </div>

            <span className="font-bold">$24.00</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex justify-between mt-8">
        <button className="btn-primary flex items-center text-primary">
          <FaAngleLeft className="text-primary me-2" />
          return to information
        </button>

        <button className="btn-dark">Continue To Payment</button>
      </div>
    </div>
  );
};

export default Shipping;
