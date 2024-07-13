import Badge from "../components/shop/Badge";
import { FaHeart, FaTruckMoving } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IProduct } from "../models/products";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { incrementItem, addToWishLists } from "../store/cart/cartActions";
import { AppDispatch } from "../store/configureStore";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";

const ShopSinglePage = (): JSX.Element => {
  const [productItem, setProductItem] = useState<IProduct>();
  const [isLiked, setIsLiked] = useState<IProduct>();

  const { products } = useProducts();
  const { wishLists } = useCart();

  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const currentProduct = products.filter((item) => item.id.toString() === id!);
    setProductItem(currentProduct[0]);
  }, [products, id]);

  useEffect(() => {
    const isLiked = wishLists.filter((item) => item.id?.toString() === id!);
    setIsLiked(isLiked[0]);
  }, [wishLists, id]);

  return (
    <section className="w-full flex justify-center pb-32 mt-16 lg:mt-32">
      {productItem ? (
        <div className="max-w-1224 w-full flex flex-wrap justify-between">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 lg:pe-3">
            <img src={productItem.image} alt={productItem.title} className="w-full h-96 object-contain rounded-lg" />
          </div>

          {/* Product Actions */}
          <div className="w-full lg:w-1/2 px-5 lg:px-0 mt-8 lg:mt-0">
            <h2 className="text-3xl font-semibold capitalize">{productItem.title}</h2>
            <p className="mt-8">{productItem.description}</p>

            {/* Product meta */}
            <h6 className="text-base font-normal mt-6">Price</h6>
            <h6 className="text-lg font-normal">${productItem.price}</h6>

            <button onClick={() => dispatch(incrementItem(productItem))} className="btn-dark capitalize w-full mt-6">
              Add To Cart
            </button>

            {/* Helpers */}
            <div className="product-helpers flex justify-between items-center mt-6">
              <div className="flex items-center">
                <FaTruckMoving className={`me-2`} />
                Easy Return
              </div>

              <div className="flex items-center">
                <FaHeart
                  onClick={() => dispatch(addToWishLists(productItem))}
                  style={{ color: isLiked ? "red" : "black" }}
                  className="me-2"
                />
                Add to wish list
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="w-full lg:w-1/2 px-5 lg:px-0 lg:pe-3">
            {/* Post Meta */}
            <div className="bg-gray-200 border border-gray-300 mt-8 px-4 py-3">
              <div className="title border-b border-gray-700 w-full pt-4 px-4">
                <h3 className="pb-3">{productItem.title}</h3>
              </div>

              <p className="mt-6 text-lg leading-8 font-normal px-3">{productItem.description}</p>

              <div className="w-full flex justify-start gap-3 mt-6 px-2">
                <Badge hasClose={false} text={productItem.category} className="bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ShopSinglePage;
