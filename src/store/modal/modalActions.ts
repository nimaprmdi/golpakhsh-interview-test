import * as actions from "../modal/modalReducer";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

// Simple Action
// const incrementItem = (product: IProduct) => {
//   return {
//     type: "INCREMENT_ITEM",
//     payload: product,
//   };
// };

const toggleModal =
  (isClose: boolean | null = null) =>
  (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(actions.TOGGLE_MODAL(isClose));
    console.log("toggled");
  };

export { toggleModal };
