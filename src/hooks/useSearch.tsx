import { useState, useCallback, useMemo } from "react";
import { IProduct } from "../models/products";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/configureStore";
import { searchProduct } from "../store/products/productsActions";

export const useSearch = (products: IProduct[]) => {
  const [searchTerm] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const productsClone = [...products];
    const searchedProducts = productsClone.filter((products: IProduct) =>
      products.title.toLowerCase().includes(event.target.value.toLocaleLowerCase())
    );

    dispatch(searchProduct(searchedProducts, event.target.value));
  }, []);

  const searchResults = useMemo(() => {
    return products.filter((product: IProduct) => product.title.toLowerCase().includes(searchTerm));
  }, [products, searchTerm]);

  return {
    searchTerm,
    searchResults,
    handleSearchChange,
  };
};
