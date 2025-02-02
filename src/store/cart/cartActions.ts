import * as actions from "../cart/cartReducers";
import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { IProduct } from "../../models/products";
import { toast } from "react-toastify";
import { ICartItem } from "../../models/cart";

// Simple Action
// const incrementItem = (product: IProduct) => {
//   return {
//     type: "INCREMENT_ITEM",
//     payload: product,
//   };
// };

const incrementItem = (product: IProduct) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.INCREMENT_ITEM({ product }));
  toast.success("Item added to basket");
};

const decrementItem = (product: IProduct) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.DECREMENT_ITEM({ product }));
  toast.success("Item decreased");
};

const addToWishLists = (product: IProduct) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.ADD_TO_WISHLIST({ product }));
  toast.success("Action successd");
};

const removeFromCart = (product: ICartItem) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.REMOVE_ITEM({ product }));
  toast.success("Action successd");
};

const resetCart = () => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.RESET_CART());
  toast.success("Action successd");
};

export { incrementItem, decrementItem, addToWishLists, removeFromCart, resetCart };
