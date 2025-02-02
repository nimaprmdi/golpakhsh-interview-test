// Layouts
import MainLayout from "./layouts/MainLayout";
import SecondaryLayout from "./layouts/SecondaryLayout";

// Methods
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories, fetchProducts } from "./store/products/productsActions";
import { ToastContainer } from "react-toastify";

// Pages
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ShopSinglePage from "./pages/ShopSinglePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import LoginPage from "./pages/LoginPage";

// hooks
import { useProducts } from "./hooks/useProducts";

// layouts
import { AuthLayouts } from "./layouts/AuthLayouts";

// Types
import { AppDispatch } from "./store/configureStore";

// Styles
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// HOC Authenticate the pages
const AuthenticatedCartPage = AuthLayouts(CartPage);
const AuthenticatedCheckoutPage = AuthLayouts(CheckoutPage);
const AuthenticatedShippingPage = AuthLayouts(ShippingPage);

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
        <Route path="/cart" element={<AuthenticatedCartPage />} />
        <Route path="/checkout" element={<AuthenticatedCheckoutPage />} />
        <Route path="/shipping" element={<AuthenticatedShippingPage />} />
      </Route>
    </>
  )
);

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productsState = useProducts();

  useEffect(() => {
    if (!productsState.isLoading) {
      const fetchData = async () => {
        await dispatch(fetchProducts());
        await dispatch(fetchCategories());
      };

      fetchData();
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
