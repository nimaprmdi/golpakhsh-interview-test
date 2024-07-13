import Navbar from "../components/common/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/common/Footer";

const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
