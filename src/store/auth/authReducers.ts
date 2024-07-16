import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as models from "../../models/auth";

const initialState: models.IAuthState = {
  isLoggedIn: false,
  loading: false,
  lastFetch: 0,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState as models.IAuthState,
  reducers: {
    SET_LOADING: (state: models.IAuthState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    LOGIN_SUCCESS: (state: models.IAuthState, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },

    LOGOUT: (state: models.IAuthState) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.username = "";
    },

    LOGIN_FAILURE: (state: models.IAuthState) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.username = "";
    },
  },
});

export const { SET_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
