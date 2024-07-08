import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { useEffect, useState } from "react";
import { IProduct } from "../models/products";
import Card from "./Card";

interface CardsProps {
  catType: "best-seller" | string;
  className?: string;
  title: string;
}

const Cards = ({ title, catType, className }: CardsProps) => {
  const [items, setItems] = useState<IProduct[]>([]);
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (products.length > 0) {
      let result = [];

      if (catType === "best-seller") {
        result = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
        setItems(result);
      } else if (catType) {
        result = [...products].filter((item) => item.category === catType);
        setItems(result);
      } else {
        result = [...products];
      }

      setItems(result.slice(0, 3));
    }
  }, [products]);

  return (
    <section className={`py-4 w-100 flex flex-wrap justify-center ${className}`}>
      <div className="max-w-1440 flex justify-center w-100">
        <div className="container-xl lg:container m-auto w-100 ">
          <div className="w-100 flex justify-between items-center mb-6">
            <h4 className="font-semibold text-3xl">{title}</h4>

            <Link to="/items" className="text-sm text-black font-normal hover:text-gray-800">
              view all
            </Link>
          </div>
          <div className="w-100  flex justify-center xl:justify-between flex-wrap gap-6">
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
