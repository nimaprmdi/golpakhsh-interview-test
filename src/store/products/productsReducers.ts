import { createSlice } from "@reduxjs/toolkit";
import * as models from "../../models/products";

const initialState: models.IProductsInitialState = {
  products: [],
  categories: [],
  isLoading: false,
  totalProducts: 0,
  lastFetch: 0,
  searchedProducts: "",
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState as models.IProductsInitialState,
  reducers: {
    FETCH_DATA: (state) => {
      state.isLoading = true;
    },

    FETCH_DATA_SUCCESSFUL: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },

    FETCH_CATEGORIES_SUCCESSFUL: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },

    FETCH_DATA_FAILED: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    SEARCHED_PRODUCTS: (state, action) => {
      state.searchedProducts = action.payload;
    },
  },
});

export const { FETCH_DATA, FETCH_DATA_SUCCESSFUL, FETCH_CATEGORIES_SUCCESSFUL, FETCH_DATA_FAILED, SEARCHED_PRODUCTS } =
  productsSlice.actions;
export default productsSlice.reducer;
