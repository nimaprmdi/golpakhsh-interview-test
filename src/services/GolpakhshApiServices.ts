import { toast } from "react-toastify";
import http from "./httpServices";
import configureStore from "../store/configureStore";
import * as productsActions from "../store/products/productsReducers";
import * as authActions from "../store/auth/authReducers";
import { Auth } from "../models/auth";
import { NavigateFunction } from "react-router-dom";

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

  readonly handleLogin = async (userData: Auth, navigate: NavigateFunction) => {
    store.dispatch(authActions.SET_LOADING(true));

    return await http
      .post("https://fakestoreapi.com/auth/login", userData)
      .then((res) => {
        res.status === 200 && store.dispatch(authActions.LOGIN_SUCCESS(userData.username));
        localStorage.setItem("isLoggedin", userData.username);
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((err) => {
        store.dispatch(authActions.LOGIN_FAILURE());
        toast.error("Login Failed");
      })
      .finally(() => store.dispatch(authActions.SET_LOADING(false)));
  };
}

const golpakhshApiServices = new GolpakhshApiServices();
export default golpakhshApiServices;
