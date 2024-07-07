import { createSlice } from "@reduxjs/toolkit";
import * as models from "../../models/products";

const initialState: models.IProductsInitialState = {
  products: [],
  isLoading: true,
  totalProducts: 0,
  lastFetch: 0,
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

    FETCH_DATA_FAILED: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    IS_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { FETCH_DATA, FETCH_DATA_SUCCESSFUL, FETCH_DATA_FAILED } = productsSlice.actions;
export default productsSlice.reducer;
