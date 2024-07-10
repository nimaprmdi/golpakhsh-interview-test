import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { useEffect, useState } from "react";
import { IProduct } from "../models/products";
import Card from "./Card";
import { createSlug } from "../helpers/utils";

interface CardsProps {
  catType: "best-seller" | string;
  className?: string;
  title: string;
  link: string;
  hasHeader?: boolean;
  isLimited?: boolean;
  setItemsLength?: React.Dispatch<React.SetStateAction<number>>;
}

const Cards = ({ title, link, catType, className, hasHeader = true, isLimited = true, setItemsLength }: CardsProps) => {
  const [items, setItems] = useState<IProduct[]>([]);
  const { products, searchedProducts, searchedKey } = useSelector((state: RootState) => state.products);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (products.length > 0) {
      let result = [];
      let productsClone = searchedProducts && searchedKey ? [...searchedProducts] : [...products];

      // Filter by Category
      const categoriesString = searchParams.get("category");
      const categories = categoriesString ? decodeURIComponent(categoriesString).split(",") : [];
      if (categories.length > 0) {
        productsClone = productsClone.filter((product) => categories.includes(createSlug(product.category)));
      }

      // Render Base
      if (catType === "best-seller") {
        result = productsClone.sort((a, b) => b.rating.rate - a.rating.rate);
        setItems(result);
      } else if (catType) {
        result = productsClone.filter((item) => createSlug(item.category) === catType);
        setItems(result);
      } else {
        result = productsClone;
      }

      setItemsLength && setItemsLength(result.length); // Set For Count parent component
      setItems(isLimited ? result.slice(0, 3) : result);
    }
  }, [products, searchedProducts, searchParams]);

  return (
    <section className={`w-full flex flex-wrap justify-center ${className || "py-4"}`}>
      <div className="max-w-1224 flex justify-center  w-full">
        <div className="container-xl lg:container m-auto w-full ">
          {/* Has Header */}
          {hasHeader ? (
            <div className="w-full flex justify-between items-center mb-6">
              <h4 className="font-semibold text-3xl">{title}</h4>

              <Link to={link} className="text-sm text-black font-normal hover:text-gray-800">
                View all
              </Link>
            </div>
          ) : (
            <></>
          )}

          <div className="w-full  flex justify-center xl:justify-between flex-wrap gap-6">
            {items.map(
              (item: IProduct, index: number) =>
                items && items.length > 0 && <Card key={`${item.id}--${Math.random() * 1000 * index}`} item={item} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
