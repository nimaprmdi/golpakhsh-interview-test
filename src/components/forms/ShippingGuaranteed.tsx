const ShippingGuaranteed = () => {
  return (
    <div className="w-full md:w-8/12 mt-2 md:mt-0">
      <div className="flex justify-between">
        <div>
          <input checked type="radio" id="age5" name="alt" value="30" />
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
  );
};

export default ShippingGuaranteed;
