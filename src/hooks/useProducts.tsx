import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer"; // Adjust this import path as needed
import { IProductState } from "../models/products";

export const useProducts = (): IProductState => {
  return useSelector((state: RootState) => state.products);
};
