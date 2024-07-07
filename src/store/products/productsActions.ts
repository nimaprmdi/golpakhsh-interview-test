import moment from "moment";
import apiService from "../../services/GolpakhshApiServices";
import { RootState } from "../rootReducer";
import { Dispatch } from "@reduxjs/toolkit";

const fetchProducts = () => (dispatch: Dispatch, getState: () => RootState) => {
  const { lastFetch } = getState().products;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 10) return;

  apiService.fetchProducts();
};

const isLoading = (state: "loading" | "loaded") => async (dispatch: Dispatch) => {};

export { fetchProducts };
