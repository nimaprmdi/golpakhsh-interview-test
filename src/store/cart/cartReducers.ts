import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "../../models/cart";
import { IProduct } from "../../models/products";

const initialState: ICartState = {
  selectedItems: [],
  wishLists: [],
  itemCounter: 0,
  priceTotal: 0,
};

const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    INCREMENT_ITEM: (state: ICartState, action: PayloadAction<{ product: IProduct }>) => {
      const { product } = action.payload;
      const foundProduct = state.selectedItems.findIndex((item) => item.id === product.id);

      foundProduct !== -1
        ? state.selectedItems[foundProduct].quantity++
        : state.selectedItems.push({ ...JSON.parse(JSON.stringify(product)), quantity: 1 });

      state.itemCounter++;
      state.priceTotal += product.price;
    },

    DECREMENT_ITEM: (state: ICartState, action: PayloadAction<{ product: IProduct }>) => {
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

    REMOVE_ITEM: (state: ICartState, action: PayloadAction<{ product: IProduct }>) => {
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

    ADD_TO_WISHLIST: (state: ICartState, action: PayloadAction<{ product: IProduct }>) => {
      const { product } = action.payload;
      const foundProduct = state.wishLists.find((item: IProduct) => item.id === product.id);

      foundProduct && Object.keys(foundProduct).length > 0
        ? (state.wishLists = state.wishLists.filter((item) => item.id !== foundProduct.id))
        : state.wishLists.push(product);
    },

    RESET_CART: (state: ICartState) => {
      state.selectedItems = [];
      state.itemCounter = 0;
      state.priceTotal = 0;
    },
  },
});

export const { INCREMENT_ITEM, ADD_TO_WISHLIST, DECREMENT_ITEM, REMOVE_ITEM, RESET_CART } = cartsSlice.actions;
export default cartsSlice.reducer;
