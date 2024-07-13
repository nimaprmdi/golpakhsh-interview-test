import { IProduct } from "./products";

interface ICartItem extends IProduct {
  quantity: number;
}

interface CartState {
  selectedItems: ICartItem[];
  wishLists: IProduct[];
  itemCounter: number;
  priceTotal: number;
}

export type { CartState, ICartItem };
