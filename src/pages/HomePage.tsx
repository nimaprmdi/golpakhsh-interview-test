import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ItemListings from "../components/ItemListings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <ItemListings isHome={true} />
    </>
  );
};

export default HomePage;
