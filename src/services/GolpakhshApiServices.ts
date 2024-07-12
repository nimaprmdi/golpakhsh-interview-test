import { toast } from "react-toastify";
import http from "./httpServices";
import configureStore from "../store/configureStore";
import * as productsActions from "../store/products/productsReducers";

const store = configureStore;

class GolpakhshApiServices {
  readonly fetchProducts = async () => {
    store.dispatch(productsActions.FETCH_DATA());

    return await http
      .get("/products")
      .then((response) => {
        const res = response.data;

        toast.success("Products fetched successfuly");
        store.dispatch(productsActions.FETCH_DATA_SUCCESSFUL(res));
      })
      .catch((error) => {
        toast.error("Products fetched failed");
        console.log(error);
      });
  };

  readonly fetchCategories = async () => {
    store.dispatch(productsActions.FETCH_DATA());

    return await http
      .get("/products/categories")
      .then((response) => {
        const res = response.data;

        toast.success("Categories fetched successfuly");
        store.dispatch(productsActions.FETCH_CATEGORIES_SUCCESSFUL(res));
      })
      .catch((error) => {
        toast.error("Categories fetch failed");
        console.log(error);
      });
  };
}

const golpakhshApiServices = new GolpakhshApiServices();
export default golpakhshApiServices;
