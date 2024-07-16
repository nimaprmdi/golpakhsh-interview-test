import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./auth/authReducers";
import productsReducers from "./products/productsReducers";
import cartReducers from "./cart/cartReducers";
import modalReducer from "./modal/modalReducer";

// Root Reducers
const rootReducer = combineReducers({
  cart: cartReducers,
  auth: authReducers,
  products: productsReducers,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
