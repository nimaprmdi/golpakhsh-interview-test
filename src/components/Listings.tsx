import { useState } from "react";
import { FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";

const Listings = ({ item }: { item: any }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  let description = item.description;
  if (!showFullDesc) {
    description = description.substr(0, 90) + "....";
  } else {
    description = item.description;
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="rounded-lg w-100 flex justify-center mb-4  py-4 border border-slate-400">
            <img className="w-1/2 h-56 object-contain" src={item.image} alt={item.title} />
          </div>

          <h3 className="text-xl font-bold">{item.title}</h3>
          <div className="text-gray-600 my-2">{item.category}</div>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowFullDesc((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDesc ? "Show Less" : "Show More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{item.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-blue-700 mb-3">
            <FaTags className="inline text-lg mb-1 mr-1" />${item.price}
          </div>
          <Link
            to={`/items/${item.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Listings;
