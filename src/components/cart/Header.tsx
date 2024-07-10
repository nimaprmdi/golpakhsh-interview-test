const Header = () => {
  return (
    <div className="w-full flex justify-between border-b border-gray-500 ">
      <div className="w-7/12 flex items-center justify-start">
        <span>Order summary</span>
      </div>

      <div className="w-5/12 flex items-center justify-start">
        <span className="w-1/3 text-center hidden md:block">Price</span>
        <span className="w-1/3 text-center hidden md:block">Quantity</span>
        <span className="w-1/3 text-center hidden md:block">total</span>
      </div>
    </div>
  );
};

export default Header;
