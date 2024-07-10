import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <>
      {/* Top Header Part  */}
      <div className="w-full flex justify-between mb-6 items-center mt-20">
        {/* Left Side */}
        <div className="flex items-center gap-12">
          <Link to="/" className="text-primary text-sm">
            Back
          </Link>

          <h3 className="text-3xl text-black font-normal">Your Cart</h3>
        </div>

        {/* Right Side */}
        <span className="text-primary hidden md:block">Continue shopping</span>
      </div>
    </>
  );
};

export default Breadcrumb;
