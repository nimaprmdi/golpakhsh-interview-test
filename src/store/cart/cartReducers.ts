import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { CartState, ISelectedItem } from "../../models/cart";
import { IProduct } from "../../models/products";
import { toast } from "react-toastify";

const initialState: CartState = {
  selectedItems: [],
  wishLists: [],
  itemCounter: 0,
  priceTotal: 0,
};

const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    INCREMENT_ITEM: (state, action: PayloadAction<{ product: IProduct }>) => {
      const { product } = action.payload;
      const foundProduct = state.selectedItems.findIndex((item) => item.id === product.id);

      foundProduct !== -1
        ? state.selectedItems[foundProduct].quantity++
        : state.selectedItems.push({ ...JSON.parse(JSON.stringify(product)), quantity: 1 });

      state.itemCounter++;
      state.priceTotal += product.price;
    },

    DECREMENT_ITEM: (state, action: PayloadAction<{ product: IProduct }>) => {
      const { product } = action.payload;
      const foundProduct = state.selectedItems.findIndex((item) => item.id === product.id);
      const selectedItem = state.selectedItems[foundProduct];

      const removeProduct = () => {
        selectedItem.quantity--;
        state.itemCounter--;
        state.priceTotal -= product.price;
      };

      foundProduct !== -1 && selectedItem.quantity > 1 && removeProduct();
    },

    REMOVE_ITEM: (state, action: PayloadAction<{ product: IProduct }>) => {
      const { product } = action.payload;
      const currentProduct = state.selectedItems.find((item) => item.id === product.id);

      const removeAction = () => {
        // used ! because is check on down side
        state.selectedItems = state.selectedItems.filter((item) => item.id !== currentProduct!.id);
        state.itemCounter -= currentProduct!.quantity;
        state.priceTotal -= currentProduct!.price! * currentProduct!.quantity;
      };

      currentProduct && removeAction();
    },

    ADD_TO_WISHLIST: (state, action: PayloadAction<{ product: IProduct }>) => {
      const { product } = action.payload;
      const foundProduct = state.wishLists.find((item: IProduct) => item.id === product.id);

      foundProduct && Object.keys(foundProduct).length > 0
        ? (state.wishLists = state.wishLists.filter((item) => item.id !== foundProduct.id))
        : state.wishLists.push(product);
    },
  },
});

export const { INCREMENT_ITEM, ADD_TO_WISHLIST, DECREMENT_ITEM, REMOVE_ITEM } = cartsSlice.actions;
export default cartsSlice.reducer;
