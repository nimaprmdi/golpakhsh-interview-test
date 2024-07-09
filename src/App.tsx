import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "./store/products/productsActions";
import { RootState } from "./store/rootReducer";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import ShopSinglePage from "./pages/ShopSinglePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SecondaryLayout from "./layouts/SecondaryLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ShopSinglePage />} />
      </Route>

      <Route path="/" element={<SecondaryLayout />}>
        <Route path="/shop/cart" element={<CartPage />} />
        <Route path="/shop/checkout" element={<CheckoutPage />} />
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
