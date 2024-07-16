import logo from "../../../assets/images/Logo.svg";
import { NavLink, NavLinkRenderProps, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../../../hooks/useAuth";
import { toggleModal } from "../../../store/modal/modalActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/configureStore";
import { useModal } from "../../../hooks/useModal";
import { handleLogout } from "../../../store/auth/authActions";

const NavLinks = () => {
  const linkClasss = ({ isActive }: { isActive: boolean }) =>
    isActive ? "hover:text-primary rounded-md px-3 py-2" : "hover:text-primary rounded-md px-3 py-2";
  const { isLoggedIn } = useAuth();
  const { isOpen } = useModal();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const prohibitedLocation = ["/cart", "/checkout", "/shipping", "/login"];
  const navigate = useNavigate();

  const handleAuthBtn = () => {
    isLoggedIn ? dispatch(handleLogout()) : navigate("/login");
  };

  return (
    <div className="w-full flex items-center justify-between md:items-stretch md:justify-between relative">
      <NavLink
        className="lg:order-1 order-2 flex flex-shrink-0 items-center justify-center mr-4 w-5/12 lg:w-2/12"
        to="/"
      >
        <img src={logo} alt="modimal" />
      </NavLink>

      {!prohibitedLocation.includes(location.pathname) ? (
        <NavLink
          to="/shop"
          className={`lg:order-2 order-1 w-4/12 max-w-28 lg:w-7/12 flex justify-center items-center text-base ${(
            isActive: NavLinkRenderProps
          ) => linkClasss(isActive)}`}
        >
          Products
        </NavLink>
      ) : (
        <></>
      )}

      <div className="order-3 w-2/12 flex justify-end gap-8 items-center ">
        <button
          onClick={() => dispatch(toggleModal(null))}
          className={`w-max  ${(isActive: NavLinkRenderProps) => linkClasss(isActive)}`}
        >
          {isOpen ? <AiOutlineClose className="text-2xl" /> : <FaSearch />}
        </button>

        <button className={`w-max ${(isActive: NavLinkRenderProps) => linkClasss(isActive)}`} onClick={handleAuthBtn}>
          {isLoggedIn ? <FaSignOutAlt className="text-xl" /> : <FaUserAlt />}
        </button>

        <NavLink
          className={`w-max absolute lg:static left-0  ${(isActive: NavLinkRenderProps) => linkClasss(isActive)}`}
          to="/cart"
        >
          <FaShoppingBag />
        </NavLink>
      </div>
    </div>
  );
};

export default NavLinks;
