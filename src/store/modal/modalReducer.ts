import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as models from "../../models/modal";

const initialState: models.IModalState = {
  isOpen: false,
  content: null,
};

const modalReducer = createSlice({
  name: "modal",
  initialState: initialState as models.IModalState,
  reducers: {
    TOGGLE_MODAL: (state, action: PayloadAction<boolean | null>) => {
      const isClose = action.payload;

      state.isOpen = isClose !== null && (isClose === true || isClose === false) ? isClose : !state.isOpen;
    },
  },
});

export const { TOGGLE_MODAL } = modalReducer.actions;
export default modalReducer.reducer;
