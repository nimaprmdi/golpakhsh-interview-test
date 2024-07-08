import moment from "moment";
import apiService from "../../services/GolpakhshApiServices";
import { RootState } from "../rootReducer";
import { Dispatch } from "@reduxjs/toolkit";
import * as actions from "./productsReducers";

const fetchProducts = () => (dispatch: Dispatch, getState: () => RootState) => {
  const { lastFetch } = getState().products;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 10) return;

  apiService.fetchProducts();
};

const fetchCategories = () => (dispatch: Dispatch, getState: () => RootState) => {
  const { lastFetch } = getState().products;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 10) return;

  apiService.fetchCategories();
};

const searchProduct = (text: string) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.SEARCHED_PRODUCTS(text));
};

export { fetchProducts, fetchCategories, searchProduct };
