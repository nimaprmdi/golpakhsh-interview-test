import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { IProduct } from "../../models/products";
import * as actions from "../cart/cartReducers";

const addToCart = (product: IProduct, count: number) => (dispatch: Dispatch, getState: () => RootState) => {
  // create a dispatch that add object like this { [id]: count }
  const itemCount = getState().cart.cartItems;
  console.log(itemCount);
  dispatch(actions.ADD_ITEM({ id: product.id.toString(), count }));
};

export { addToCart };
