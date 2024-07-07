import { createSlice } from "@reduxjs/toolkit";
import * as models from "../../models/auth";

const initialState: models.IAuth = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState as models.IAuth,
  reducers: {
    FETCH_USER: (state) => {
      console.log("clicked");
    },
  },
});

export const { FETCH_USER } = authSlice.actions;
export default authSlice.reducer;
