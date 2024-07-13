import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer"; // Adjust this import path as needed
import { CartState } from "../models/cart";

export const useCart = (): CartState => {
  return useSelector((state: RootState) => state.cart);
};
