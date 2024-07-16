import Hero from "../components/Hero";
import Cards from "../components/shop/Cards";
import Cta from "../components/Cta";
import Masonry from "../components/Masonry";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <section className="animate-fade-in">
      <Hero />
      <Cards link="/shop" title="Best Sellers" catType="best-seller" />
      <Cards link="/shop?category=mens-clothing" title="Men's Clothing" catType="mens-clothing" className="mt-28" />
      <Cards
        link="/shop?category=womens-clothing"
        title="Women's Clothing"
        catType="womens-clothing"
        className="mt-28"
      />
      <Cta className="mt-28" />
      <Masonry />
    </section>
  );
};

export default HomePage;
