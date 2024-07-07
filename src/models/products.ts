interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface IProductsInitialState {
  products: IProduct[];
  isLoading: boolean;
  totalProducts: number;
  lastFetch: number;
  error: string;
}

export type { IProduct, IProductsInitialState };
