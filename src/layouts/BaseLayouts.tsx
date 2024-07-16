import React from "react";
import ShopModal from "../components/shop/ShopModal";
import { ScrollRestoration } from "react-router-dom";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <section>
      {children}

      <ScrollRestoration />
      <ShopModal />
    </section>
  );
};

export default BaseLayout;
