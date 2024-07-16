import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/Footer";
import BaseLayout from "./BaseLayouts";
import { Outlet } from "react-router-dom";
import { useModal } from "../hooks/useModal";

const MainLayout = (): JSX.Element => {
  const { isOpen: isModalOpen } = useModal();

  return (
    <BaseLayout>
      <Navbar />

      <div
        className={`${isModalOpen ? "h-screen max-h-screen overflow-hidden hidden" : ""} animate-fade-in relative z-50`}
      >
        <Outlet />
      </div>

      <Footer />
    </BaseLayout>
  );
};

export default MainLayout;
