import { useState, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { IProduct } from "../models/products";
import { updateSearchedCategories } from "../store/products/productsActions";
import { AppDispatch } from "../store/configureStore";
import { useDispatch } from "react-redux";

export const useFilter = (initialProducts: IProduct[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const categoryParam = searchParams.get("category");
    return categoryParam ? categoryParam.split(",") : [];
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSelectedCategories((prevState) => {
      let newSelectedCategory;

      if (checked && !prevState.includes(name)) {
        newSelectedCategory = [...prevState, name];
      } else {
        newSelectedCategory = prevState.filter((category) => category !== name);
      }

      dispatch(updateSearchedCategories(newSelectedCategory));
      return newSelectedCategory;
    });
  }, []);

  const applyFilters = useCallback(() => {
    if (selectedCategories.length === 0) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", selectedCategories.join(","));
    }
    setSearchParams(searchParams);
  }, [selectedCategories, searchParams, setSearchParams]);

  const deleteCategory = (category: string) => {
    const categoriesClone = [...selectedCategories];
    let categories = categoriesClone.filter((categoryItem) => categoryItem !== category);

    setSelectedCategories(() => {
      setSearchParams({ category: categories.toString() });
      dispatch(updateSearchedCategories(categories));
      return [...categories];
    });
  };

  const clearFilters = useCallback(() => {
    setSelectedCategories([]);
    searchParams.delete("category");
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) return initialProducts;
    return initialProducts.filter((product) => selectedCategories.includes(product.category));
  }, [initialProducts, selectedCategories]);

  return {
    selectedCategories,
    handleCategoryChange,
    applyFilters,
    clearFilters,
    filteredProducts,
    deleteCategory,
  };
};
