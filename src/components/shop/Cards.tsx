import Card from "../shop/Card";
import Pagination from "../common/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "../../models/products";
import { createSlug, paginate } from "../../helpers/utils";
import { useProducts } from "../../hooks/useProducts";

interface CardsProps {
  catType: "best-seller" | string;
  className?: string;
  title: string;
  link: string;
  hasHeader?: boolean;
  hasPagination?: boolean;
  isLimited?: boolean;
  setItemsLength?: React.Dispatch<React.SetStateAction<number>>;
}

const Cards = ({
  title,
  link,
  catType,
  className,
  hasHeader = true,
  isLimited = true,
  setItemsLength,
  hasPagination = false,
}: CardsProps) => {
  const [items, setItems] = useState<IProduct[]>([]);
  const { products, searchedProducts, searchedKey } = useProducts();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedData, setPaginatedData] = useState<IProduct[]>([]);

  const itemsPerPage = 4;
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, pageCount));
    setCurrentPage(pageNumber);
  };

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

      setCurrentPage(1);
      setItemsLength && setItemsLength(result.length); // Set For Count parent component
      setItems(isLimited ? result.slice(0, 3) : result);
    }
  }, [products, searchedProducts, searchParams]);

  useEffect(() => {
    items && setPaginatedData(paginate(items, itemsPerPage, currentPage));
  }, [items, currentPage, itemsPerPage]);

  return (
    <section className={`w-full flex flex-wrap justify-center ${className || "py-4"}`}>
      <div className="max-w-1224 flex justify-center  w-full">
        <div className="container-xl lg:container m-auto w-full ">
          {/* Has Header */}
          {hasHeader ? (
            <div className="w-full flex justify-between items-center mb-6 px-3 md:px-0">
              <h4 className="font-semibold text-3xl">{title}</h4>

              <Link to={link} className="text-sm text-black font-normal hover:text-gray-800">
                View all
              </Link>
            </div>
          ) : (
            <></>
          )}

          <div className="w-full  flex justify-center xl:justify-between flex-wrap gap-6 mb-5">
            {paginatedData.map((item: IProduct, index: number) => (
              <Card key={`${item.id}--${Math.random() * 1000 * index}`} item={item} />
            ))}

            {/* Pagination */}
            {hasPagination ? (
              <div className="w-full flex justify-center">
                <Pagination
                  onNextPage={nextPage}
                  onPrevPage={prevPage}
                  onPageSelect={goToPage}
                  currentPage={currentPage}
                  pageCount={pageCount}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
