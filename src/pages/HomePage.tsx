import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Cta from "../components/Cta";
import Masonry from "../components/Masonry";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Cards link="/shop" title="Best Sellers" catType="best-seller" />
      <Cards link="/shop?category=mens-clothing" title="Men's Clothing" catType="mens-clothing" className="mt-28" />
      <Cards link="/shop?category=electronics" title="Women's Clothing" catType="womens-clothing" className="mt-28" />
      <Cta className="mt-28" />
      <Masonry />
    </>
  );
};

export default HomePage;
