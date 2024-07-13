import moment from "moment";
import apiService from "../../services/GolpakhshApiServices";
import { RootState } from "../rootReducer";
import { Dispatch } from "@reduxjs/toolkit";
import { Auth } from "../../models/auth";
import { NavigateFunction } from "react-router-dom";

const userLogin = (userData: Auth, navigate: NavigateFunction) => (dispatch: Dispatch, getState: () => RootState) => {
  const { lastFetch } = getState().auth;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 10) return;

  apiService.handleLogin(userData, navigate);
};

export { userLogin };
