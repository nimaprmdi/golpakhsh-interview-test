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

interface IProductState {
  products: IProduct[];
  categories: string[] | [];
  searchedProducts: IProduct[];
  searchedCategories: string[];
  searchedKey: string;
  isLoading: boolean;
  totalProducts: number;
  lastFetch: number;
  error: string;
}

export type { IProduct, IProductState };
