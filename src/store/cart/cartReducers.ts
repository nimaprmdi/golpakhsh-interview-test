import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  [key: string]: string;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM: (state, action: PayloadAction<{ id: string; count: number }>) => {
      const { id, count } = action.payload;
      const existingItemIndex = state.cartItems.findIndex((item) => Object.keys(item)[0] === id);

      if (existingItemIndex !== -1) {
        const existingCount = parseInt(Object.values(state.cartItems[existingItemIndex])[0]);
        state.cartItems[existingItemIndex] = { [id]: (existingCount + count).toString() };
      } else {
        state.cartItems.push({ [id]: count.toString() });
      }
    },
  },
});

export const { ADD_ITEM } = cartsSlice.actions;
export default cartsSlice.reducer;
