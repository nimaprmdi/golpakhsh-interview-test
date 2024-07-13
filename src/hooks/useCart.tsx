import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer"; // Adjust this import path as needed
import { ICartState } from "../models/cart";

export const useCart = (): ICartState => {
  return useSelector((state: RootState) => state.cart);
};
