import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Route, createRoutesFromElements, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/products/productsActions";
import { RootState } from "./store/rootReducer";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  const productsState = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (!productsState.isLoading) {
      dispatch(fetchProducts() as any);
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
