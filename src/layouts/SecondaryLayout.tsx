import Navbar from "../components/common/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

const SecondaryLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar isPrimary={false} />
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export default SecondaryLayout;
