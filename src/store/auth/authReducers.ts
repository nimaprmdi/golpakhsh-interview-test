import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as models from "../../models/auth";

const initialState: models.AuthState = {
  isLoggedIn: false,
  loading: false,
  lastFetch: 0,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState as models.AuthState,
  reducers: {
    SET_LOADING: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    LOGIN_SUCCESS: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },

    LOGIN_FAILURE: (state) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.username = "";
    },
  },
});

export const { SET_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } = authSlice.actions;
export default authSlice.reducer;
