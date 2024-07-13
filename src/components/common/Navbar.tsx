import { NavLink, NavLinkRenderProps } from "react-router-dom";
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
          <div className="w-full flex items-center justify-between md:items-stretch md:justify-between relative">
            <NavLink
              className="lg:order-1 order-2 flex flex-shrink-0 items-center justify-center mr-4 w-5/12 lg:w-2/12"
              to="/"
            >
              <img src={logo} alt="modimal" />
            </NavLink>

            <NavLink
              to="/shop"
              className={`lg:order-2 order-1 w-3/12 max-w-28 lg:w-7/12 flex justify-center items-center text-base ${(
                isActive: NavLinkRenderProps
              ) => linkClasss(isActive)}`}
            >
              Products
            </NavLink>

            <div className="order-3 w-2/12 flex justify-end gap-8 items-center ">
              <NavLink to="/shop" className={`w-max  ${(isActive: NavLinkRenderProps) => linkClasss(isActive)}`}>
                <FaSearch className="text-black" />
              </NavLink>

              <NavLink
                className={`w-max  ${(isActive: NavLinkRenderProps) => linkClasss(isActive)}`}
                to={isLoggedIn ? "/cart" : "/login"}
              >
                <FaUserAlt />
              </NavLink>

              <NavLink
                className={`w-max absolute lg:static left-0  ${(isActive: NavLinkRenderProps) => linkClasss(isActive)}`}
                to="/cart"
              >
                <FaShoppingBag />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
