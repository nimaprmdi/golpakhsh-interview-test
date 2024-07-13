import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer"; // Adjust this import path as needed
import { AuthState } from "../models/auth";

export const useAuth = (): AuthState => {
  return useSelector((state: RootState) => state.auth);
};
