const ShippingExpectedData = () => {
  return (
    <div className="w-full md:w-8/12 flex flex-wrap justify-start gap-x-8 gap-y-4 mt-3">
      <input type="radio" id="age1" name="age" value="30" checked />
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
  );
};

export default ShippingExpectedData;
