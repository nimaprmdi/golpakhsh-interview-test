import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer"; // Adjust this import path as needed
import { IProductsState } from "../models/products";

export const useProducts = (): IProductsState => {
  return useSelector((state: RootState) => state.products);
};
