import { useState, useEffect } from "react";
import Listings from "./Listings";
import api from "../services/httpServices";

const ItemListings = ({ isHome = false }: { isHome: boolean }) => {
  const [items, setItems] = useState<{}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get(`${process.env.REACT_APP_MAIN_API}/products`)
        .then((res) => {
          setItems(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Items" : "Browse Items"}
        </h2>

        {loading ? (
          <div className="w-100 flex justify-center items-center">loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items && items.map((item: any) => item && <Listings key={item.id} item={item} />)}{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default ItemListings;
