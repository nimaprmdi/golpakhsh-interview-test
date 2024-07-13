import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { FaSearch, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";

interface NavbarProps {
  isPrimary?: boolean;
}

const Navbar = ({ isPrimary = true }: NavbarProps) => {
  const linkClasss = ({ isActive }: { isActive: boolean }) =>
    isActive ? "hover:text-primary rounded-md px-3 py-2" : "hover:text-primary rounded-md px-3 py-2";
  const { isLoggedIn } = useAuth();

  return (
    <nav className="bg-white">
      {isPrimary ? (
        <div className="w-full h-8 bg-primary flex justify-center">
          <span className="text-xs font-semibold text-white leading-3 flex items-center">
            Enjoy Free Shipping On All Orders
          </span>
        </div>
      ) : (
        <></>
      )}

      {/* Menu */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              {/* <span className="hidden md:block text-white text-2xl font-bold ml-2">Golpakhsh's TEST</span> */}
              <img src={logo} alt="modimal" />
            </NavLink>

            {isPrimary ? (
              <div className="md:ml-auto">
                <div className="flex space-x-2 h-full items-center">
                  <NavLink to="/shop" className={(isActive) => linkClasss(isActive)}>
                    <FaSearch className="text-black" />
                  </NavLink>
                  <NavLink to={isLoggedIn ? "/cart" : "/login"} className={(isActive) => linkClasss(isActive)}>
                    <FaUserAlt />
                  </NavLink>
                  <NavLink to="/cart" className={(isActive) => linkClasss(isActive)}>
                    <FaShoppingBag />
                  </NavLink>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
