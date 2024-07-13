import Navbar from "../components/common/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const SecondaryLayout = () => {
  return (
    <>
      <Navbar isPrimary={false} />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default SecondaryLayout;
