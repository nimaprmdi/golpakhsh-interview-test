import { createSlice } from "@reduxjs/toolkit";
import * as models from "../../models/products";

const initialState: models.IProductsInitialState = {
  products: [],
  categories: [],
  isLoading: false,
  totalProducts: 0,
  lastFetch: 0,
  searchedProducts: [],
  searchedKey: "",
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

    SEARCH_PRODUCT_LIST: (state, action) => {
      state.searchedProducts = action.payload;
    },

    SEARCH_KEY: (state, action) => {
      state.searchedKey = action.payload;
    },
  },
});

export const {
  FETCH_DATA,
  FETCH_DATA_SUCCESSFUL,
  FETCH_CATEGORIES_SUCCESSFUL,
  FETCH_DATA_FAILED,
  SEARCH_PRODUCT_LIST,
  SEARCH_KEY,
} = productsSlice.actions;
export default productsSlice.reducer;
