import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer"; // Adjust this import path as needed
import { IAuthState } from "../models/auth";

export const useAuth = (): IAuthState => {
  return useSelector((state: RootState) => state.auth);
};
