import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer"; // Adjust this import path as needed
import { IModalState } from "../models/modal";

export const useModal = (): IModalState => {
  return useSelector((state: RootState) => state.modal);
};
