import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./auth/authReducers";
import productsReducers from "./products/productsReducers";

const rootReducer = combineReducers({
  auth: authReducers,
  products: productsReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
