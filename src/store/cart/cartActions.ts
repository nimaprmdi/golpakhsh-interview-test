import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { IProduct } from "../../models/products";
import { toast } from "react-toastify";
import * as actions from "../cart/cartReducers";
import { ISelectedItem } from "../../models/cart";

const incrementItem = (product: IProduct) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.INCREMENT_ITEM({ product }));
  toast.success("Item added to basket");
};

const decrementItem = (product: IProduct) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.DECREMENT_ITEM({ product }));
  toast.success("Item decremented");
};

const addToWishLists = (product: IProduct) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.ADD_TO_WISHLIST({ product }));
  toast.success("Action successd");
};

const removeFromCart = (product: ISelectedItem) => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.REMOVE_ITEM({ product }));
  toast.success("Action successd");
};

const resetCart = () => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(actions.RESET_CART());
  toast.success("Action successd");
};

export { incrementItem, decrementItem, addToWishLists, removeFromCart, resetCart };
