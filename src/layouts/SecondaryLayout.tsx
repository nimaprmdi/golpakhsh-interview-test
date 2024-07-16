import Navbar from "../components/common/navbar/Navbar";
import { useModal } from "../hooks/useModal";
import BaseLayout from "./BaseLayouts";
import { Outlet } from "react-router-dom";

const SecondaryLayout: React.FC = (): JSX.Element => {
  const { isOpen: isModalOpen } = useModal();

  return (
    <BaseLayout>
      <Navbar isPrimary={false} />
      <div className={`${isModalOpen && "h-screen max-h-screen overflow-hidden hidden"} animate-fade-in`}>
        <Outlet />
      </div>
    </BaseLayout>
  );
};

export default SecondaryLayout;
