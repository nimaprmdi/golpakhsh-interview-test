import moment from "moment";
import apiService from "../../services/GolpakhshApiServices";
import * as actions from "./productsReducers";
import { RootState } from "../rootReducer";
import { Dispatch } from "@reduxjs/toolkit";
import { IProduct } from "../../models/products";

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

const searchProduct = (products: IProduct[], key: string) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.SEARCH_PRODUCT_LIST(products));
  dispatch(actions.SEARCH_KEY(key));
};

const updateSearchedCategories = (categories: string[]) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.UPDATE_SEARCHED_CATEGORIES(categories));
};

export { fetchProducts, fetchCategories, searchProduct, updateSearchedCategories };
