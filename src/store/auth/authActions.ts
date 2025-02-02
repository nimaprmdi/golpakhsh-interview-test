import moment from "moment";
import apiService from "../../services/GolpakhshApiServices";
import { RootState } from "../rootReducer";
import { Dispatch } from "@reduxjs/toolkit";
import { IAuth } from "../../models/auth";
import { NavigateFunction } from "react-router-dom";
import * as actions from "./authReducers";

const userLogin = (userData: IAuth, navigate: NavigateFunction) => (dispatch: Dispatch, getState: () => RootState) => {
  const { lastFetch } = getState().auth;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffInMinutes < 10) return;

  apiService.handleLogin(userData, navigate);
};

const handleLogout = () => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.LOGOUT());
};

export { userLogin, handleLogout };
