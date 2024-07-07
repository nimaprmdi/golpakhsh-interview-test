import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/products/productsActions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

function App() {
  // @todo check type here

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
