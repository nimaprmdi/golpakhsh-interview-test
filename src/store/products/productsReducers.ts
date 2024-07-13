import { createSlice } from "@reduxjs/toolkit";
import * as models from "../../models/products";

const initialState: models.IProductState = {
  products: [],
  categories: [],
  isLoading: false,
  totalProducts: 0,
  lastFetch: 0,
  searchedProducts: [],
  searchedCategories: [],
  searchedKey: "",
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState as models.IProductState,
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

    UPDATE_SEARCHED_CATEGORIES: (state, action) => {
      state.searchedCategories = action.payload;
    },

    DELETE_SEARCHED_CATEGORY: (state, action) => {
      state.searchedCategories = state.searchedCategories.filter((category) => category !== action.payload);
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
  UPDATE_SEARCHED_CATEGORIES,
  DELETE_SEARCHED_CATEGORY,
} = productsSlice.actions;
export default productsSlice.reducer;
