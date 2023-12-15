import Clients from "./home-page/Clients";
import ShopCard from "./home-page/ShopCard";
import ProductCards from "./home-page/ProductCards";
import Content from "./home-page/Content";
import Features from "./home-page/Features";
import Blog from "./home-page/Blog";
import MainSlider from "./home-page/MainSlider";

export const HomePage = () => {
  return (
    <div>
      <MainSlider />
      <Clients />
      <ShopCard />
      <ProductCards />
      <Content />
      <Features />
      <Blog />
    </div>
  );
};
export default HomePage;
