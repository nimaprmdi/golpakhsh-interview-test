interface ICartPayload {
  id: string;
  count: number | string;
}

interface ICartInitialState {
  cartItems: ICartPayload[];
  isLoading: boolean;
}

export type { ICartInitialState, ICartPayload };
