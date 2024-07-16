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
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    LOGIN_SUCCESS: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },

    LOGOUT: (state) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.username = "";
    },

    LOGIN_FAILURE: (state) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.username = "";
    },
  },
});

export const { SET_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
