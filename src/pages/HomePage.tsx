import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Cta from "../components/Cta";
import Masonry from "../components/Masonry";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Cards title="Best Sellers" catType="best-seller" />
      <Cards title="Best Sellers" catType="best-seller" className="mt-28" />
      <Cards title="Best Sellers" catType="best-seller" className="mt-28" />
      <Cta className="mt-28" />
      <Masonry />
    </>
  );
};

export default HomePage;
