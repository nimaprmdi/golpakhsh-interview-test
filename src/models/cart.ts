import { IProduct } from "./products";

interface ICartItem extends IProduct {
  quantity: number;
}

interface ICartState {
  selectedItems: ICartItem[];
  wishLists: IProduct[];
  itemCounter: number;
  priceTotal: number;
}

export type { ICartState, ICartItem };
