import Hero from "../components/home-page/Hero";
import Clients from "../components/home-page/Clients";
import ShopCard from "../components/home-page/ShopCard";
import ProductCards from "../components/home-page/ProductCards";
import Content from "../components/home-page/Content";
import Features from "../components/home-page/Features";
import Blog from "../components/home-page/Blog";
import Footer from "../layouts/Footer";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Clients />
      <ShopCard />
      <ProductCards />
      <Content />
      <Features />
      <Blog />
      <Footer />
    </div>
  );
};
export default HomePage;
