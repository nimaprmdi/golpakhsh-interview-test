import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasss = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-2xl font-bold ml-2">Golpakhsh's TEST</span>
            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={(isActive) => linkClasss(isActive)}>
                  Home
                </NavLink>
                <NavLink to="/items" className={(isActive) => linkClasss(isActive)}>
                  Items
                </NavLink>
                <NavLink to="/add-item" className={(isActive) => linkClasss(isActive)}>
                  Add Item
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
