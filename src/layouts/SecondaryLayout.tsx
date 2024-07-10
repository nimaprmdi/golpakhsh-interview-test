import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const SecondaryLayout = () => {
  return (
    <>
      <Navbar isPrimary={false} />
      <Outlet />
    </>
  );
};

export default SecondaryLayout;
