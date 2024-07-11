import { IProduct } from "./products";

interface ISelectedItem extends IProduct {
  quantity: number;
}

interface CartState {
  selectedItems: ISelectedItem[];
  wishLists: IProduct[];
  itemCounter: number;
  priceTotal: number;
}

export type { CartState, ISelectedItem };
