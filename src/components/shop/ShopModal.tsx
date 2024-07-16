import ShopPage from "../../pages/ShopPage";
import Portal from "../../portals/Portal";
import { useLocation } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { toggleModal } from "../../store/modal/modalActions";
import { clearSearch } from "../../store/products/productsActions";

const ShopModal = () => {
  const { isOpen } = useModal();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(toggleModal(false));
    dispatch(clearSearch());
  }, [location, dispatch]);

  return (
    <Portal>
      {isOpen ? (
        <section className="animate-fade-in">
          <div
            className={`fixed z-20 min-h-screen overflow-auto top-0 left-0 w-full h-32 bg-white pt-[112px] ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ShopPage isModal={true} />
          </div>
        </section>
      ) : (
        <></>
      )}
    </Portal>
  );
};

export default ShopModal;
