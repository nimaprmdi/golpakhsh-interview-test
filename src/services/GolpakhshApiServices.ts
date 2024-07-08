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

        toast.success("Request Published Successfuly");
        store.dispatch(productsActions.FETCH_DATA_SUCCESSFUL(res));
      })
      .catch((error) => {
        toast.error("Publish Request Failed");
        console.log(error);
      });
  };

  readonly fetchCategories = async () => {
    store.dispatch(productsActions.FETCH_DATA());

    return await http
      .get("/products/categories")
      .then((response) => {
        const res = response.data;

        toast.success("Request Published Successfuly");
        store.dispatch(productsActions.FETCH_CATEGORIES_SUCCESSFUL(res));
      })
      .catch((error) => {
        toast.error("Publish Request Failed");
        console.log(error);
      });
  };
}

export default new GolpakhshApiServices();
