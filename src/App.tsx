// Layouts
import MainLayout from "./layouts/MainLayout";
import SecondaryLayout from "./layouts/SecondaryLayout";

// Methods
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "./store/products/productsActions";
import { RootState } from "./store/rootReducer";

// Pages
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ShopSinglePage from "./pages/ShopSinglePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import ShippingPage from "./pages/ShippingPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import LoginPage from "./pages/LoginPage";

// Styles
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ShopSinglePage />} />
        <Route path="/payment-successful" element={<PaymentSuccessPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/" element={<SecondaryLayout />}>
        <Route path="/shop/cart" element={<CartPage />} />
        <Route path="/shop/checkout" element={<CheckoutPage />} />
        <Route path="/shop/shipping" element={<ShippingPage />} />
      </Route>
    </>
  )
);

function App() {
  const dispatch = useDispatch();
  const productsState = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (!productsState.isLoading) {
      dispatch(fetchProducts() as any);
      dispatch(fetchCategories() as any);
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
