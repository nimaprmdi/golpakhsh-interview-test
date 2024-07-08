import { createSlice } from "@reduxjs/toolkit";
import * as models from "../../models/search";

const initialState: models.ISerachInitialState = {
  isOpen: false,
};

const authSlice = createSlice({
  name: "search",
  initialState: initialState as models.ISerachInitialState,
  reducers: {
    FETCH_USER: (state) => {
      console.log("clicked");
    },
  },
});

export const { FETCH_USER } = authSlice.actions;
export default authSlice.reducer;
