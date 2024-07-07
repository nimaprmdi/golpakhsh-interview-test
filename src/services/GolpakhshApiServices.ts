import { fetchProducts } from "../store/products/productsActions";
import { toast } from "react-toastify";
import http from "./httpServices";
import configureStore from "../store/configureStore";

const store = configureStore;

class GolpakhshApiServices {
  readonly fetchProducts = async () => {
    return await http
      .get("/products")
      .then(() => {
        toast.success("Request Published Successfuly");
        store.dispatch(fetchProducts() as any);
      })
      .catch((error) => {
        toast.error("Publish Request Failed");
        console.log(error);
      });
  };
}

export default new GolpakhshApiServices();
